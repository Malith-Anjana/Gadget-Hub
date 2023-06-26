import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

const Checkout = () => {
  return (
    <Box flex={1.5} display={"flex"} p={1}>
      <Card
        variant="outlined"
        sx={{ width: "100%",padding:2, minWidth: 220, borderRadius: "10px" }}
      >
        <CardContent>
          <Typography variant="h4" fontWeight={"700"} component="div">
            Invoice
          </Typography>

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

export default Checkout;
