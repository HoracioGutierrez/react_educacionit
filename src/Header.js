import React from "react"
import Nav from "./Nav"

class Header extends React.Component {
    
    render(){

        const {titulo,cantidad,links} = this.props

        return(
            <header>
                <h1>{titulo}</h1>
                <p>{cantidad}</p>
                <Nav links={links}/>
            </header>
        )
    }
}



/* const Header = (props) => {

    return(
        <header>
            <h1>{props.titulo}</h1>
            <p>{props.cantida}</p>
            <Nav/>
        </header>
    )
}
 */
export default Header