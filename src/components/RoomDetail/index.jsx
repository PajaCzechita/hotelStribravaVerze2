export const RoomDetail = ({ selectedRoom }) => {
  return (
    <>
      <h2>
        Pokoj {selectedRoom.name}, {selectedRoom.price} kc na osobu za noc
      </h2>
      <div className="columns-2">
        <div className="column">
          <img src={selectedRoom.image} />
          <p>{selectedRoom.description}</p>
        </div>
      </div>
    </>
  );
};
