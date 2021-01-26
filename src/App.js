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
            links : ["productos","mensajes","perfil"]
        }
        //this.sumarCantidad = this.sumarCantidad.bind(this)
        //this.restarCantidad = this.restarCantidad.bind(this)
        //this.resetearCantidad = this.resetearCantidad.bind(this)
    }

    cambiarUsuario = () => {
        console.log("Soy App") 
    }    


    /* sumarCantidad(){
        this.setState({ cantidad : this.state.cantidad + 1 })
    } */

    sumarCantidad = () => {
        console.log("Sumar")
        //this.state.cantidad = 4
        this.setState({ cantidad : this.state.cantidad + 1 })
    }

    restarCantidad = () => {
        console.log("Restar")
        if(this.state.cantidad > 0){
            this.setState({ cantidad : this.state.cantidad - 1 })
        }
    }

    resetearCantidad = () => {
        console.log("Resetear")
        this.setState({ cantidad : 0 })
    }


    render(){

        const {titulo,cantidad,vive,links} = this.state

        return (
            <>  
                <Header 
                    titulo={titulo}
                    cantidad={cantidad} 
                    vive={vive}
                    cambiarUsuario={this.cambiarUsuario}
                    links={links}
                />
                <p>El contador va : {cantidad}</p>
                <button onClick={this.sumarCantidad}>+</button>
                <button onClick={this.resetearCantidad}>resetear</button>
                <button onClick={this.restarCantidad}>-</button>
                {/* 
                <Main/>
                <Footer
                    links={links}
                /> */}
            </>
        )
    }
}


//CommonJS
//module.exports = App

//ES6
export default App

