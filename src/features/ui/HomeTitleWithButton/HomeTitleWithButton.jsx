import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'

import { ButtonLink } from '@/features/ui/ButtonLink'
import { Title } from '@/features/ui/Title'

HomeTitleWithButton.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  fullwidth: PropTypes.bool,
}

export default function HomeTitleWithButton({
  title,
  href,
  buttonText,
  fullwidth = false,
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        alignItems: {
          xs: 'center',
          md: 'center',
        },
        justifyContent: fullwidth
          ? {
              xs: 'center',
              md: 'flex-start',
            }
          : 'center',
        gap: 4,
        width: '100%',
      }}
    >
      <Title variant="h3" borderBottomColor="transparent">
        {title}
      </Title>
      <ButtonLink
        href={href}
        variant="outlined"
        color="dark"
        size="large"
        hoverColor="primary"
        fullwidth={fullwidth}
        sx={{
          height: 'fit-content',
          px: 4,
          flexGrow: fullwidth ? 1 : 0,
        }}
      >
        {buttonText}
      </ButtonLink>
    </Box>
  )
}
