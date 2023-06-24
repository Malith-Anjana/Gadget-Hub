import {
  Box,
  ListItemAvatar,
  Avatar,
  List,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Switch,
  ListItem,
} from "@mui/material";

import { ModeNight,BeachAccess, Work, Image } from "@mui/icons-material";
const Sidebar = () => {
  return (
    <Box
      flex={1}
      bgcolor={"skyblue"}
      pt={1}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
      <ListItem>
        <ListItemIcon>
          <ModeNight/>
        </ListItemIcon>
        <Switch/>
      </ListItem>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar variant="rounded">
            <Image />
          </Avatar >
        </ListItemAvatar>
        <ListItemText primary="Photos"/>
      </ListItemButton>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar variant="rounded">
            <Work />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work"/>
      </ListItemButton>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar variant="rounded">
            <BeachAccess/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation"/>
      </ListItemButton>
    </List>
    </Box>
  )
}

export default Sidebar;
