import { useEffect, useState } from "react";
import { RoomCard } from "../RoomCard";

export const RoomBooking = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch("http://localhost:4000/api/rooms");
      const responseData = await response.json();
      setRooms(responseData.data);
    };
    fetchRooms();
  }, []);

  return (
    <section className="dark">
      <div className="container">
        <h2>Nase Pokoje</h2>
        <p>Vyberte si, ktery z nasich pokoju je pro vas ten pravy</p>
        <RoomCard rooms={rooms} />
      </div>
    </section>
  );
};
