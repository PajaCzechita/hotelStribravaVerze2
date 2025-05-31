import "./style.css";

export const Form = ({ selectedRoom }) => {
  return (
    <form>
      <div className="form-fields">
        <label htmlFor="dateFrom" className="field-label">
          Od:
        </label>
        <input id="dateFrom" className="field-input" type="date" />

        <label htmlFor="dateTo" className="field-label">
          Do:
        </label>
        <input id="dateTo" className="field-input" type="date" />

        <label htmlFor="people" className="field-label">
          Pocet osob:
        </label>
        <input id="people" className="field-input" type="number" min={1} />

        <label htmlFor="selectFood" className="field-label">
          Stravovani:
        </label>
        <select id="selectFood" className="field-input">
          <option value="withoutFood">Zadne</option>
          <option value="breakfast">Snidane</option>
          <option value="halfboard">Polopenze</option>
          <option value="fullboard">Celodenni</option>
        </select>

        <label htmlFor="pet" className="field-label">
          Domaci mazlicek:
        </label>
        <input id="pet" className="field-input" type="checkbox" />
        <label htmlFor="kid" className="field-label">
          Pristylka:
        </label>
        <input id="kid" className="field-input" type="checkbox" />
        <label htmlFor="access" className="field-label">
          Bezbarierovy pristup:
        </label>
        <input id="access" className="field-input" type="checkbox" />
        <label htmlFor="email" className="field-label">
          Email:
        </label>
        <input id="email" className="field-input" type="email" />
        <label htmlFor="phone" className="field-label">
          Telefon:
        </label>
        <input id="phone" className="field-input" type="tel" />
      </div>
      <p className="form-summary">
        Celkova cena za pobyt: {selectedRoom.price} Kc
      </p>
      <button className="wide">Submit</button>
    </form>
  );
};
