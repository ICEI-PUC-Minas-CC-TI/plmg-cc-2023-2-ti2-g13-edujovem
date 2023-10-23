package com.EduJovem.models.payload;

public class RegistrationDTO {
    private String name;
    private String username;
    private String email;
    private String password;

    public RegistrationDTO(){
        super();
    }

    public RegistrationDTO(String name, String username, String email, String password){
        super();
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public void setName(String name){
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public String getUsername(){
        return this.username;
    }

    public void setUsername(String username){
        this.username = username;
    }

    public String getEmail(){
        return this.email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword(){
        return this.password;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public String toString(){
        return "Registration info: username: " + this.name + this.username + this.email + " password: " + this.password;
    }
}
