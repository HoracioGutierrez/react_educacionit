
class Productos extends React.Component {
    
    constructor(){
        super()
        this.state = {
            intervalo : false
        }
    }

    componentDidUpdate(){
        console.log("Yo me ejecuto cada vez que el componente se actualizar")
    }

    componentDidMount = () => {
        console.log("Ya se dibujo Productos")
        //Aca es un buen lugar para hacer pedidos a APIs REST, pedidos a mi propio servidor,iniciar subscripciones,iniciar timers
        const intervalo = setInterval(()=>{
            console.log("Hago un pedido a una API")
        },1000)
        this.setState({intervalo:intervalo})
    }

    componentWillUnmount = () => {
        console.log("El componente se desmonto")
        console.log("Borro todas las subscripciones y/o timers")
        clearInterval(this.state.intervalo)
    }

    render(){
        return(
            <>
            Productos
            </>
        )
    }
}
