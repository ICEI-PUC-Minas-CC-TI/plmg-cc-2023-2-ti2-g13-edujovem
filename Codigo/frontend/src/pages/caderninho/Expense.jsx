import React from 'react'
import styles from './Expense.module.css'
const Expense = ({expense, removeExpense}) => {
  return (
    <div className={styles.expense}>
      <ul className={styles.content}>
        <li>{expense.value}</li>
        <li>{expense.category}</li>
      </ul>
      <div>
        <button className={styles.complete}>Completar</button>
        <button className={styles.remove} onClick={() => removeExpense(expense.id)}>x</button>
      </div>
    </div>
  )
}

export default Expense