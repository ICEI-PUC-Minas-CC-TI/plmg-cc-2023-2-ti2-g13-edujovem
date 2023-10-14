import { useState } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = ({ addExpense }) => {
   const [valueInput, setValueInput] = useState("");
   const [text, setText] = useState("");
   const [category, setCategory] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!valueInput || !text) return;
      addExpense(valueInput, text, category);
      setValue();
      setText("");
      setCategory("");
   };

   return (
      <div>
         <h2>Registrar gasto</h2>
         <form onSubmit={handleSubmit}>
            <label>
               <input
                  type="text"
                  placeholder="R$:"
                  value={valueInput}
                  onChange={(e) => setValueInput(e.target.value)}
               />
            </label>
            <label>
               <input
                  type="text"
                  placeholder="motivo do gasto"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
               />
            </label>
            <select
               value={category}
               onChange={(e) => setCategory(e.target.value)}
            >
               <option value="">Selecione uma categoria</option>
               <option value="guloseimas">Guloseimas</option>
               <option value="estudo">estudo</option>
               <option value="drogas">Drogas</option>
            </select>
               <button type="submit">Registrar despesa</button>
         </form>
      </div>
   );
};

export default ExpenseForm;
