import { useEffect, useState } from 'react';
import Resultado from './Resultado';

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
      <form onSubmit={calcular}>
        <div className="form-control">
          <label htmlFor="altura">Altura</label>
          <input type="text" id="altura" value={altura} onChange={(e) => setAltura(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="peso">Peso</label>
          <input type="text" id="peso" value={peso} onChange={(e) => setPeso(e.target.value)} />
        </div>
        <div className="form-buttons">
          <button type="submit">Calcular</button>
        </div>
      </form>

      <Resultado imc={imc} />
    </>
  );
}
