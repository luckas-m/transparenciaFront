import styles from './Footer.module.css'
import { ReactComponent as Broadcasting } from '../../assets/Broadcasting.svg'
import { ReactComponent as Commercial } from '../../assets/Commercial.svg'
import { ReactComponent as Info } from '../../assets/Info.svg'
import { ReactComponent as Wheelchair } from '../../assets/Wheelchair.svg'
import {ReactComponent as Twitter} from '../../assets/Twitter.svg'
import {ReactComponent as Facebook} from '../../assets/Facebook.svg'
import {ReactComponent as Arroba} from '../../assets/At sign.svg'
import { ReactComponent as LogoPiaui } from '../../assets/logo-piaui-2.svg'
import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
} from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footers(){
    return(
        <footer>
            <nav>
                <section className={styles.footer}>
                    <div className={styles.footerMeio}>
                        <div>
                            <LogoPiaui/>
                        </div>
                        <div>
                            <FooterTitle title="Governo" />

                            <FooterLinkGroup col className={styles.lista_link}>
                                <FooterLink href="#">Governador</FooterLink>
                                <FooterLink href="#">Vice-Governador CSS</FooterLink>
                                <FooterLink href="#">Agenda do Governador CSS</FooterLink>

                            </FooterLinkGroup>
                        </div>
                        <div>
                        <FooterTitle title="Imprensa" />
                            <FooterLinkGroup col>
                                <FooterLink href="#">Governador</FooterLink>
                                <FooterLink href="#">Vice-Governador CSS</FooterLink>
                                <FooterLink href="#">Agenda do Governador CSS</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle title="Acesso à Informação" />
                                <FooterLinkGroup col>
                                    <FooterLink href="#">Àrea da Transparência</FooterLink>
                                    <FooterLink href="#">Pedido de Acesso a Informação</FooterLink>
                                    <FooterLink href="#">Radar da Transparência</FooterLink>
                                    <FooterLink href="#">Fale Conosco</FooterLink>
                                    <FooterLink href="#">Perguntas Frequentes</FooterLink>
                                    <FooterLink href="#">Lei de Acesso a Informação</FooterLink>
                                </FooterLinkGroup>
                        </div>
                        <div>
                        <FooterTitle title="Acesso Rápido" />
                            <FooterLinkGroup col>
                                <FooterLink href="#">Contracheque Online</FooterLink>
                                <FooterLink href="#">Diário Oficial</FooterLink>
                                <FooterLink href="#">Turismo</FooterLink>
                                <FooterLink href="#">Crie sua Conta Fov.Pi Cidadão</FooterLink>
                                <FooterLink href="#">Tabela de Pagamento dos Servidores do Estado</FooterLink>
                            </FooterLinkGroup>
                        </div>
                    </div>
                    <div className={styles.footerFim}>
                        <div >
                            <ul className={styles.sociais}>
                                <li>
                                    <a href="#"><Arroba/></a>
                                </li>
                                <li>
                                    <a href="#"><Twitter/></a>
                                </li>
                                <li>
                                    <a href="#"><Facebook/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </nav>
        </footer>
    )
}
