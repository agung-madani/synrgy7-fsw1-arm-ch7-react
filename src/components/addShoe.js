import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

const AddShoeComponent = ({ addShoe }) => {
  const [shoeName, setShoeName] = useState("");

  const handleAddShoe = () => {
    if (shoeName.trim()) {
      addShoe(shoeName.trim());
      setShoeName("");
    }
  };

  return (
    <Box mb={4}>
      <TextField
        label="Add Shoe"
        variant="outlined"
        fullWidth
        value={shoeName}
        onChange={(e) => setShoeName(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddShoe}
        sx={{ mt: 2 }}
      >
        Add Shoe
      </Button>
    </Box>
  );
};

export default AddShoeComponent;
