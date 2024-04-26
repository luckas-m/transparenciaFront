import styles from './Header.module.css'
import { ReactComponent as Broadcasting } from '../../assets/Broadcasting.svg'
import { ReactComponent as Commercial } from '../../assets/Commercial.svg'
import { ReactComponent as Info } from '../../assets/Info.svg'
import { ReactComponent as Wheelchair } from '../../assets/Wheelchair.svg'
import {ReactComponent as Twitter} from '../../assets/Twitter.svg'
import {ReactComponent as Facebook} from '../../assets/Facebook.svg'
import {ReactComponent as Arroba} from '../../assets/At sign.svg'
import { ReactComponent as LogoPiaui } from '../../assets/logo-piaui-2.svg'
import Dropdown from '../Dropdown/Index'

export default function Header(){



    return(
        <header>
            <nav>
                <section className={styles.header}>
                    <div className={styles.headerTopo}>
                        <div>
                            <ul className={styles.funcoesSite}>
                                <li>
                                    <a href="#"><Broadcasting className='svg'/> <>Mapa do Site</></a>
                                </li>
                                <li>
                                    <a href="#"><Info/>e-SIC</a>
                                </li>
                                <li>
                                    <a href="#"><Commercial/> <>e-OUV</></a>
                                </li>
                                <li>
                                    <div>
                                        <a href="#"><Wheelchair/></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
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
                    <div className={styles.headerMeio}>
                        <div>
                            <LogoPiaui/>
                        </div>
                        <div>
                            <h2>Portal da Transparência</h2>
                        </div>
                    </div>
                    <div className={styles.headerBaixo}>
                        <div>
                            <ul>
                                <div className={styles.divLink}>
                                    <li>
                                        <a href="#">Início</a>
                                    </li>
                                </div>
                                <li>
                                    <Dropdown name='O Portal'>
                                        <div className={styles.dropdown}>
                                            <a href="">Manual de Navegação</a>
                                            <a href="">Perguntas frequentes</a>
                                            <a href="">Glossário</a>        
                                        </div>
                                    </Dropdown>
                                </li>
                                <li>
                                    <Dropdown name='Consultas'>
                                        <div className={styles.dropdown}>
                                            <a href="">Transparência COVID-19</a>
                                            <a href="">Despesas</a>
                                            <a href="">Servidores</a>
                                            <a href="">Receitas</a>
                                            <a href="">Convênios|Parcerias</a>
                                            <a href="">Licitações</a>
                                            <a href="">Obras</a>
                                            <a href="">Contratos</a>
                                            <a href="">Veículos</a>
                                            <a href="">Diárias e Passagens</a>
                                            <a href="">Impedidos</a>
                                            <a href="">Termos de Cooperação técnica</a>
                                            <a href="">Renuncia Fiscal</a>
                                            <a href="">Precatórios Fundef</a>
                                            <a href="">Despesas Líquidas</a>
                                            <a href="">Dívida Pública</a>
                                        </div>
                                    </Dropdown>
                                </li>
                                <li>
                                    <a href="#">Gráficos</a>
                                </li>
                                <li>
                                    <a href="#">Acesso á informações</a>
                                </li>
                                <li>
                                    <a href="#">Carta de Serviços</a>
                                </li>
                                <li>
                                    <a href="#">Dados Abertos</a>
                                </li>
                                <li>
                                    <a href="#">Aplicativos</a>
                                </li>
                                <li>
                                    <Dropdown name='Outros serviços'>
                                        <div className={styles.dropdown}>
                                            <Dropdown name='Transparencias Fiscais'>
                                                <div className={styles.subDropdown}>
                                                    <a href="">Balanço Geral do Estado</a>
                                                    <a href="">Relatórios da LRF</a>
                                                    <a href="">CAUC (Cad. Único de Convênios)</a>
                                                    <a href="">Estatística da STN</a>
                                                    <a href="">Prestação de Contas - TCE/PI</a>
                                                    <a href="">Publicação DOE</a>
                                                    <a href="">Repasse aos municípios</a>
                                                </div>
                                            </Dropdown>
                                            <Dropdown name='Leis Orçamentárias'>
                                                <div className={styles.subDropdown}>
                                                    <a href="">Lei Orçamentária - LOA </a>
                                                    <a href="">Plano Plunianual - PPA</a>
                                                    <a href="">Lei de Diretrizes Orçamentárias -LDO</a>
                                                </div>
                                            </Dropdown>
                                            <Dropdown name='Planos/Relatórios de Gestão'>
                                                <div className={styles.subDropdown}>
                                                    <a href="">Plano Estadual de saúde</a>
                                                    <a href="">Plano Estadual de Educação</a>
                                                    <a href="">Relatório de Gestão da Saúde</a>
                                                </div>
                                            </Dropdown>
                                            <a href="">Concursos / Seleções</a>
                                            <Dropdown name='Ouvidoria '>
                                                <div className={styles.subDropdown}>
                                                    <a href="">Ouvidoria Geral do Estado</a>
                                                    <a href="">Ouvidoria do Poder Judiciário</a>
                                                    <a href="">Ouvidoria do Poder Legislativo</a>
                                                    <a href="">Ouvidoria do MPE</a>
                                                    <a href="">Ouvidoria do TCE</a>
                                                </div>
                                            </Dropdown>
                                                <a href="">Informações Classificadas</a>
                                                <a href="">Informações Desclassificadas</a>
                                            <Dropdown name='Interno'>
                                                <div className={styles.subDropdown}>
                                                    <a href="">Acesso Órgãos</a>
                                                    <a href="">Acompanhamento de Solicitações do e-Sic</a>
                                                    <a href="">Acompamento de Solicitações do FalaBr</a>
                                                </div>
                                            </Dropdown>
                                        </div>
                                    </Dropdown>
                                </li>
                                <li>
                                    <a href="#">Fale Conosco</a>
                                </li>
                                <li>
                                    <Dropdown name='Outros Poderes'>
                                        <div className={styles.dropdown}>
                                            <a href="">Assembleia Legislativa(ALEPI)</a>
                                            <a href="">Ministério Público</a>
                                            <a href="">Tribunal de Contas</a>
                                            <a href="">Tribunal de Justiça</a>
                                        </div>
                                    </Dropdown>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </nav>
        </header>
    )
}