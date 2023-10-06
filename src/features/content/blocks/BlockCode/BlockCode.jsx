import { Box } from '@mui/material'

export default function BlockCode({ children }) {
  return (
    <Box
      className="remark-highlight"
      sx={{
        display: 'block',
        overflowX: 'auto',
        textWrap: 'none',
        bgcolor: 'grey.900',
        padding: '10px',
      }}
    >
      <pre>{children}</pre>
    </Box>
  )
}
