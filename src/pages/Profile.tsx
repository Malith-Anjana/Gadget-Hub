import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

const Profile = () => {
  return (
    <Box
      bgcolor="red"
      sx={{height:'100%'}}
      display="flex"
      position='initial'
      justifyContent="center"
      alignItems="center"
    >
      <Card
        variant="outlined"
        sx={{
          width: { xs: "100%", sm: 400 },
          padding: 2,
          borderRadius: "10px",
          height: 400,
        }}
      >
        <CardContent>
          <Typography
            align="center"
            variant="h4"
            fontWeight={"700"}
            component="div"
          >
            Invoice
          </Typography>
          <Box bgcolor={"red"} pt={1} display="flex" justifyContent="center">
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 90, height: 90 }}
            />
          </Box>
          <Stack
            mt={2}
            direction={"row"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Typography variant="body2" sx={{ fontSize: 18 }}>
              Sub Total
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: 18 }}
              fontWeight={"600"}
            >
              $1000
            </Typography>
          </Stack>
          <Stack
            mt={1}
            direction={"row"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Typography
              variant="body2"
              sx={{ fontSize: 14 }}
              color="text.secondary"
            >
              Shipping Fee
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: 14 }}
              color="text.secondary"
              fontWeight={"600"}
            >
              $1000
            </Typography>
          </Stack>
          <Divider
            orientation="horizontal"
            sx={{ marginTop: "20px" }}
            flexItem
          />
          <Stack
            direction={"row"}
            display={"flex"}
            mt={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body2" sx={{ fontSize: 16 }} mt={1}>
              Shipping Fee
            </Typography>
            <Typography
              variant="body2"
              mt={1}
              sx={{ fontSize: 23 }}
              fontWeight={"700"}
            >
              $1000
            </Typography>
          </Stack>
        </CardContent>
        <CardActions>
          <Button variant="contained" fullWidth>
            Checkout
          </Button>
        </CardActions>
      </Card>
  </Box>
  );
};

export default Profile;
