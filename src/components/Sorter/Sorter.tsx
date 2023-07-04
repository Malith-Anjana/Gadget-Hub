import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";

interface Props {
  onSelectSort:(sort: string)=> void;
}

const Sorter = ({onSelectSort}: Props) => {

  return (
   <Box p={0} flex={1} >

        <Stack direction='column' spacing={1}>
          <FormControl size="small" sx={{minWidth: 120 }}>
            <InputLabel htmlFor="grouped-select">Sort By</InputLabel>
            <Select defaultValue="" id="grouped-select" label="Sort By" onChange={e => onSelectSort(e.target.value)}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'high'}>Price: Low to High</MenuItem>
              <MenuItem value={'low'}>Price: High to Low</MenuItem>
              <MenuItem value={'down'}>Rating: High to Low</MenuItem>
              <MenuItem value={'up'}>Rating: Low to High</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        </Box>
  );
};

export default Sorter;
