import "./style.css";

export const RoomCard = ({ rooms }) => {
  return (
    <div className="cards-row">
      {rooms.map((room) => (
        <div className="card" key={room.name}>
          <img className="card__image" src={room.image} />
          <div className="card__title">{room.name}</div>
          <div className="card__body">{room.price}</div>
        </div>
      ))}
    </div>
  );
};
