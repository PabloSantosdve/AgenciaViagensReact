import Styles from './escocia.module.css'
import ComponenteProps from './ComponenteProps' 

function Escocia(){
    return(
        <div className={Styles.container}>
         <ComponenteProps 
         lugar="Escocia"
         texto="A Escócia é famosa por seus castelos impressionantes, com mais de 2.000 espalhados por todo o país. Entre os mais conhecidos estão o Castelo de Edimburgo, o Castelo de Stirling e o Castelo de Urquhart, à beira do Lago Ness."/>
        </div>
    )
}

export default Escocia