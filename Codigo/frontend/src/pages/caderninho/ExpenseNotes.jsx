import { useState, useEffect } from "react";

// CSS
import styles from "./ExpenseNotes.module.css";

// SERVICES
import { api, getAllExpenses, deleteExpense } from "../../../services/api";

// COMPONENTS
import Button from "../../components/Button";
import Expense from "./Expense";
const ExpenseNotes = () => {
   const [expenses, setExpenses] = useState([]);

   const fetchAllExpenses = async () => {
      try {
         const jwt = localStorage.getItem("jwt");
         api.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

         const res = await getAllExpenses();
         const expensesArray = Array.isArray(res.data) ? res.data : [];
         setExpenses(expensesArray);
      } catch (err) {
         console.log(err);
      }
   };

   const handleDeleteExpense = async (expenseId) => {
      try {
        await deleteExpense(expenseId);
        // Atualize o estado do componente pai após a exclusão
        fetchAllExpenses();
      } catch (error) {
        console.error('Erro ao excluir despesa:', error);
      }
    };

   useEffect(() => {
      console.log("Deu fatch");
      fetchAllExpenses();
   }, []);

   useEffect(() => {
      console.log("Expenses atualizadas:", expenses);
   }, [expenses]);

   return (
      <div>
         {expenses && expenses.map((expense) => <Expense key={expense.id} expense={expense} onDelete={handleDeleteExpense} />)}
      </div>
   );
};

export default ExpenseNotes;
