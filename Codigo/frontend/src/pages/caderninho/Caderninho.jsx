import { useState } from "react";
import styles from "./Caderninho.module.css";

// COMPONENTS
import ExpenseForm from "./ExpenseForm";
import Expense from "./Expense";
import Search from "../../components/Search";

const Caderninho = () => {
   const [expenses, setExpenses] = useState([
      {
         id: 1,
         valueInput: 34.9,
         text: "picanha norueguesa",
         category: "Guloseimas",
         isCompleted: false,
      },
      {
         id: 2,
         valueInput: 122.9,
         text: "andei de cavalo",
         category: "exercicio",
         isCompleted: false,
      },
      {
         id: 3,
         valueInput: 98.80,
         text: "sanduiche iche iche",
         category: "comida",
         isCompleted: false,
      },
      {
         id: 4,
         valueInput: 98.80,
         text: "sanduiche iche iche",
         category: "comida",
         isCompleted: false,
      },
   ]);
   const addExpense = (valueInput, text, category) => {
      const newExpenses = [
         ...expenses,
         {
            id: Math.floor(Math.random() * 10000),
            valueInput,
            text,
            category,
            isCompleted: false,
         },
      ];
      setExpenses(newExpenses);
   };
   const removeExpense = (id) => {
      const newExpenses = [...expenses];
      const filteredExpenses = newExpenses.filter((exp) =>
         exp.id !== id ? exp : null
      );
      setExpenses(filteredExpenses);
   };
   const [search, setSearch] = useState("");

   return (
      <div className={styles.caderninho}>
         
         <div className="expenses_list overflow-auto">
            {expenses
               .filter((exp) =>
                  exp.text.toLowerCase().includes(search.toLowerCase())
               )
               .map((exp) => (
                  <Expense
                     key={exp.id}
                     expense={exp}
                     removeExpense={removeExpense}
                  />
               ))}
         </div>
         <Search label="Buscar despesa: " placeholder="Pesquisar por nome" search={search} setSearch={setSearch} />
         <ExpenseForm addExpense={addExpense} />
      </div>
   );
};

export default Caderninho;
