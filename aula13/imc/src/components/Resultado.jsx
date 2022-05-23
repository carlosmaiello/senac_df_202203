import { useEffect, useState } from "react";

export default function Resultado({ imc }) {
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
      if (imc <= 0) setMensagem("");
      else if (imc < 18.5) setMensagem("Abaixo do peso normal");
      else if (imc < 25) setMensagem("Peso normal");
      else if (imc < 30) setMensagem("Excesso de peso");
      else if (imc < 35) setMensagem("Obesidade classe I");
      else if (imc < 40) setMensagem("Obesidade classe II");
      else setMensagem("Obesidade classe III");
  }, [imc]);

  return (
    <div className="Resultado">
      <p>IMC: {imc} </p>
      <p>{mensagem}</p>
    </div>
  );
}
