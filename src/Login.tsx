import {
  Box,
  Button,
  Card,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <Box
      height={"100vh"}
      display="flex"
      paddingY={4}
      alignItems="center"
      justifyContent="center"
    >
      <Card
        variant="outlined"
        sx={{ padding: 4, marginX: "10px", maxWidth: 250, borderRadius:'15px' }}
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
        <Box flexDirection='row' mt={2}  display='flex' justifyContent='space-between'>
          <Link href='#' variant='body2' underline='none'>
          Back
          </Link>
 
            <Typography variant='body2' ml={10}>
             Are you new?
            </Typography>
          <Link href='#' variant='body2' underline='none'>
          Signup
          </Link>




        </Box>
      </Card>

    </Box>
  );
};

export default Login;
