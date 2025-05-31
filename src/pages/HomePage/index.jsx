import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import "./style.css";

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main>
        <p>
          Startovací šablona pro webovou aplikaci v Reactu. Vytvořeno pomocí{" "}
          <a href="https://www.npmjs.com/package/create-czechitas-app">
            create-czechitas-app
          </a>
          .
        </p>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
