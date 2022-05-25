import PageTitle from "../components/PageTitle";
import Form from "../components/Form";
import Historico from "../components/Historico";
import { useState } from "react";

export default function CalcPage({ titulo }) {

  const [historico, setHistorico] = useState(() => {
    const saved = window.localStorage.getItem("historico");
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
      <div class="card mt-3 col-6 offset-3">
        <div class="card-header">{titulo}</div>
        <Form peso="90" altura="1.81" onCalcIMC={addHistorico} />
      </div>

      <div className="col-6 offset-3">
        <Historico itens={historico} onClear={limparHistorico} />
      </div>
    </div>
  );
}
