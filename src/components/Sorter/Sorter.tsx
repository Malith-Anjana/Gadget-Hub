import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";

const Sorter = () => {

  return (
   <Box p={0} flex={1} >

        <Stack direction='column' spacing={1}>
          <FormControl size="small" sx={{minWidth: 120 }}>
            <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
            <Select defaultValue="" id="grouped-select" label="Grouping">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small" sx={{minWidth: 120 }}>
            <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
            <Select defaultValue="" id="grouped-select" label="Grouping">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        </Box>
  );
};

export default Sorter;
