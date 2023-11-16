import { NavLink } from 'react-router-dom';

// IMG
import img404 from '../../assets/img/404/ERROR404LUPA.ti2.jpg'

// ICONS
import { IoIosArrowBack } from 'react-icons/io';

// CSS
import styles from './NotFound.module.css'

// COMPONENTS
import Button from '../../components/Button';

const NotFound = () => {
    return (
        <div className={styles.container}>
          <h1 className={styles.heading}>404 - Página não encontrada</h1>
          <p className={styles.paragraph}>Ops! Parece que você se perdeu no mundo financeiro.</p>
          <p className={styles.paragraph}>Não se preocupe, você pode voltar à Pagina inicial.</p>
          <NavLink to="/home" className={styles.link}><Button size="one" intent="emphasis1"><IoIosArrowBack size={30}/></Button></NavLink>
          <img src={img404} alt="Imagem de finanças" className={styles.image} />
        </div>
      )
}
// className={styles.image}
export default NotFound