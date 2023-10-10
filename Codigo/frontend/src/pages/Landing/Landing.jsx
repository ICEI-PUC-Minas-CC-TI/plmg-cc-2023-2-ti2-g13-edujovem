import React from "react";
import { NavLink, BrowserRouter } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.Landing}>
      <div>
        <h1>Educaçao financeira é para todos</h1>
        <p>
          Aprender sobre finanças não precisa ser complicado ou chato, em
          qualquer idade. Com o <span>EduJovem</span>, visamos capacitar o
          cidadão para o mercado financeiro, preparando-o para conquistar seus
          sonhos em todas as escalas do tempo.
        </p>

        <NavLink to="/why">
          <button>Porque aprender ?</button>
        </NavLink>
      </div>
      <div>
        <img src="https://i.postimg.cc/65QxYYzh/001234.png" alt="" />
      </div>
    </div>
  );
};

export default Landing;
