import { Toolbar, styled, Box, Badge, BadgeProps } from "@mui/material";

export const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

export const Search = styled('div')(({theme})=>({
  backgroundColor:'whitesmoke',
  padding: '0 10px',
  borderRadius: 20,
  width:'50%'
}))

export const Icons = styled(Box)<typeof Box>(({theme})=>({
  display:'none',
  gap:10,
  alignItems:'center',
  [theme.breakpoints.up("sm")]:{
    display:'flex'
  }
}))

export const StyledBadge = styled(Badge)<BadgeProps> ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 3,
    padding: '0 4px',
  },
});
export const UserBox = styled(Box)(({theme})=>({
  display:'flex',
  gap:5,
  alignItems:'center',
  [theme.breakpoints.up("sm")]:{
    display:'none'
  }
}))
