import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Skeleton,
  Stack,
} from "@mui/material";

const SkeletonCard = () => {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card
        sx={{
          width: "100%",
          boxShadow: "lg",
          marginTop: "10px",
          borderRadius: { xs: 3, lg: 2 },
        }}
      >
        <Skeleton variant="rectangular" height={170} />
        <CardContent>
          <Stack direction="row" p={0} m={0} justifyContent="space-between">
            <Skeleton animation="wave" width="60%" />
          </Stack>
          <Skeleton animation="wave" width="50%" />
          <Stack direction="row" spacing={1} alignItems="center">
            <Skeleton animation="wave" width="70%" />
          </Stack>
          <Skeleton animation="wave" width="30%" />
          <Skeleton animation="wave" width="40%" />
        </CardContent>
        <CardActions sx={{ padding: 0 }}>
          <Skeleton variant="rectangular" width="100%" height={50} />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SkeletonCard;
