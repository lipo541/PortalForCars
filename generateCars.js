import React, { useEffect, useState } from "react";

const App = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("/cars.json")
      .then((response) => response.json())
      .then((data) => setCars(data.cars))
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  return (
    <div>
      <h1>Car List</h1>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.make} {car.model} ({car.year}) -{" "}
            {car.isFree ? "Free" : "Not Free"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
