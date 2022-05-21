import { useEffect, useState } from 'react';

export default function Form(props) {
  const [imc, setIMC] = useState(0);
  const [mensagem, setMensagem] = useState("");
  const [peso, setPeso] = useState(props.peso);
  const [altura, setAltura] = useState(props.altura);

  // Calcula automáticamente
  // useEffect(() => {
  //   setIMC(peso / (altura * altura));
  // }, [peso, altura]);


  // Calcula quando clica no botão
  useEffect(() => {
    setIMC(0);
  }, [peso, altura]);

  const calcular = (e) => {
    e.preventDefault();
    setIMC(peso / (altura * altura));
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

      <div className="Resultado">
        <p>IMC: {imc} </p>
        <p>{mensagem}</p>
      </div>
    </>
  );
}
