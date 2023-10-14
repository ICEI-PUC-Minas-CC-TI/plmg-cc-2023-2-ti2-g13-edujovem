import React from 'react'
import styles from './Expense.module.css'
const Expense = ({expense, removeExpense}) => {
  return (
    <div className={styles.expense}>
      <ul className={styles.content}>
        <li>R$: {expense.valueInput.toFixed(2)}</li>
        <li>{expense.text}</li>
        <li>{expense.category}</li>
      </ul>
      <div>
        <button className={styles.remove} onClick={() => removeExpense(expense.id)}>x</button>
      </div>
    </div>
  )
}

export default Expense