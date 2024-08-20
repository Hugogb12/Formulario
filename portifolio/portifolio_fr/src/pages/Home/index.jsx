import { Link } from 'react-router-dom'
import Container from '../components/Container'
import styles from './Home.module.css'
import avatar from '../Sobre/images/name.png'

function Home() {
    return (
       <>
        <Container>
        <section className={styles.home}>
        <div className={styles.apresentacao}>
          <p>
              Olá, sou <br/>
              <span className={`${styles.name}`}>HUGO LUIZ</span> <br />
              Aluno do colegio COTEMIG
          </p>
          <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
              Saiba mais sobre mim
          </Link>
        </div>
        <figure>
          <img className={styles.img_home} src={avatar} alt="Avatar"/>
        </figure>
        </section>
        </Container>
        </> 
    )
}
export default Home