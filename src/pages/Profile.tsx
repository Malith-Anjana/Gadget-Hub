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
      sx={{height:'100vh'}}
      display="flex"
      justifyContent="center"
    >
      <Card
        variant="outlined"
          sx={{
          width: { xs: "100%", sm: 400 },
          padding: 2,
          borderRadius: "10px",
          height: 400,
          margin:'5%'
        }}
      >
        <CardContent>
          <Typography
            align="center"
            variant="h4"
            fontWeight={"700"}
            component="div"
          >
            Profile
          </Typography>
          <Box pt={1} display="flex" justifyContent="center">
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 100, height: 100 }}
            />
          </Box>
          <Stack
            mt={2}
            direction={"row"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Typography variant="body2" sx={{ fontSize: 18 }}>
              Name
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: 18 }}
              fontWeight={"600"}
            >
             Malith
            </Typography>
          </Stack>
          <Stack
            mt={2}
            direction={"row"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Typography variant="body2" sx={{ fontSize: 18 }}>
              Email
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: 18 }}
              fontWeight={"600"}
            >
             Malith@gmal.com
            </Typography>
          </Stack>
          <Stack
            mt={2}
            direction={"row"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Typography variant="body2" sx={{ fontSize: 18 }}>
              Level
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: 18 }}
              fontWeight={"600"}
            >
             Silver
            </Typography>
          </Stack>
          <Stack
            mt={2}
            direction={"row"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Typography variant="body2" sx={{ fontSize: 18 }}>
              Country
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: 18 }}
              fontWeight={"600"}
            >
             Sri Lanka
            </Typography>
          </Stack>
        </CardContent>
        <CardActions>
          <Button variant="contained" fullWidth>
            Done
          </Button>
        </CardActions>
      </Card>
  </Box>
  );
};

export default Profile;
