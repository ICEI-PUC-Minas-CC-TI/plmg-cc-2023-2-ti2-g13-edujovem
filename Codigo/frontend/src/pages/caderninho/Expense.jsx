import { useEffect, useState } from 'react'

// CSS
import styles from './Expense.module.css'

// COMPONENTS
import Button from '../../components/Button'

// SERVICES
import { api, deleteExpense } from '../../../services/api'

const Expense = ({ expense, onDelete  }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  
  const handleDeleteExpense = async () => {
    try {
      setIsDeleting(true);
      await deleteExpense(expense.id);

      if (onDelete) {
        onDelete(expense.id);
      }
    } catch (error) {
      console.error('Erro ao excluir despesa:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className={styles.expense}>
      <ul className={styles.content}>
        <li>R$: {expense.value}</li>
        <li>{expense.theme}</li>
        <li>{expense.moment}</li>
      </ul>
      <Button intent="delete" size="small" onClick={handleDeleteExpense} disabled={isDeleting }>X</Button>
    </div>
  )
}

export default Expense