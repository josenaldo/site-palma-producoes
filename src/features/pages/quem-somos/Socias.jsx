import { useState } from 'react'

import { Box, Collapse, Typography } from '@mui/material'

import { ContentBlock } from '@/features/content'
import { useTranslation } from '@/features/i18n'
import { SociaCard } from '@/features/pages/quem-somos'

export default function Socias({ socias }) {
  const { t } = useTranslation(['common', 'quem-somos'])
  const [selectedSocia, setSelectedSocia] = useState(null)

  return (
    <Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
          },
          gap: 2,
          mt: 4,
          padding: 5,
        }}
      >
        {socias.map((socia) => (
          <SociaCard
            t={t}
            key={socia.url}
            socia={socia}
            onClick={() => {
              if (selectedSocia === socia) {
                setSelectedSocia(null)
                return
              }
              setSelectedSocia(socia)
            }}
            open={selectedSocia === socia}
          />
        ))}
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {socias.map((socia, index) => (
          <Collapse
            key={socia.url}
            in={selectedSocia === socia}
            timeout={400}
            addEndListener={(element) => {
              const isNotLast = index !== socias.length - 1
              if (selectedSocia === socia && isNotLast) {
                element.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                })
              }
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  md: 'row',
                },
                mb: 5,
              }}
            >
              <Box
                sx={{
                  width: {
                    xs: '100%',
                    md: '30%',
                  },
                  pr: {
                    xs: 0,
                    md: 8,
                  },
                  display: 'flex',
                  justifyContent: {
                    xs: 'center',
                    md: 'flex-end',
                  },

                  alignItems: 'center',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    display: 'inline-block',
                    borderBottom: '3px solid',
                    borderColor: 'primary.main',
                  }}
                >
                  {socia.name}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  width: {
                    xs: '100%',
                    md: '70%',
                  },
                  py: 2,
                }}
              >
                <ContentBlock
                  body={socia.body}
                  content={socia}
                  components={{
                    p: ({ children }) => (
                      <Typography variant="1" mb={2}>
                        {children}
                      </Typography>
                    ),
                  }}
                />
              </Box>
            </Box>
          </Collapse>
        ))}
      </Box>
    </Box>
  )
}
