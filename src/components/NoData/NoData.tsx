import { CancelOutlined } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

const NoData = () => {
  return (

   <Box display='flex' height={'100vh'} pt={5} m={0} justifyContent='center'>
    <Typography variant='h5'>
        No Data Available
    </Typography>
    <CancelOutlined fontSize='medium' color='error' sx={{marginLeft:'10px', marginTop:'5px'}}/>
   </Box>

  )
}

export default NoData