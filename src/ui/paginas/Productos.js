import React from "react"
import {connect} from "react-redux"
import {agregarProducto,cambiarPrecio,cambiarTitulo} from "../../api/actions"

class Productos extends React.Component {

    manejarCambioTitulo = (e) => {
        this.props.cambiarTitulo(e.target.value)
    }

    manejarCambioPrecio = (e) => {
        this.props.cambiarPrecio(e.target.value)
    }

    manejarSubmit = (e) => {
        e.preventDefault()
        this.props.agregarProducto(this.props.titulo,this.props.precio)
    }

    render(){
        return(
            <>
                <h2>Productos</h2>
                <form onSubmit={this.manejarSubmit}>
                    <div>
                        <input onChange={this.manejarCambioTitulo} type="text" placeholder="Ingrese Titulo..." value={this.props.titulo}/>
                    </div>
                    <div>
                        <input onChange={this.manejarCambioPrecio} type="number" placeholder="Ingrese Precio..." value={this.props.precio}/>
                    </div>
                    <button>agregar</button>
                </form>
                <ul>
                    {this.props.productos.length > 0
                    ? this.props.productos.map((producto)=>{
                        return <li key={producto.id}>{producto.titulo} ${producto.precio}</li>
                    })
                    : <li>No hay productos</li> }
                </ul>
            </>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        productos : store.productos,
        titulo : store.titulo,
        precio : store.precio
    }
}

const mapDispatchToProps = {
    agregarProducto,
    cambiarPrecio,
    cambiarTitulo
}

export default connect(mapStateToProps,mapDispatchToProps)(Productos)