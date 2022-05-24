import PageTitle from "../components/PageTitle";
import Form from "../components/Form";
import Historico from "../components/Historico";
import { useState } from "react";

export default function CalcPage({ titulo }) {
  const [historico, setHistorico] = useState(() => {
    const saved = localStorage.getItem("historico");
    try {
      const initialValue = JSON.parse(saved);
      return initialValue || [];
    } catch (e) {
      return [];
    }
  });

  const addHistorico = (peso, altura, imc) => {
    let h = [
      {
        altura: altura,
        peso: peso,
        imc: imc,
        mensagem: "-",
      },
      ...historico,
    ];
    setHistorico(h);
    window.localStorage.setItem("historico", JSON.stringify(h));
  };

  const limparHistorico = () => {
    window.localStorage.removeItem("historico");
    setHistorico([]);
  };

  return (
    <div className="CalcPage">
      <PageTitle title={titulo} />
      <div className="linha">
        <div className="coluna">
          <Form peso="90" altura="1.81" onCalcIMC={addHistorico} />
        </div>
        <div className="coluna">
          <Historico itens={historico} onClear={limparHistorico} />
        </div>
      </div>
    </div>
  );
}
