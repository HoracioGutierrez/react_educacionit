export const cambiarTitulo = (valor) => {
    return {type:"TITULO_CAMBIAR",valor}
}

export const cambiarPrecio = (valor) => {
    return {type:"PRECIO_CAMBIAR",valor}
}

export const agregarProducto = (titulo,precio) => {
    return {type:"PRODUCTO_AGREGAR",titulo,precio}
}

export const borrarProducto = () => {
    return {type:"PRODUCTO_BORRAR"}
}

export const editarProducto = () => {
    return {type:"PRODUCTO_EDITAR"}
}