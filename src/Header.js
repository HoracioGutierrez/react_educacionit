import React from "react"
import Nav from "./Nav"
import {Link} from "react-router-dom"

class Header extends React.Component {
    
    render(){

        const {titulo,links} = this.props

        return(
            <header>
                <Link to="/">
                    <h1>{titulo}</h1>
                </Link>
                <Nav links={links}/>
            </header>
        )
    }
}

export default Header