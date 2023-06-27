import {
  Box,
  Button,
  Card,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <Box
      height={"100vh"}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Card
        variant="outlined"
        sx={{ padding: 4, height: "50vh", marginX: "10px", maxWidth: 250, borderRadius:'15px' }}
      >
        <form>
          <Typography fontWeight='600' fontSize={28}  textAlign='center'>Login</Typography>
          <TextField
            label="Username"
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
          <TextField
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            required
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ marginTop: "20px" }}
            color="primary"
            fullWidth
          >
            Sign In
          </Button>
        </form>
      </Card>
    </Box>
  );
};

export default Login;
