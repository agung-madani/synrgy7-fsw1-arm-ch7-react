import { Box, TextField } from "@mui/material";

const InputComponent = ({ setFilter }) => {
  const handleChange = (valueInput) => {
    setFilter(valueInput);
  };

  return (
    <Box mb={4}>
      <TextField
        label="Masukkan Input"
        variant="outlined"
        fullWidth
        onChange={(e) => handleChange(e.target.value)}
      />
    </Box>
  );
};

export default InputComponent;
