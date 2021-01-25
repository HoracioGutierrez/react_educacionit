//CommonJS
//const React = require("react")
//const ReactDOM = require("react-dom")
//const App = require("./App")

//ES6
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

//Un Componente
/* function MiComponente() {
    return <p>Hola</p>
}

const MiComponente = () => {
    return <p>Hola</p>
} */

/* (()=>{})()

(function(){})() */

/* class MiComponente extends React.Component {
    render(){
        return <p>Hola</p>
    }
} */

//Inyecto el componente en un nodo del DOM
ReactDOM.render(
    //MiComponente(),
    /* <MiComponente/>, */
    /* App() */
    <App/>,
    document.getElementById("root")
)