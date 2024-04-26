import {Outlet} from 'react-router-dom'
import Header from '../components/Header/Index'
import styles from './Layout.module.css'
import Footer from '../components/Footer/Index'

export default function Layout(){
    return(
        <>
        <Header/>
        <div className={styles.layout}>
            <Outlet></Outlet>
        </div>
        <Footer/>
        </>
    )
}