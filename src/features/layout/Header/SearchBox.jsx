'use client'

import { Box, Button, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

const SearchTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    height: '38px !important',
  },
})

export default function SearchBox({ buttonColor = 'white' }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
      }}
    >
      <SearchTextField
        variant="outlined"
        placeholder="Digite o produto"
        sx={{
          backgroundColor: 'common.white',
          color: 'common.black',

          width: {
            xs: '100%',
            sm: '145px',
            lg: '170px',
          },
        }}
      />
      <Button variant="outlined" sx={{ height: '38px' }} color={buttonColor}>
        Search
      </Button>
    </Box>
  )
}
