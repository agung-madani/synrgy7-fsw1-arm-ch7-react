import {
  button,
  Card,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const LoginPage = () => {
  const onSubmit = () => {
    localStorage.setItem("token", "1234SampleToken");
    window.location.href = "/cars";
  };

  return (
    <Container>
      <Card>
        <Stack spacing={2}>
          <Typography variant="h4">Login</Typography>
          <TextField label="Email" type="email" />
          <TextField label="Password" type="password" />
          <button variant="contained" color="primary" onClick={onSubmit}>
            Login
          </button>
        </Stack>
      </Card>
    </Container>
  );
};

export default LoginPage;
