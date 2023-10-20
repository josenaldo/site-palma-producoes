import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import Image from 'next/image'

import { palette } from '@/features/styles'
import { ContentBlock } from '@/features/content'

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
        '& .MuiPaper-root:not(:last-child)': {
          borderBottom: '1px solid',
          borderColor: 'grey.lighter',
        },
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
            borderRadius: 0,
            py: 2,
          }}
        >
          <CardMedia
            sx={{
              display: 'flex',
            }}
          >
            <Image
              src={service.icon}
              alt={service.title}
              width={50}
              height={50}
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
            <ContentBlock body={service.body}></ContentBlock>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}
