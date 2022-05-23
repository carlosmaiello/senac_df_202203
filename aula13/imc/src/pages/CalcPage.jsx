import PageTitle from "../components/PageTitle";
import Form from "../components/Form";
import Historico from "../components/Historico";
import { useState } from "react";

export default function CalcPage({ titulo }) {
  const [historico, setHistorico] = useState([]);

  const addHistorico = (peso, altura, imc) => {
    setHistorico([
      ...historico,
      {
        altura: altura,
        peso: peso,
        imc: imc,
        mensagem: "-",
      },
    ]);
  };

  return (
    <div className="CalcPage">
      <PageTitle title={titulo} />
      <div className="linha">
        <div className="coluna">
          <Form peso="90" altura="1.81" onCalcIMC={addHistorico} />
        </div>
        <div className="coluna">
          <Historico itens={historico} />
        </div>
      </div>
    </div>
  );
}
