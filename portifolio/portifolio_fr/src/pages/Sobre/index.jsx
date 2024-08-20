import styles from './Sobre.module.css'
import avatar from './images/hacker.png'
import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.png'
import react from './images/atom.png'
import node from './images/developer.png'
import sql from './images/sql.png'

function Sobre() {
    return (
    <section className={styles.sobre}>
            
        <div className={styles.bio}>
            <img src={avatar} alt="Avatar" className={styles.avatar} />
            <div className={styles.textos}>
                
                <h2>Sobre</h2>
                <p>Sou <span>Hugo Luiz</span> <br />
                <strong>Aluno do COTEMIG</strong> </p>
                <p>Estudo programação por 2 anos</p>
                <p>Meu maior interesse é na area de desenvolvimento web</p>

            </div>
        </div>

        <div className={styles.techs}>
            <h3>Techs</h3>
            <div className={styles.icones}>
                <img src={html} alt="Ícone do html" />
                <img src={css} alt="Ícone do css" />
                <img src={js} alt="Ícone do js" />
                <img src={react} alt="Ícone do react" />
                <img src={node} alt="Ícone do node" />
                <img src={sql} alt="Ícone do sql" />
            </div>
        </div>

    </section>
    )
}

export default Sobre