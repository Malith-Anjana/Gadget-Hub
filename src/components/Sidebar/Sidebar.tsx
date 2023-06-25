import {
  Box,
  List,
  ListItemText,
  ListItemButton,
  ListItem,
  Switch,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Inbox, Drafts, Brightness4 } from "@mui/icons-material";
import { SideIcon } from "./styled.component";
import { theme } from "../../theme/theme";
import Sorter from "../Sorter/Sorter";
const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };
  return (
    <Box
      flex={1}
      bgcolor={"white"}
      pt={1}
      sx={{ display: { xs: "none", sm: "block", minWidth: "180px" } }}
    >
      <List
        component="nav"
        aria-label="main mailbox folders"
        sx={{ position: "fixed" }}
      >
        <ListItem>
          <SideIcon>
            <Typography fontSize="medium" mr={1} fontWeight="600">
              {"Mode"}
            </Typography>
            <Brightness4 />
          </SideIcon>
          <Switch sx={{ margin: 0 }} />
        </ListItem>
        <ListItem sx={{ paddingBottom: 0 }}>
          <Typography
            fontSize="medium"
            fontWeight="600"
            color={theme.palette.secondary.light}
          >
            {"Sorting"}
          </Typography>
        </ListItem>
        <ListItem>
          <Sorter/>
        </ListItem>
        <ListItem sx={{ paddingBottom: 0 }}>
          <Typography
            fontSize="medium"
            fontWeight="600"
            color={theme.palette.secondary.light}
          >
            {"Categories"}
          </Typography>
        </ListItem>
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <SideIcon>
            <Inbox />
          </SideIcon>
          <ListItemText sx={{ padding: 0, margin: 0 }}>
            <Typography
              color={theme.palette.secondary.light}
              fontSize="medium"
              mr={1}
              fontWeight="500"
            >
              {"Mode"}
            </Typography>
          </ListItemText>
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <SideIcon>
            <Drafts />
          </SideIcon>
          <ListItemText sx={{ padding: 0, margin: 0 }}>
            <Typography
              color={theme.palette.secondary.light}
              fontSize="medium"
              mr={1}
              fontWeight="500"
            >
              {"Draft"}
            </Typography>
          </ListItemText>
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;
