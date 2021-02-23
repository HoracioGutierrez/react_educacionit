import {useEffect} from "react"
//import {connect} from "react-redux"
import {useSelector,useDispatch} from "react-redux"
import {agregarProducto,cambiarPrecio,cambiarTitulo} from "../../api/actions"
//import {bindActionCreators} from "redux"

const Productos = ({agregarProducto,cambiarPrecio,cambiarTitulo}) => {

    const productos = useSelector(({productos})=>productos)
    const titulo = useSelector(({titulo})=>titulo)
    const precio = useSelector(({precio})=>precio)
    const dispatch = useDispatch()

    const manejarCambioTitulo = e => {
        //cambiarTitulo(e.target.value)
        dispatch({type:"TITULO_CAMBIAR",valor:e.target.value})
    }

    const manejarCambioPrecio = e => {
        //cambiarPrecio(e.target.value)
        dispatch({type:"PRECIO_CAMBIAR",valor:e.target.value})
    }

    const manejarSubmit = e => {
        e.preventDefault()
        //agregarProducto(titulo,precio)
        dispatch({type:"PRODUCTO_AGREGAR",titulo,precio})
    }

    return (
        <>
            <h2>Productos</h2>
            <form onSubmit={manejarSubmit}>
                <div>
                    <input onChange={manejarCambioTitulo} type="text" placeholder="Ingrese Titulo..." value={titulo}/>
                </div>
                <div>
                    <input onChange={manejarCambioPrecio} type="number" placeholder="Ingrese Precio..." value={precio}/>
                </div>
                <button>agregar</button>
            </form>
            <ul>
                {productos.length > 0
                ? productos.map((producto)=>{
                    return <li key={producto.id}>{producto.titulo} ${producto.precio}</li>
                })
                : <li>No hay productos</li> }
            </ul>
        </>
    )
} 

export default Productos




//const mapDispatchToProps = { agregarProducto, cambiarPrecio, cambiarTitulo }

/* const mapDispatchToProps = (dispatch) => {
    return {
        agregarProducto : bindActionCreators(agregarProducto,dispatch),
        cambiarPrecio : bindActionCreators(cambiarPrecio,dispatch),
        cambiarTitulo : bindActionCreators(cambiarTitulo,dispatch)
    }
} */

/* export default connect(
    ({productos,titulo,precio}) => ({ productos , titulo , precio }),
    { agregarProducto, cambiarPrecio, cambiarTitulo }    
)(Productos) */