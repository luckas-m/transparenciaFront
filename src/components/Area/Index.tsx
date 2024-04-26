import styles from './Area.module.css'

interface areaProps{
    children?:React.ReactNode
}

export default function Area({children}:areaProps){
    return(
        <>
            <div className={styles.container}>
                <div className={styles.cabecalhoContainer}>
                    <h3>Serviços da Transparência</h3>
                </div>
                <div className={styles.corpoContainer}>
                    {children} 
                </div>
            </div>
        </>
    )
}