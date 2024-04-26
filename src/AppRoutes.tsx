import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Layout from './layout/Layout'
import Area from './components/Area/Index'
import Home from './pages/Home/Home'

export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path='/' element={<Home/>}/>
                </Route>
            </Routes>
        </Router>
    )
}

