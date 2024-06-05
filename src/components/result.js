import { Box, Grid, Typography } from "@mui/material";

const ResultComponent = ({ shoes }) => {
  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        Hasil
      </Typography>
      <Grid container spacing={2}>
        {shoes.map((shoe, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box textAlign="center">
              <img src={shoe.image} alt={shoe.name} style={{ width: "100%" }} />
              <Typography variant="h6">{shoe.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ResultComponent;
