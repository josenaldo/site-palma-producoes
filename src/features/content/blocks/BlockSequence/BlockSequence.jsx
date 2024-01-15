import PropTypes from 'prop-types'
import { Box, Chip, useMediaQuery } from '@mui/material'

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import React from 'react'

BlockSequence.propTypes = {
  passos: PropTypes.string,
  color: PropTypes.string,
}

export default function BlockSequence({ passos, color = 'primary' }) {
  const steps = passos?.split('>').map((step) => step.trim()) || []
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const Icon = isSmallScreen ? KeyboardArrowDownIcon : KeyboardArrowRightIcon

  if (steps.length === 0) {
    return null
  }

  return (
    <Box
      display={'flex'}
      flexDirection={{
        xs: 'column',
        sm: 'row',
      }}
      gap={1}
      flexWrap={'wrap'}
      alignItems={'center'}
    >
      {steps.map((step, index) => (
        <Box
          key={step}
          display={'flex'}
          flexDirection={{
            xs: 'column',
            sm: 'row',
          }}
          gap={1}
          flexWrap={'nowrap'}
          alignItems={'center'}
        >
          {index !== 0 && <Icon color={color} />}
          <Chip label={step} variant="outlined" color={color} />
        </Box>
      ))}
    </Box>
  )
}
