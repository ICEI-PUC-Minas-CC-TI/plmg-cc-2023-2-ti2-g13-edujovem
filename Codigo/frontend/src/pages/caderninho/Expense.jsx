import React from 'react'

// CSS
import styles from './Expense.module.css'

// COMPONENTS
import Button from '../../components/Button'

const Expense = ({ expense }) => {
  return (
    <div className={styles.expense}>
      <ul className={styles.content}>
        <li>R$: {expense.value}</li>
        <li>{expense.theme}</li>
        <li>{expense.moment}</li>
      </ul>
      <Button intent="delete" size="small">X</Button>
    </div>
  )
}

export default Expense