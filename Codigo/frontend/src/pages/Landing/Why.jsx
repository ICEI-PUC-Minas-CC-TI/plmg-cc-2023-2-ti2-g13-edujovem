import React from "react";
import InfoCard from "../../components/InfoCard";
import styles from "./Why.module.css";

const Why = () => {
  return (
    <div className={styles.Why}>
      <h1 className={styles.WhyTitle}>Por que aprender sobre educação financeira ?</h1>
      <div className={styles.cards}>
        <InfoCard title="motivo 1">
          Aprender sobre finanças não precisa ser complicado ou chato, em
          qualquer idade. Com o EduJovem, visamos capacitar o cidadão para o
          mercado financeiro, preparando-o para conquistar seus sonhos em todas
          as escalas de tempo.
        </InfoCard>
        <InfoCard title="motivo 2">
          Aprender sobre finanças não precisa ser complicado ou chato, em
          qualquer idade. Com o EduJovem, visamos capacitar o cidadão para o
          mercado financeiro, preparando-o para conquistar seus sonhos em todas
          as escalas de tempo.
        </InfoCard>
        <InfoCard title="motivo 3">
          Aprender sobre finanças não precisa ser complicado ou chato, em
          qualquer idade. Com o EduJovem, visamos capacitar o cidadão para o
          mercado financeiro, preparando-o para conquistar seus sonhos em todas
          as escalas de tempo.
        </InfoCard>
      </div>
    </div>
  );
};

export default Why;
