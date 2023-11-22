import React from 'react'
import { NavLink, Navigate } from "react-router-dom";
// CSS
import styles from './ExpenseReport.module.css'

// ICONS
import { IoIosArrowBack } from 'react-icons/io';
//import { DollarSign } from 'react-feather';

// COMPONENTS
import Button from '../../components/Button'

const ExpenseReport = () => {
  return (
    <div className={styles.ExpenseReport}>
        <nav>
            <NavLink to="/home">
                <Button size="large"><IoIosArrowBack /></Button>
            </NavLink>
            <h1>Pagina de relatótios de gastos</h1>
            <Button size="large"><DollarSign size={18} /></Button>
        </nav>

    </div>
  )
}

export default ExpenseReport