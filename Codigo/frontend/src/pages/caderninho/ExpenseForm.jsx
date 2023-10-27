import { useState } from "react";
import styles from "./ExpenseForm.module.css";
// COMPONENTS
import Button from "../../components/Button";

const ExpenseForm = ({ addExpense }) => {
   const [valueInput, setValueInput] = useState("");
   const [text, setText] = useState("");
   const [category, setCategory] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!valueInput || !text) return;
      addExpense(valueInput, text, category);
      setValueInput("");
      setText("");
      setCategory("");
   };

   return (
      <div>
         <h2 className="text-start font-bold">Registrar gasto</h2>
         <form onSubmit={handleSubmit} className="flex flex-col gap-y-2 overflow-auto">
            <label>
               
               <input
                  className="w-[100%] box-border border-0 border-b-[1px] border-[#b3b1b1] bg-transparent focus:outline-0"
                  type="text"
                  placeholder="R$:"
                  value={valueInput}
                  onChange={(e) => setValueInput(e.target.value)}
               />
            </label>
            <label>
               <input
                  className="w-[100%] box-border border-0 border-b-[1px] border-[#b3b1b1] bg-transparent focus:outline-0"
                  type="text"
                  placeholder="Motivo do gasto"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
               />
            </label>
            <select
               className="w-[100%] box-border border-0 border-b-[1px] border-[#b3b1b1] bg-transparent focus:outline-0"
               value={category}
               onChange={(e) => setCategory(e.target.value)}
            >
               <option value="">Selecione uma categoria</option>
               <option value="guloseimas">Guloseimas</option>
               <option value="estudo">estudo</option>
               <option value="drogas">Drogas</option>
            </select>
               <Button intent={'emphasis2'} className="bg-[#A2A2A2]">Registrar </Button>
         </form>
      </div>
   );
};

export default ExpenseForm;
