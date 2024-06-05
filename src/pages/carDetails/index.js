import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CarDetailsPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/cars/${id}`)
      .then((response) => {
        console.log(response.data);
        setCar(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/api/cars/${id}`)
      .then(() => {
        console.log("Car deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Car Details</h1>
      <p>
        <strong>Name:</strong> {car.data.car_name}
      </p>
      <p>
        <strong>Category:</strong> {car.data.category}
      </p>
      <p>
        <strong>Price:</strong> {car.data.price}
      </p>
      <p>
        <strong>Image:</strong>{" "}
        <img src={car.data.car_image} alt={car.data.car_name} />
      </p>
      <p>
        <strong>Rent Start:</strong> {car.data.start_rent}
      </p>
      <p>
        <strong>Rent Finish:</strong> {car.data.finish_rent}
      </p>
      <p>
        <strong>Deleted Status:</strong> {car.data.deleted_status}
      </p>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default CarDetailsPage;
