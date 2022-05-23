import { useEffect, useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(10);

  useEffect(() => {
      document.title = `O valor do contador é ${contador}`;
  }, [contador]);
  
  return (
    <p>
      O contador está com o valor: {contador}. <br />
      <button onClick={() => setContador(contador - 1)}>Diminuir</button>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
    </p>
  );
}
