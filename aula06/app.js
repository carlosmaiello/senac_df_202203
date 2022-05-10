function Topo() {
    return (<header>Topo</header>);
}
function Rodape() {
    return (<footer>Rodape</footer>);
}

function Home() {
    return (
    <div>
        <Topo />
        <h1>Teste</h1>
        <Rodape />
    </div>
    );
}

function Dois() {
    return (
        <div>
            <Topo />
            <h1>Dois</h1>
            <Rodape />
        </div>
    );
}


function App() {
    return (
        <div>
            <Home />
            <Dois />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));