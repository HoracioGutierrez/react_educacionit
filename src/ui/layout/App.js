import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"


class App extends React.Component {

    constructor(){
        super()
        this.state = {
            titulo : "Mi Primer App - state"
        }
    }


    render(){

        const {titulo} = this.state

        return (
            <>  
                <Header titulo={titulo}/>
                <Main/>
                <Footer/>
            </>
        )
    }
}


export default App

