import Menu from "../components/Menu";
import Receita from "../components/Receita";
import "./Home.css";

export default function Home() {
  return (
    <section className="Home">
      <main>
        <Receita />
      </main>
      <Menu />
    </section>
  );
}
