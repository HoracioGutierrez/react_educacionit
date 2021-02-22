const init = {
    links : ["productos","mensajes","perfil"],
    productos : [],
    titulo : "",
    precio : ""
}

const reducer = (store=init,action) => {

    switch(action.type){
        case "PRECIO_CAMBIAR" :
            return {
                ...store,
                precio : action.valor
            }

        case "TITULO_CAMBIAR" :
            return {
                ...store,
                titulo : action.valor
            }

        case "PRODUCTO_AGREGAR" :
            return {
                ...store,
                productos : [
                    ...store.productos,
                    {
                        id : Math.random(),
                        titulo : action.titulo,
                        precio : action.precio
                    }
                ]
            }

        default :
            return store
    }

}

export default reducer