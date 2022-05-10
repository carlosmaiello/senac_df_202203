function Topo(props) {
    const elementos = props.menu.map(v => (<li><a href={v.link}>{v.nome}</a></li>));

    return (
        <header>
            <h1>
                <a href="#">Logo</a>
            </h1>
            <nav>
                <ul>{elementos}</ul>
            </nav>
        </header>
    )
}

function Rodape() {
    return (
        <footer>Rodapé</footer>
    )
}

function Titulo(props) {
    return (
        <div className="Titulo">
            <h1 style={{color: props.textoCor}}>{props.texto}</h1>
            <hr />
        </div>
    )
}

function PaginaInicial() {
    return (
        <div>
            <Titulo texto="Página Inicial" textoCor="green" />
            <img src="https://via.placeholder.com/650x250" />
        </div>
    )
}

function PaginaSobre() {
    return (
        <div>
            <Titulo texto="Sobre" textoCor="red" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi voluptatum, officia nesciunt minus nisi sunt perferendis illo odit error molestiae consequatur debitis, vel iure neque ipsum accusamus nulla cupiditate quod.</p>
        </div>
    )
}

function App() {
    const menu = [
        {
            nome: "Home",
            link: "#home"
        },
        {
            nome: 'Sobre',
            link: "#sobre"
        },
        {
            nome: `Contato`,
            link: "#contato"
        }
    ];
    return (
        <section className="container">
            <Topo menu={menu} />
            <main>
                <PaginaInicial />
                <PaginaSobre />
            </main>
            <Rodape />
        </section>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));