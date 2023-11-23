import React from 'react'
import { NavLink, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet"; 

// CSS
import styles from './ExpenseReport.module.css'

// ICONS
import { IoIosArrowBack } from 'react-icons/io';

// COMPONENTS
import Button from '../../components/Button'

const ExpenseReport = () => {
  return (
    <div className={styles.ExpenseReport}>
        <nav>
            <NavLink to="/home">
                <Button size="large"><IoIosArrowBack /></Button>
            </NavLink>
            <h1>Pagina de relatórios de gastos</h1>
            <div></div>

            
        </nav>

    </div>
  )
}

export default ExpenseReport