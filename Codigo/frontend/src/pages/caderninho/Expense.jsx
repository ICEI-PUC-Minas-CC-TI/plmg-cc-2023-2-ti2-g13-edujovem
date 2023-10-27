import React from 'react'
import styles from './Expense.module.css'
const Expense = ({expense, removeExpense}) => {
  return (
    <div className={styles.expense}>
      <ul className={styles.content}>
        <li>R$: {expense.valueInput}</li>
        <li>{expense.text}</li>
        <li>{expense.category}</li>
      </ul>
      <div className='w-auto h-full p-0'>
        <button className="bg-[#d9534f] w-full h-full" onClick={() => removeExpense(expense.id)}>x</button>
      </div>
    </div>
  )
}

export default Expense