import styles from './header.module.css'
import logo from '../imagens/imagem (7).jfif'
import lupa from '../imagens/lupa.png'

function Header() {
    return (
        <header>
            <div className={styles.logo}>
                <img src={logo} alt="" />
            </div>

            <nav className={styles.nav_link}>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>

                <li>
                    <a href="">Escócia</a>
                </li>

                <li>
                    <a href="">Grand Canyon</a>
                </li>

                <li>
                    <a href="">Muralhas da China</a>
                </li>

                <li>
                    <a href="">Aruba</a>
                </li>
                

            </ul>
            </nav>

            <div className={styles.search}>
                <input type="search"  placeholder='Busque por viagens'/>
               <img src={lupa} alt="" className={styles.lupa} />
            </div>
        </header>
    )
}

export default Header