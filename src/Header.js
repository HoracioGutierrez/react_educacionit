import React from "react"
import Nav from "./Nav"

/* class Header extends React.Component {
    render(){
        return(
        <header>
            <h1>Titulo</h1>
            <Nav/>
        </header>
        )
    }
} */

const Header = ({titulo,cantida,vive,cambiarUsuario}) => {

    console.log(vive)
    console.log(cambiarUsuario())
    //Destructuring
    //const {titulo:titulo,cantidad:cantidad} = props
    //const {titulo,cantidad} = props
    //const titulo = props.titulo
    //const cantidad = props.cantida

    /* console.log(titulo)
    console.log(cantida) */

    return(
        <header>
            <h1>{titulo}</h1>
            <p>{cantida}</p>
            <Nav/>
        </header>
    )
}

export default Header