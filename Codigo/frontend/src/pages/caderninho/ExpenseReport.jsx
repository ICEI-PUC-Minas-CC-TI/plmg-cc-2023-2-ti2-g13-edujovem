import React, { useEffect, useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Bar } from "react-chartjs-2";

import { nextExpense } from "../../../services/api";

// CSS
import styles from "./ExpenseReport.module.css";

// ICONS
import { IoIosArrowBack } from "react-icons/io";

// COMPONENTS
import Button from "../../components/Button";

const ExpenseReport = () => {
  const [valorDoGrafico, setValorDoGrafico] = useState(null);

  useEffect(() => {
    const buscarDespesaFutura = async () => {
      try {
        console.log("inicio")
        const response = await nextExpense();
        setValorDaDespesa(response.data); 
      } catch (error) {
        console.error("Erro ao buscar despesa futura:", error);
      }
    };

    buscarDespesaFutura();
  }, []);

  const dadosDoGrafico = {
    labels: ["Gastos Mensais"],
    datasets: [{
      label: "Gastos",
      data: [valorDoGrafico],
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
    }],
  };

  const opcoesDoGrafico = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className={styles.ExpenseReport}>
      <nav>
        <NavLink to="/home">
          <Button size="large">
            <IoIosArrowBack />
          </Button>
        </NavLink>
        <h1>Pagina de relatórios de gastos</h1>
        <div></div>
      </nav>
      <div>
        {valorDoGrafico !== null ? (
          <Bar data={dadosDoGrafico} options={opcoesDoGrafico}/>
        ):(
          <p>Carregando...</p>
        )}
      </div>
    </div>
  );
};

export default ExpenseReport;