import {
  Box,
  List,
  ListItemText,
  ListItemButton,
  ListItem,
  Switch,
  Typography,
  Card,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Inbox, Drafts, Brightness4 } from "@mui/icons-material";
import { SideIcon } from "./styled.component";
import { theme } from "../../theme/theme";
import Sorter from "../Sorter/Sorter";

const Sidebar = () => {
  const MODE: string = localStorage.getItem('MODE')||'light';
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [mode, setMode] = useState(MODE);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };
  
  console.log(MODE);
  
  useEffect(() => {
    localStorage.setItem('MODE',mode)

  }, [mode])

  const modeSelecter = () => {
    console.log(mode);
    setMode(prev => prev === 'light'? "dark":"light")
    
  };

  return (
    <Box
      flex={1}
      bgcolor={"background.default"}
      color={"text.primary"}
      pt={1}
      sx={{ display: {xs:'none', md: "none", lg: "block", minWidth: "180px" } }}
    >
      <Card variant="outlined" sx={{ borderRadius:'10px', position: "fixed"}}  >
      <List
        component="nav"
        aria-label="main mailbox folders"
      >
        <ListItem>
          <SideIcon>
            <Typography fontSize="medium" mr={1} fontWeight="600">
              {"Mode"}
            </Typography>
            <Brightness4 />
          </SideIcon>
          <Switch
            checked={mode==='dark'?true:false}
            sx={{ margin: 0 }}
            onClick={() => modeSelecter()}
          />
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
          <Sorter />
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
      </Card>
    </Box>
  );
};

export default Sidebar;
