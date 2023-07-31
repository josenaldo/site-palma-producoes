import { Box, Button, TextField } from '@mui/material'

// TODO: colocar campo de busca no menu
export default function SearchBox({ buttonColor = 'white' }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Search"
        sx={{
          backgroundColor: 'common.white',
          color: 'common.black',

          width: {
            xs: '100%',
            sm: '145px',
            lg: '170px',
          },
          '& .MuiInputBase-root': {
            height: '380px !important',
          },
        }}
      />
      <Button variant="outlined" sx={{ height: '38px' }} color={buttonColor}>
        Search
      </Button>
    </Box>
  )
}
