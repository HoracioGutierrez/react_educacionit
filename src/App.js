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
            vive : true
        }
    }

    cambiarUsuario = () => {
        console.log("Soy App") 
    }    


    render(){

        const {titulo,cantidad,vive} = this.state

        return (
            <>
                {/* Header(1,2,3) */}
                <Header 
                    titulo={titulo}
                    cantida={cantidad} 
                    vive={vive}
                    cambiarUsuario={this.cambiarUsuario}
                />
                <Main/>
                <Footer/>
            </>
        )
    }
}


//CommonJS
//module.exports = App

//ES6
export default App

