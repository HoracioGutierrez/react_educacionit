
const Productos = () => {

    const [contador,setContador] = useState(0)

    return (
        <>
            <p>El contador va : {contador}</p>
            <button onClick={()=>setContador(contador+1)}>+</button>
            <button onClick={()=>setContador(0)}>resetear</button>
            <button onClick={()=>setContador(contador-1)}>-</button>
        </>
    )
}