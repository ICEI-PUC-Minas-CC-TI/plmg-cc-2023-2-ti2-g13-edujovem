import React, { useState } from "react";
import styles from './RendaForm.module.css'

const RendaForm = () => {
   const [balance, setBalance] = useState(0.00);
   const [source, setSource] = useState("")

    const handleSubmitBalance = (e) => {
        e.preventDefault()
        const rent = {
            balance,
            source,
        }
        console.log(rent)
    }

   return (
      <div className={styles.renda}>
         <h1>Registre sua renda estimada mensal</h1>
         <form onSubmit={handleSubmitBalance}>
            <label>
               <span>Saldo: </span>
               <input
                  type="number"
                  name="username"
                  required
                  placeholder="Valor recebido por mes"
                  value={balance}
                  onChange={(e) => setBalance(e.target.value)}
               />
            </label>
            <select
               value={source}
               onChange={(e) => setSource(e.target.value)}
            >
               <option value="">Selecione uma categoria</option>
               <option value="mesada">Mesada</option>
               <option value="estagio">Estagio</option>
               <option value="trabalho">Trabalho</option>
               <option value="outra">Outra</option>
            </select>
            <button type="submit" className="btn" >Registrar</button>
         </form>
      </div>
   );
};

export default RendaForm;
