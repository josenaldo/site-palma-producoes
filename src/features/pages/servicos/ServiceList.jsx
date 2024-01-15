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
            alignItems: 'flex-start',
            borderRadius: 0,
            py: 2,
            width: '100%',
          }}
        >
          <CardMedia
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: { xs: '100%', sm: 'auto' },
              pt: 1,
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
            <Box sx={{
              textAlign: {
                xs: 'center',
                sm: 'left',
              },

            }}>
              <ContentBlock body={service.body}></ContentBlock>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}
