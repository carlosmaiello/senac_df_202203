import { useEffect, useState } from "react";
import Resultado from "./Resultado";

export default function Form(props) {
  const [imc, setIMC] = useState(0);
  const [peso, setPeso] = useState(props.peso);
  const [altura, setAltura] = useState(props.altura);

  useEffect(() => {
    setIMC(0);
  }, [peso, altura]);

  const calcular = (e) => {
    e.preventDefault();
    const res = peso / (altura * altura);
    setIMC(res);
    props.onCalcIMC(peso, altura, res);
  };

  return (
    <>
      <form onSubmit={calcular} className="p-3">
        <div class="mb-3">
          <label htmlFor="altura" class="form-label">
            Altura
          </label>
          <input type="text" className="form-control" id="altura" value={altura} onChange={(e) => setAltura(e.target.value)} />
        </div>
        <div class="mb-3">
          <label htmlFor="peso" class="form-label">
            Peso
          </label>
          <input type="text" className="form-control" id="peso" value={peso} onChange={(e) => setPeso(e.target.value)} />
        </div>
        <div className="form-buttons">
          <button type="submit">Calcular</button>
        </div>
      </form>

      <Resultado imc={imc} />
    </>
  );
}
