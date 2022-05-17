export default function Form(props) {
  return (
    <>
      <form>
        <div className="form-control">
          <label htmlFor="altura">Altura</label>
          <input type="text" id="altura" value={props.altura} />
        </div>
        <div className="form-control">
          <label htmlFor="peso">Peso</label>
          <input type="text" id="peso" value={props.peso} />
        </div>
        <div className="form-buttons">
          <button type="submit">Calcular</button>
        </div>
      </form>
    </>
  );
}
