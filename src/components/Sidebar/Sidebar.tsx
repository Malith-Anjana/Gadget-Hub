import {
  Box,
  List,
  ListItemText,
  ListItemButton,
  ListItem,
  Switch,
  Typography,
  Icon,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Brightness4 } from "@mui/icons-material";
import { FixedCard, SideIcon } from "./styled.component";
import { theme } from "../../theme/theme";
import Sorter from "../Sorter/Sorter";
import {
  MobileFriendly,
  LaptopMac,
  Sanitizer,
  Handshake,
  AddBusiness,
  Home,
  Chair,
  Checkroom,
  RollerSkating,
  Woman,
} from "@mui/icons-material";
import axios from "axios";

interface IconMapType {
  [key: string]: React.ElementType;
}
const Sidebar = () => {
  const MODE: string = localStorage.getItem("MODE") || "light";
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [mode, setMode] = useState(MODE);
  const [categories, setCategories] = useState<string[]>([]);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  const iconMap: IconMapType = {
    smartphones: MobileFriendly,
    laptops: LaptopMac,
    fragrances: Sanitizer,
    skincare: Handshake,
    groceries: AddBusiness,
    "home-decoration": Home,
    furniture: Chair,
    tops: Checkroom,
    "womens-dresses": Woman,
    "womens-shoes": RollerSkating,
  };

  const getIconComponent = (iconName: string): React.ReactElement => {
    console.log(iconName);

    const IconComponent = iconMap[iconName];
    return <IconComponent />;
  };

  useEffect(() => {
    localStorage.setItem("MODE", mode);
    fetchCategories();
  }, [mode]);

  const fetchCategories = async () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data.slice(0, 9)));
  };

  const modeSelecter = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Box
      display={"flex"}
      flex={1}
      bgcolor={"background.default"}
      color={"text.primary"}
      pt={1}
      sx={{
        display: {
          xs: "none",
          md: "none",
          lg: "block",
        },
        minWidth: "180px",
        scrollBehavior: "none",
      }}
    >
      <FixedCard variant="outlined">
        <List component="nav" aria-label="main mailbox folders">
          <ListItem>
            <SideIcon>
              <Typography fontSize="medium" mr={1} fontWeight="600">
                {"Mode"}
              </Typography>
              <Brightness4 />
            </SideIcon>
            <Switch
              checked={mode === "dark" ? true : false}
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
          <Box
            overflow="scroll"
            maxHeight={350}
            sx={{
              overflowX: "hidden",
            }}
          >
            {categories.map((category, index) => (
              <ListItemButton
                key={index}
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}
              >
                <SideIcon>
                  <Icon>{getIconComponent(category)}</Icon>
                </SideIcon>
                <ListItemText sx={{ padding: 0, margin: 0 }}>
                  <Typography
                    color={theme.palette.secondary.light}
                    fontSize="medium"
                    mr={1}
                    fontWeight="500"
                  >
                    {category.charAt(0).toUpperCase() +
                      category.slice(1).toLowerCase()}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            ))}
          </Box>
        </List>
      </FixedCard>
    </Box>
  );
};

export default Sidebar;
