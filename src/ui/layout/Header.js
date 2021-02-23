import React from "react"
import Nav from "../componentes/Nav"
import {Link} from "react-router-dom"
//import {connect} from "react-redux"
import {useSelector} from "react-redux"

const Header = (/* {titulo_principal} */) => {

    const titulo_principal = useSelector(({titulo_principal})=>titulo_principal)

    return(
        <header>
            <Link to="/">
                <h1>{titulo_principal}</h1>
            </Link>
            <Nav/>
        </header>
    )
}

export default Header




/* export default connect(
    ({titulo_principal}) => ({ titulo_principal })
)(Header) */