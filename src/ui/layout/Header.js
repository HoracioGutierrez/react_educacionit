import React from "react"
import Nav from "../componentes/Nav"
import {Link} from "react-router-dom"

class Header extends React.Component {
    
    render(){

        const {titulo} = this.props

        return(
            <header>
                <Link to="/">
                    <h1>{titulo}</h1>
                </Link>
                <Nav/>
            </header>
        )
    }
}

export default Header