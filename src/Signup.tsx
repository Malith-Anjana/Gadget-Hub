import { Box, Button, Card, Link, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <Box
      height={"100vh"}
      paddingY={4}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Card
        variant="outlined"
        sx={{ padding: 5, marginX: "10px", maxWidth: 300, borderRadius:'15px'}}
      >
        <form>
          <Typography fontWeight='600' fontSize={28}  textAlign='center'>Signup</Typography>
          <TextField
            label="Username"
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
          <TextField
            label="Email"
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
           <TextField
            label="Confirm Password"
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
            Signup
          </Button>
        </form>
        <Box flexDirection='row' mt={2}  display='flex' justifyContent='space-between'>
          <Link href='#' variant='body2' underline='none'>
          Back
          </Link>
 
            <Typography variant='body2' ml={8}>
              Do you have a account?
            </Typography>
          <Link href='#' variant='body2' underline='none'>
          Signin
          </Link>




        </Box>
      </Card>
    </Box>
  )
}

export default Signup