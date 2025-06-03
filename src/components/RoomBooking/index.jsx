import { useEffect, useState } from "react";
import { RoomCard } from "../RoomCard";
import { RoomDetail } from "../RoomDetail";
import { Form } from "../Form";

export const RoomBooking = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState("");

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch("http://localhost:4000/api/rooms");
      const responseData = await response.json();
      setRooms(responseData.data);
      setSelectedRoom(responseData.data[0]);
    };
    fetchRooms();
  }, []);

  const handleRoomSelection = (roomId) => {
    setSelectedRoom(rooms[roomId]);
  };

  return (
    <>
      <section className="dark">
        <div className="container">
          <h2>Nase Pokoje</h2>
          <p>Vyberte si, ktery z nasich pokoju je pro vas ten pravy</p>
          <RoomCard rooms={rooms} onRoomSelection={handleRoomSelection} />
        </div>
      </section>
      <section className="light">
        <div className="container">
          <h2>
            Pokoj {selectedRoom.name}, {selectedRoom.price} kc na osobu za noc
          </h2>
          <div className="columns-2">
            <RoomDetail selectedRoom={selectedRoom} />
            <Form selectedRoom={selectedRoom} />
          </div>
        </div>
      </section>
    </>
  );
};
