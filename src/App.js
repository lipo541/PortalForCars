import "./App.css";

import React, { useState, useEffect } from "react";

const App = () => {
  const [cars, setCars] = useState([]); // State to store car data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to handle errors

  // Fetch data from cars.json when component mounts
  useEffect(() => {
    fetch("/cars.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCars(data.cars); // Set the car data
        setLoading(false); // Set loading to false after data is loaded
      })
      .catch((error) => {
        setError(error); // Handle any errors
        setLoading(false);
      });
  }, []);

  // Render loading, error, or car data based on the state
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
