export const RoomDetail = ({ selectedRoom }) => {
  return (
    <>
      <div className="column">
        <img src={selectedRoom.image} />
        <p>{selectedRoom.description}</p>
      </div>
    </>
  );
};
