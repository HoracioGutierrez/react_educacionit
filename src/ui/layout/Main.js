import React from "react"
import {Route,Switch} from "react-router-dom"
import Home from "../paginas/Home"
import Productos from "../paginas/Productos"
import Mensajes from "../paginas/Mensajes"
import Perfil from "../paginas/Perfil"

class Main extends React.Component {
    render(){
        return(
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
        )
    }
}

export default Main