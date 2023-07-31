import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import Image from 'next/image'

import { palette } from '@/features/styles'

const colors = [
  palette.primary.main,
  palette.secondary.main,
  palette.tertiary.main,
  palette.quaternary.main,
]

export default function ServiceList({ services }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        my: 10,
        gap: 4,
      }}
    >
      {services.map((service, index) => (
        <Card
          key={service.url}
          elevation={0}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            borderBottom: '1px solid #ccc',
          }}
        >
          <CardMedia
            sx={{
              display: 'flex',
              padding: 2,
            }}
          >
            <Image
              src={service.icon}
              alt={service.title}
              width={100}
              height={100}
            />
          </CardMedia>
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              color={colors[index]}
              sx={{
                textAlign: {
                  xs: 'center',
                  sm: 'left',
                },
              }}
            >
              {service.title}
            </Typography>
            <Typography variant="body2">{service.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}
