// import logo from "./logo.svg";
import "./App.css";
// import InputComponent from "./components/input";
// import ResultComponent from "./components/result";
// import AddShoeComponent from "./components/addShoe";
// import { useState } from "react";
// import { Container, Box, Typography, Link } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CarsPage from "./pages/cars";
import CarDetailsPage from "./pages/carDetails";
import LoginPage from "./pages/login";
import Protected from "./components/protected";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/*"
          element={
            <Protected>
              <Routes>
                <Route path="cars" element={<CarsPage />} />
                <Route path="cars/:id" element={<CarDetailsPage />} />
              </Routes>
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );

  // const [filter, setFilter] = useState("");
  // const [shoes, setShoes] = useState([
  //   {
  //     name: "adidas",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjFDhQOorpTVrB-yDLq10ccJw1AEx1FhZgsQ&s",
  //   },
  //   {
  //     name: "nike",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjFDhQOorpTVrB-yDLq10ccJw1AEx1FhZgsQ&s",
  //   },
  //   {
  //     name: "puma",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjFDhQOorpTVrB-yDLq10ccJw1AEx1FhZgsQ&s",
  //   },
  //   {
  //     name: "reebok",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjFDhQOorpTVrB-yDLq10ccJw1AEx1FhZgsQ&s",
  //   },
  //   {
  //     name: "vans",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjFDhQOorpTVrB-yDLq10ccJw1AEx1FhZgsQ&s",
  //   },
  //   {
  //     name: "converse",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjFDhQOorpTVrB-yDLq10ccJw1AEx1FhZgsQ&s",
  //   },
  //   {
  //     name: "fila",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjFDhQOorpTVrB-yDLq10ccJw1AEx1FhZgsQ&s",
  //   },
  //   {
  //     name: "asics",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjFDhQOorpTVrB-yDLq10ccJw1AEx1FhZgsQ&s",
  //   },
  // ]);

  // const filteredShoes = shoes.filter((shoe) =>
  //   shoe.name.toLowerCase().includes(filter.toLowerCase())
  // );

  // const addShoe = (newShoeName) => {
  //   const newShoe = {
  //     name: newShoeName,
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjFDhQOorpTVrB-yDLq10ccJw1AEx1FhZgsQ&s",
  //   };
  //   setShoes([...shoes, newShoe]);
  // };

  // return (
  //   <Container>
  //     <Box textAlign="center" mt={4}>
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <Typography variant="h6" paragraph>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </Typography>
  //       <Link
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         color="secondary"
  //       >
  //         Learn React
  //       </Link>
  //     </Box>
  //     <InputComponent setFilter={setFilter} />
  //     <AddShoeComponent addShoe={addShoe} />
  //     <ResultComponent shoes={filteredShoes} />
  //   </Container>
  // );
}

export default App;
