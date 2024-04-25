import Styles from './ComponenteProps.module.css'

function ComponenteProps({lugar, texto, bandeira}) {
  return (
    <div className={Styles.corpo_texto}>

      <h2>Venha Explorar esse lugar incrivel, venha conhecer {lugar}</h2>

      <p>{texto}</p>

      <img className={Styles.imagem} src={bandeira} alt="bandeira" />

    </div>

  )
}
export default ComponenteProps