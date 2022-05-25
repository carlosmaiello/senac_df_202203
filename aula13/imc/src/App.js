import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

import CalcPage from "./pages/CalcPage";
//import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <CalcPage titulo="IMC" />
      </div>
    </div>
  );
}
