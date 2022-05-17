export default function Historico(props) {
  // props.itens

  let conteudo = props.itens.map((item) => (
    <li>
      Peso: {item.peso}, Altura: {item.altura}, IMC: {item.imc}, Mensagem: {item.mensagem}
    </li>
  ));

  return <ul>{conteudo}</ul>;
}
