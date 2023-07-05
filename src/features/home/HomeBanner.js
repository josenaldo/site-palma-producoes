import { BannerBox } from '@/features/ui'
import { Box, Typography } from '@mui/material'
import { homeBannerItems } from '@/data/home'
import { useState } from 'react'

import styles from './HomeBanner.module.css'

export default function HomeBanner({ t }) {
  const [selectedItem, setSelectedItem] = useState(homeBannerItems[0])

  return (
    <BannerBox
      image={selectedItem.image}
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '120px',
      }}
    >
      <Box className={styles.wrapper}>
        {homeBannerItems.map((item, index) => (
          <Typography
            key={index}
            variant="h1"
            className={styles.title}
            onClick={() => setSelectedItem(item)}
            onMouseOver={() => setSelectedItem(item)}
          >
            {t(item.title, { ns: 'home' })}
          </Typography>
        ))}
      </Box>
    </BannerBox>
  )
}
