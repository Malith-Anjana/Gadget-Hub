import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import { AppBar, Typography, InputBase, Avatar, Menu, MenuItem } from "@mui/material";
import { Icons, Search, StyledBadge, StyledToolbar, UserBox } from "./styled.component";
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { theme } from "../../theme/theme";
import {useState} from 'react'
const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <AppBar sx={{ bgcolor: "" }} position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{ fontWeight: "700", display: { xs: "none", sm: "block" } }}
        >
          GADGET HUB
        </Typography>

        <DevicesOtherIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search" />
        </Search>
        <Icons>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
              <ShoppingCartIcon sx={{color:theme.palette.primary.light}} />
            </StyledBadge>
          </IconButton>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
              < FavoriteIcon sx={{color:theme.palette.primary.light}}/>
            </StyledBadge>
          </IconButton>
          <Avatar onClick={()=> setOpen(true)} sx={{ width: 30, height: 30 }} alt="Remy Sharp" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" />
        
        </Icons>
        <UserBox>
        <Avatar onClick={()=> setOpen(true)} sx={{ width: 30, height: 30 }} alt="Remy Sharp" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" />
        <Typography>John</Typography>
        </UserBox>
        
      </StyledToolbar>
      <Menu
        id="basic-menu"
        open={open}
        onClose={()=> setOpen(false)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical:'top',
          horizontal:'right'
        }}
        transformOrigin={{
          vertical:'top',
          horizontal:'right'
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
