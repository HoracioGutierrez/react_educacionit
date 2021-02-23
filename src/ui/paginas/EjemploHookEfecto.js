
const Productos = () => {

    //Si lo escribo solo con su primer parametro, este efecto se ejecuta despues de cada render (ya sea inicial o por actualizacion). Simil componentDidMount + componentDidUpdate
    /* useEffect(()=>{
        console.log("Yo me ejecuto en cada render")
    }) */

    //Si lo escribo con su segundo parametro, el efecto se ejecuta despues del primer render y solo cuando lo que haya en el array de dependencias cambie. Si el array esta vacio, solo se va a ejecutar una unica vez . Simi componentDidMount
    /*useEffect(()=>{
        console.log("Yo me ejecuto solo despues del render inicial")
    },[]) */


    //Si lo escribo con un retorno adentro del efecto, ese retorno tiene que se ser una funcion y la misma va a ser usada para limpiar cualquier efecto que haya quedado. Simil componentDidMount + componentWillUnmount
    /* useEffect(()=>{

        const intervalo = setInterval(()=>{
            console.log("Hago un pedido")
        },1000)

        return ()=>{
            console.log("Se desmonto el componente")
            clearInterval(intervalo)
        }

    },[]) */

    return (
        "Productos"
    )
}