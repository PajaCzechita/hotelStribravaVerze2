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

  console.log("Selected room: ", selectedRoom);

  return (
    <>
      <section className="dark">
        <div className="container">
          <h2>Nase Pokoje</h2>
          <p>Vyberte si, ktery z nasich pokoju je pro vas ten pravy</p>
          <RoomCard rooms={rooms} />
        </div>
      </section>
      <section className="light">
        <div className="container">
          <RoomDetail selectedRoom={selectedRoom} />
          <Form selectedRoom={selectedRoom} />
        </div>
      </section>
    </>
  );
};
