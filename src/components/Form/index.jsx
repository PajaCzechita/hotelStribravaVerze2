import { useState } from "react";
import "./style.css";
import dayjs from "dayjs";

export const Form = ({ selectedRoom }) => {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [people, setPeople] = useState(1);
  const [selectedFood, setSelectedFood] = useState("");
  const [pet, setPet] = useState(false);
  const [kid, setKid] = useState(false);
  const [access, setAccess] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const numDays = dayjs(dateTo).diff(dayjs(dateFrom), "day");
  console.log("Number of days: " + numDays);

  return (
    <form>
      <div className="form-fields">
        <label htmlFor="dateFrom" className="field-label">
          Od:
        </label>
        <input
          id="dateFrom"
          className="field-input"
          type="date"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
        />

        <label htmlFor="dateTo" className="field-label">
          Do:
        </label>
        <input
          id="dateTo"
          className="field-input"
          type="date"
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
        />

        <label htmlFor="people" className="field-label">
          Pocet osob:
        </label>
        <input
          id="people"
          className="field-input"
          type="number"
          min={1}
          value={people}
          onChange={(e) => setPeople(e.target.value)}
        />

        <label htmlFor="selectFood" className="field-label">
          Stravovani:
        </label>
        <select
          id="selectFood"
          className="field-input"
          value={selectedFood}
          onChange={(e) => setSelectedFood(e.target.value)}
        >
          <option value="withoutFood">Zadne</option>
          <option value="breakfast">Snidane</option>
          <option value="halfboard">Polopenze</option>
          <option value="fullboard">Celodenni</option>
        </select>

        <label htmlFor="pet" className="field-label">
          Domaci mazlicek:
        </label>
        <input
          id="pet"
          className="field-input"
          type="checkbox"
          value={pet}
          onChange={(e) => setPet(e.target.value)}
        />
        <label htmlFor="kid" className="field-label">
          Pristylka:
        </label>
        <input
          id="kid"
          className="field-input"
          type="checkbox"
          value={kid}
          onChange={(e) => setKid(e.target.value)}
        />
        <label htmlFor="access" className="field-label">
          Bezbarierovy pristup:
        </label>
        <input
          id="access"
          className="field-input"
          type="checkbox"
          value={access}
          onChange={(e) => setAccess(e.target.value)}
        />
        <label htmlFor="email" className="field-label">
          Email:
        </label>
        <input
          id="email"
          className="field-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="phone" className="field-label">
          Telefon:
        </label>
        <input
          id="phone"
          className="field-input"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <p className="form-summary">
        Celkova cena za pobyt: {selectedRoom.price} Kc
      </p>
      <button className="wide">Submit</button>
    </form>
  );
};
