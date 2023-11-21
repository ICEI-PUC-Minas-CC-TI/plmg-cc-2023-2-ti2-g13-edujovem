import { NavLink } from "react-router-dom";
// CSS
import styles from "./Admin.module.css";

// COMPONENTS
import Card from "../../components/Card";
import Button from "../../components/Button";

// HOOKS
import { useAuthContext } from "../../hooks/useAuthContext";
import useIcons from "../../hooks/useIcons";
import useOpenLinkInNewTab from "../../hooks/useOpenLinkInNewTab";

// COMPONENTS
import NavBarAdmin from "./NavBarAdmin";



const Admin = () => {
   const { InstagramIcon, LinkedInIcon, GithubIcon  } = useIcons()
   const openLinkInNewTab = useOpenLinkInNewTab()

   return (
      <>
         <div>
            <NavBarAdmin />
         </div>
         <div className={styles.admin}>
            <h1> Pagina de <span>Administrador</span> !</h1>
            <h2>Fundadores: </h2>
            <div className={styles.cards}>
               <Card
                  title="Thomas Neuenschwander"
                  content="Desenvolvedor backend + frontend"
                  imageUrl="https://via.placeholder.com/300"
               >
                  <div className={styles.midias}>
                     <Button onClick={() => openLinkInNewTab('https://www.instagram.com/thomas_neuenschwander/')}> <InstagramIcon /> </Button>
                     <Button onClick={() => openLinkInNewTab('https://www.linkedin.com/in/thomas-neuenschwander-87a568267/')}> <LinkedInIcon /> </Button>
                     <Button onClick={() => openLinkInNewTab('https://github.com/thomneuenschwander')}> <GithubIcon /> </Button>
                  </div>
               </Card>
               <Card
                  title="Matheus Fagundes"
                  content="Desenvolvedor backend"
                  imageUrl="https://via.placeholder.com/300"
               >
                  <div className={styles.midias}>
                     <Button onClick={() => openLinkInNewTab('https://www.instagram.com/thomas_neuenschwander/')}> <InstagramIcon /> </Button>
                     <Button onClick={() => openLinkInNewTab('https://www.linkedin.com/in/thomas-neuenschwander-87a568267/')}> <LinkedInIcon /> </Button>
                     <Button onClick={() => openLinkInNewTab('https://github.com/thomneuenschwander')}> <GithubIcon /> </Button>
                  </div>
               </Card>
               <Card
                  title="Rodrigo Drummond"
                  content="Desenvolvedor sist inteligente + backend"
                  imageUrl="https://via.placeholder.com/300"
               >
                  <div className={styles.midias}>
                     <Button onClick={() => openLinkInNewTab('https://www.instagram.com/thomas_neuenschwander/')}> <InstagramIcon /> </Button>
                     <Button onClick={() => openLinkInNewTab('https://www.linkedin.com/in/thomas-neuenschwander-87a568267/')}> <LinkedInIcon /> </Button>
                     <Button onClick={() => openLinkInNewTab('https://github.com/thomneuenschwander')}> <GithubIcon /> </Button>
                  </div>
               </Card>
               <Card
                  title="Vinicius Goddard"
                  content="Desenvolvedor frontend + designer"
                  imageUrl="https://via.placeholder.com/300"
               >
                  <div className={styles.midias}>
                     <Button onClick={() => openLinkInNewTab('https://www.instagram.com/thomas_neuenschwander/')}> <InstagramIcon /> </Button>
                     <Button onClick={() => openLinkInNewTab('https://www.linkedin.com/in/thomas-neuenschwander-87a568267/')}> <LinkedInIcon /> </Button>
                     <Button onClick={() => openLinkInNewTab('https://github.com/thomneuenschwander')}> <GithubIcon /> </Button>
                  </div>
               </Card>
            </div>
         </div>
      </>
   );
};

export default Admin;
