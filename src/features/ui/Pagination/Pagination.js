import {
  Box,
  Stack,
  Pagination as MuiPagination,
  LinearProgress,
} from '@mui/material'

export default function Pagination({
  onChange,
  page,
  count,
  loading,
  siblingCount = 0,
  boundaryCount = 0,
  showEllipses = true,
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        py: 4,
      }}
    >
      <MuiPagination
        color="primary"
        count={count}
        size="large"
        siblingCount={siblingCount}
        boundaryCount={boundaryCount}
        page={page}
        onChange={onChange}
        sx={{
          '& li:has(div.MuiPaginationItem-ellipsis)': {
            display: showEllipses ? 'block' : 'none',
          },
        }}
      />
      <Box sx={{ height: '4px' }}>{loading && <LinearProgress />}</Box>
    </Box>
  )
}
