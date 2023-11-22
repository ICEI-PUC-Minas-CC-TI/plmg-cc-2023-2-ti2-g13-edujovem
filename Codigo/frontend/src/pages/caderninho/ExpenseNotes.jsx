import { useState, useEffect } from "react";

// CSS
import styles from './ExpenseNotes.module.css'

// SERVICES
import { api, getAllExpenses } from "../../../services/api";

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

   useEffect(() => {
      console.log("Deu fatch");
      fetchAllExpenses();
   }, []);

   useEffect(() => {
      console.log("Expenses atualizadas:", expenses);
   }, [expenses]);

   return (
      <div>
         {expenses &&
                  expenses.map((expense) => (
                     <Expense expense={expense} />
                  ))}

      </div>
   );
};

export default ExpenseNotes;
