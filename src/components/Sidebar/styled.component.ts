import { Box, Card, CardProps, styled } from "@mui/material";
import { theme } from "../../theme/theme";

export const SideIcon = styled(Box)({
  display: "flex",
  paddingRight: 10,
  color: theme.palette.secondary.light,
});

export const FixedCard = styled(Card)<CardProps>({
  borderRadius: "10px",
  width:'14%',
  position:'fixed'

});
