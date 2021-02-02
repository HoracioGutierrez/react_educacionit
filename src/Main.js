import React from "react"
import {Route,Switch} from "react-router-dom"
import Home from "./Home"
import Productos from "./Productos"
import Mensajes from "./Mensajes"
import Perfil from "./Perfil"

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