// pages/cars/index.js
import axios from "axios";
import { useEffect, useState } from "react";

const CarsPage = () => {
  const [car, setCar] = useState({
    car_name: "",
    category: "",
    price: "",
    car_image: "",
    rent_start: "",
    rent_finish: "",
  });

  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/cars")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(car);
    axios
      .post("http://localhost:3000/api/cars", {
        ...car,
        price: parseFloat(car.price), // Parsing price to a number
      })
      .then((response) => {
        console.log("Car created:", response.data);
        setCar({
          car_name: "",
          category: "",
          price: "",
          car_image: "",
          rent_start: "",
          rent_finish: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(car);
    axios
      .put("http://localhost:3000/api/cars", {
        ...car,
        price: parseFloat(car.price),
      })
      .then((response) => {
        console.log("Car updated:", response.data);
        setCar({
          car_name: "",
          category: "",
          price: "",
          car_image: "",
          rent_start: "",
          rent_finish: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Cars</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="car_name"
          value={car.car_name}
          onChange={handleInputChange}
          placeholder="Car Name"
        />
        <input
          type="text"
          name="category"
          value={car.category}
          onChange={handleInputChange}
          placeholder="Category"
        />
        <input
          type="number" // Changed input type to number
          name="price"
          value={car.price}
          onChange={handleInputChange}
          placeholder="Price"
        />
        <input
          type="text"
          name="car_image"
          value={car.car_image}
          onChange={handleInputChange}
          placeholder="Car Image URL"
        />
        <input
          type="date"
          name="rent_start"
          value={car.rent_start}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="rent_finish"
          value={car.rent_finish}
          onChange={handleInputChange}
        />
        <button type="submit">Create Car</button>
        <button onClick={handleUpdate}>Update</button>
      </form>
      <br />
      <input
        type="file" // Input type file for image upload
        accept="image/*"
        onChange={handleImageChange}
      />
      <button onClick={() => setImageFile(null)}>Clear Image</button>
      <br />
      {/* Display uploaded image */}
      {imageFile && (
        <div>
          <h2>Uploaded Image:</h2>
          <img
            src={URL.createObjectURL(imageFile)}
            alt="Uploaded"
            width="200"
          />
        </div>
      )}
    </div>
  );
};

export default CarsPage;
