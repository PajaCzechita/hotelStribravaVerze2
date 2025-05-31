import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { RoomBooking } from "../../components/RoomBooking";
import "./style.css";

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main>
        <RoomBooking />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
