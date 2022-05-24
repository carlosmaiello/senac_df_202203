function HistoricoItem({ item }) {
  return (
    <li>
      Peso: {item.peso}, Altura: {item.altura}, IMC: {item.imc}, Mensagem: {item.mensagem}
    </li>
  );
}

export default function Historico(props) {
  if (!Array.isArray(props.itens)) return;
  let conteudo = props.itens.map((item) => <HistoricoItem item={item} />);
  return (
    <>
      <ul className="Historico">{conteudo}</ul>
      <button onClick={props.onClear}>Limpar</button>
    </>
  );
}
