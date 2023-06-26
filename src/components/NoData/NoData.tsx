import { CancelOutlined } from '@mui/icons-material'
import { Box, Container, Typography } from '@mui/material'

const NoData = () => {
  return (

   <Box display='flex' height= {'100vh'} justifyContent='center' alignItems='center'>
    <Typography variant='h5'>
        No Data Available
    </Typography>
    <CancelOutlined fontSize='medium' color='error' sx={{marginLeft:'10px'}}/>
   </Box>

  )
}

export default NoData