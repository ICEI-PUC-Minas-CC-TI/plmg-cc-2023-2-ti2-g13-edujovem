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
         value: 34.9,
         text: "picanha norueguesa",
         category: "Guloseimas",
         isCompleted: false,
      },
      {
         id: 2,
         value: 122.9,
         text: "andei de cavalo",
         category: "exercicio",
         isCompleted: false,
      },
   ]);
   const addExpense = (value, text, category) => {
      const newExpenses = [
         ...expenses,
         {
            id: Math.floor(Math.random() * 10000),
            value,
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
         <h1>Caderninho de despesas</h1>
         <Search search={search} setSearch={setSearch} />
         <div className="expenses_list">
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
         <ExpenseForm addExpense={addExpense} />
      </div>
   );
};

export default Caderninho;
