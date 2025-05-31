import "./style.css";

export const RoomCard = ({ rooms, onRoomSelection }) => {
  return (
    <div className="cards-row">
      {rooms.map((room) => (
        <div
          className="card"
          key={room.id}
          onClick={() => onRoomSelection(room.id)}
        >
          <img className="card__image" src={room.image} />
          <div className="card__title">{room.name}</div>
          <div className="card__body">{room.price}</div>
        </div>
      ))}
    </div>
  );
};
