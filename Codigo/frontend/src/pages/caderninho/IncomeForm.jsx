import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// CSS
import styles from "./IncomeForm.module.css";

// ICONS
import { IoIosArrowBack } from "react-icons/io";
import { FaPen } from "react-icons/fa";

// COMPONENTS
import Button from "../../components/Button";

// SERVICES
import { api, addExpenses } from "../../../services/api";

const IncomeForm = () => {
   const navigate = useNavigate();
   const [expenseData, setExpenseData] = useState({
      moment: "",
      theme: "",
      value: 0.0,
   });

   const handleSubmit = async (e) => {
      e.preventDefault();

      setExpenseData((prevData) => ({
         ...prevData,
         moment: "2023-10-27T10:30:00Z",
      }));

      try {
         const jwt = localStorage.getItem("jwt");
         api.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
         console.log(jwt);
         console.log(expenseData.moment);
         const res = await addExpenses(expenseData);

         setExpenseData({
            moment: "",
            theme: "",
            value: 0.0,
         });
         navigate("/home")
      } catch (error) {
         console.error("Erro ao enviar os dados:", error);
      }

   };

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setExpenseData({
         ...expenseData,
         [name]: value,
      });
   };

   return (
      <div className={styles.renda}>
         <h1 className="flex justify-center items-center font-extrabold gap-8 text-2xl font-montserrat">
            Anote sua despesa <FaPen />
         </h1>
         <form className="mb-[2em]" onSubmit={handleSubmit}>
            <label className="flex flex-col mb-[1em]">
               <span className="font-bold mb-[0.3em] text-left">Dia: </span>
               <input
                  className="box-border border-0 border-b-[1px] border-[#b3b1b1] bg-transparent focus:outline-0"
                  type="text"
                  name="moment"
                  required
                  value={expenseData.moment}
                  onChange={handleInputChange}
               />
            </label>
            <label className="flex flex-col mb-[1em]">
               <span className="font-bold mb-[0.3em] text-left">Tema: </span>
               <input
                  className="box-border border-0 border-b-[1px] border-[#b3b1b1] bg-transparent focus:outline-0"
                  type="text"
                  name="theme"
                  required
                  placeholder="Com o que foi gasto essa despesa?"
                  value={expenseData.theme}
                  onChange={handleInputChange}
               />
            </label>
            <label className="flex flex-col mb-[1em]">
               <span className="font-bold mb-[0.3em] text-left">Valor: </span>
               <input
                  className="box-border border-0 border-b-[1px] border-[#b3b1b1] bg-transparent focus:outline-0"
                  type="number"
                  name="value"
                  required
                  placeholder="Valor recebido por mes"
                  value={expenseData.value}
                  onChange={handleInputChange}
               />
            </label>
            <Button intent="save"  size="large">
               Registrar
            </Button>
         </form>
         <NavLink to="/home">
            <Button size="large" intent="emphasis1" >
               <IoIosArrowBack size={30} />
            </Button>
         </NavLink>
      </div>
   );
};

export default IncomeForm;
