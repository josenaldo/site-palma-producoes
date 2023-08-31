import { Box, Pagination as MuiPagination, LinearProgress } from '@mui/material'

export default function Pagination({
  onChange,
  page,
  count,
  loading,
  siblingCount = 0,
  boundaryCount = 0,
  showEllipses = true,
  py = 4,
}) {
  if (!count) return null

  if (count <= 1) return null

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        py: py,
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
