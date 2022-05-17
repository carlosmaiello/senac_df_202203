import PageTitle from "../components/PageTitle";
import Form from "../components/Form";
import Historico from "../components/Historico";

export default function CalcPage() {

  let historico = [
    {
      altura: 1.8,
      peso: 75,
      imc: 23.15,
      mensagem: "Peso normal",
    },
    {
      altura: 1.65,
      peso: 90,
      imc: 33.06,
      mensagem: "Obesidade I",
    },
    {
      altura: 1.55,
      peso: 66,
      imc: 25,
      mensagem: "Normal",
    },
    {
      altura: 1.55,
      peso: 66,
      imc: 25,
      mensagem: "Normal",
    },
  ];

  return (
    <div className="CalcPage">
      <PageTitle title="Cálculo de IMC" />     

      <Form peso="90" altura="1.81" />
      <Historico itens={historico} />      
    </div>
  );
}
