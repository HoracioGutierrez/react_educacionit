import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"


class App extends React.Component {

    constructor(){
        super()
        this.state = {
            titulo : "Mi Primer App - state",
            cantidad : 0,
            vive : true,
            links : ["productos","mensajes","perfil"],
            comentarios : [{nombre:"carlos",comentario:"Todo bien?"}],
            nombre : "",
            comentario : ""
        }
    }

    cambiarUsuario = () => {
        console.log("Soy App") 
    }    

    sumarCantidad = () => {
        this.setState({ cantidad : this.state.cantidad + 1 })
    }

    restarCantidad = () => {
        if(this.state.cantidad > 0){
            this.setState({ cantidad : this.state.cantidad - 1 })
        }
    }

    resetearCantidad = () => {
        this.setState({ cantidad : 0 })
    }

    cambiaElInput = (e) => {
        //const input = document.querySelector("input")
        //console.log(e.target.value)
        //console.log(input.value)
        this.setState({ nombre : e.target.value })
    }

    cambiaElTextarea = (e) => {
        //console.log("Cambio el valor el texarea")
        //console.log(e.target.value)
        this.setState({ comentario : e.target.value })
    }

    manejarElSubmit = (e) => {
        //Con esta linea cancelo el comportamiento predeterminado de la etiqueta form (recargar la pagina + borrar todo)
        e.preventDefault()

        this.setState({
            comentarios : [
                ...this.state.comentarios,
                {
                    nombre : this.state.nombre,
                    comentario : this.state.comentario
                }
            ]
        })

        /* const nuevoComentario = {
            nombre : this.state.nombre ,
            comentario : this.state.comentario
        } */

        //this.state.comentarios.push(nuevoComentario)

        //const nuevoArray = []
        //const nuevoArray = this.state.comentarios.slice(0)
        //const copia = [...this.state.comentarios]
        //copia.push(nuevoComentario)

        //this.setState({ comentarios : copia })
    }


    render(){

        const {titulo,cantidad,vive,links,nombre,comentario,comentarios} = this.state

        return (
            <>  
                <Header titulo={titulo} cantidad={cantidad} vive={vive} cambiarUsuario={this.cambiarUsuario} links={links}/>
                <Main/>
                <Footer links={links}/>
            </>
        )
    }
}


export default App

