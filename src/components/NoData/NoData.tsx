import { CancelOutlined } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

const NoData = () => {
  return (

   <Box display='flex' pt={2} justifyContent='center' alignItems='center'>
    <Typography variant='h5'>
        No Data Available
    </Typography>
    <CancelOutlined fontSize='medium' color='error' sx={{marginLeft:'10px'}}/>
   </Box>

  )
}

export default NoData