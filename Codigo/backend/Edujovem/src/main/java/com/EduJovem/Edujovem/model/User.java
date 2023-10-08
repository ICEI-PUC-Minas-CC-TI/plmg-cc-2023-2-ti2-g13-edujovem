package com.EduJovem.Edujovem.model;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
// se der error pode ser pq uma e Integer e outra é Long
@Entity
@Table(name = "tb_user_with_auth")
public class User implements UserDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="user_id")
	private Integer id;
	private String name;
	private String email;
	private String senha;
	@ManyToMany(fetch=FetchType.EAGER) // Dados relacionados serão carregados imediatamente junto com a entidade principal sempre que a entidade principal for recuperada do banco de dados.
	@JoinTable(
		name="user_role_junction",
		joinColumns = {@JoinColumn(name="user_id")},
		inverseJoinColumns = {@JoinColumn(name="role_id")}
	) 
	private Set<Role> authorities; // Set uma colecao que nao permite elemnt duplicados
	
	public User(){
		super();
		this.authorities = new HashSet<Role>();
	}

	
	
	public User(Integer id, String name, String email, String senha, Set<Role> authorities) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.senha = senha;
		this.authorities = authorities;
	}

	// public User(Integer id, String name, String senha, Set<Role> authorities) {
	// 	super();
	// 	this.id = id;
	// 	this.name = name;
	// 	this.senha = senha;
	// 	this.authorities = authorities;
	// }
	

	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}



	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return this.authorities;
	}
	
	public void setAuthorities(Set<Role> authorities) {
		this.authorities = authorities;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return this.senha;
	}
	
	public void setSenha(String senha) {
		this.senha = senha;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return this.name;
	}
	
	public void setName(String name) {
		this.name = name;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}
	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}
	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}
	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
	
}
