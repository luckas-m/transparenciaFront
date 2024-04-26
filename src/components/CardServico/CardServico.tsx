import {ReactComponent as CoinhandLogo} from '../../assets/Coin in Hand.svg'
import styles from './CardServico.module.css'

interface CardServicoProps{
    logo?:React.ReactElement
    titulo?:React.ReactNode
    descricao?:React.ReactNode
}

export default function CardServico({logo, titulo, descricao}:CardServicoProps){
    return(
        <div className={styles.cardContainer}>
            <div className={styles.cardContent}>
                <div className={styles.cardLogo}>
                    <div> {logo} </div>
                </div>
                <div className={styles.cardTitulo}>
                    <h3>{titulo}</h3>
                </div>
                <div className={styles.cardDescricao}>
                    <span>{descricao}</span>
                </div>
                <div className={styles.cardLink}>
                    <a href="#">Acesse o serviço</a>
                </div>
            </div>
        </div>
    )
}