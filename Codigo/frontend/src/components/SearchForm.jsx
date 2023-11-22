import { useNavigate } from "react-router-dom" 
import { useState } from "react" 
import styles from './SearchForm.module.css'

const SearchForm = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        navigate('/search?q=' + query)
    }

  return (
    <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <input className={styles.input} input type="text" onChange={(e) => (setQuery(e.target.value))} />
        <input className={styles.button} type="submit" value="Buscar"/>
    </form>
  )
}

export default SearchForm