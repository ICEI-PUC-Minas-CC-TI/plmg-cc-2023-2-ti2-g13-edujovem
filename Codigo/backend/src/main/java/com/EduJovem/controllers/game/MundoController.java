package com.EduJovem.controllers.game;

import com.EduJovem.models.Mensagem;
import com.EduJovem.models.Mundo;
import com.EduJovem.models.Nivel;
import com.EduJovem.repository.MundoRepository;
import com.EduJovem.services.game.MundoService;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.Part;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/mundo")
@CrossOrigin("*")

public class MundoController {

    @Autowired
    private MundoService mundoService;
    @GetMapping("/testehallomundo")
    public String helloMundoController(){
        return "Mundo access level";
    }



    @PostMapping("/addmundo")
    public ResponseEntity<?> addMundo(@RequestBody Mundo mundo){
        return mundoService.addMundo(mundo);
    }

    @GetMapping("/mundos")
    public List<Mundo> getAllMundos(){
        return mundoService.getAllMundos();
    }

    @WebServlet("/UploadMundoImage")
    public class UploadImage extends HttpServlet {
        private static final long serialVersionUID = 1L;

        protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
            String path = request.getServletContext().getRealPath("/img");
            try {
                for(Part part : request.getParts()){
                    if(part.getName().equals("file")){
                        String fileName = part.getSubmittedFileName();
                        part.write(path + File.separator + fileName);
                    }
                }
            } catch (Exception e) {
                e.printStackTrace();
                request.setAttribute("message", "There was an error: " + e.getMessage());
            }
            request.setAttribute("message", "Upload has been done successfully!");
            request.getRequestDispatcher("/index.jsp").forward(request, response);
        }
    }
}
