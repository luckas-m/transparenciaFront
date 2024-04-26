import Area from "../../components/Area/Index";
import CardServico from "../../components/CardServico/CardServico";
import {ReactComponent as CoinHand} from '../../assets/Coin in Hand.svg'
import {ReactComponent as Real} from '../../assets/Real.svg'
import {ReactComponent as User} from '../../assets/User.svg'
import {ReactComponent as Handshake} from '../../assets/Debt.svg'
import {ReactComponent as Debt} from '../../assets/Handshake.svg'
import {ReactComponent as Constructing} from '../../assets/Constructing.svg'
import {ReactComponent as Airplane} from '../../assets/Airplane Take Off.svg'
import {ReactComponent as Engineer} from '../../assets/Engineer.svg'
import {ReactComponent as Car} from '../../assets/Car.svg'
import {ReactComponent as Ambulance} from '../../assets/Ambulance.svg'
import {ReactComponent as Contract} from '../../assets/Conclusion Contract.svg'

export default function Home(){
    return(
        <>
            <Area>
                <CardServico logo={<CoinHand/>} titulo={"Receitas"} descricao={'Nesta seção, são divulgadas os detalhes e informações sobre as despesas...'}/>
                <CardServico logo={<Real/>} titulo={"Despesas"} descricao={'Nesta seção, são divulgadas informações das despesas com detalhamento...'}/>
                <CardServico logo={<User/>} titulo={"Servidores"} descricao={"Nesta seção, são divulgadas os detalhes e informações sobre as despesas..."}/>
                <CardServico logo={<Handshake/>} titulo={"Parcerias"} descricao={"Nesta seção é possivel encontrar informações sobre convênios e parcerias"}/>
                <CardServico logo={<Debt/>} titulo={"Dívida Pública"} descricao={"Nesta seção é possivel encontrar informações sobre convênios e parcerias"}/>
                <CardServico logo={<Constructing/>} titulo={"Licitações"} descricao={"Nesta seção é possivel encontrar informações sobre licitações"}/>
                <CardServico logo={<Airplane/>} titulo={"Diárias e Passagens"} descricao={"Nesta seção é possivel obter informações sobre diárias e passagens"}/>
                <CardServico logo={<Engineer/>} titulo={"Obras"} descricao={"Nesta seção é possivel obter informações sobre obras..."}/>
                <CardServico logo={<Car/>} titulo={"Veículos"} descricao={"Nesta seção é possivel obter informações sobre diárias e passagens..."}/>
                <CardServico logo={<Ambulance/>} titulo={"COVID-19"} descricao={"Nesta seção é possivel obter informações sobre diárias e passagens..."}/>
                <CardServico logo={<Contract/>} titulo={"Contratos"} descricao={"Nesta seção é possivel obter informações sobre diárias e passagens..."}/>
            </Area>
        </>
    )
}