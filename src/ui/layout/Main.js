import {Route,Switch} from "react-router-dom"
import Home from "../paginas/Home"
import Productos from "../paginas/Productos"
import Mensajes from "../paginas/Mensajes"
import Perfil from "../paginas/Perfil"

const Main = () => 
    <main>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>

            <Route path="/productos">
                <Productos/>
            </Route>

            <Route path="/perfil">
                <Perfil/>
            </Route>

            <Route path="/mensajes">
                <Mensajes/>
            </Route>
        </Switch>
    </main>

export default Main