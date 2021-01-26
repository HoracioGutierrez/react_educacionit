import React from "react"


const Seccion = ({titulo,children}) => {

    /* let titulo = props.titulo
    titulo = "Titulo Customizado" */

    return (
        <section className="pagina">
            <header>
                <h3>{titulo}</h3>
            </header>
            {children}
        </section>
    )
}

const Pagina3 = () => {
    return (
        <Seccion titulo="Pagina 3">
            <button>Guardar</button>
        </Seccion>        
    )
}

const Pagina2 = () => {
    return (
        <Seccion titulo="Pagina 2">
            <ul>
                <li>item 1</li>
                <li>item 2</li>
            </ul>
        </Seccion>
    )
}

const Pagina1 = () => {
    return (
        <>
            <Seccion titulo="Pagina 1">
                <p>Lorem Ipsum</p>
            </Seccion>
        </>
    )
}


class Main extends React.Component {
    render(){
        return(
            <main>
                <h2>Home</h2>

                <Pagina1/>

                <Pagina2/>

                <Pagina3/>

            </main>
        )
    }
}

export default Main