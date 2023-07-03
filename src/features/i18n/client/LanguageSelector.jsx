import React from 'react'

import {
  Box,
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'

import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { useTranslation } from 'next-i18next'
import { useLanguage } from '@/features/i18n/client'

const languages = ['pt', 'en']

export default function LanguageSelector() {
  const { t } = useTranslation('common')
  const lng = useLanguage()

  const router = useRouter()
  const pathname = usePathname()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleChange = async (value) => {
    const newPathname = pathname.replace(`/${lng}`, `/${value}`)
    router.push(newPathname)
    handleClose()
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <Button
        id="basic-button"
        variant="outlined"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        startIcon={<LanguageIcon />}
      >
        {t('language')}
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {languages.map((language) => (
          <MenuItem key={language} onClick={() => handleChange(language)}>
            <ListItemIcon>
              <Image
                src={`/flags/${language}.svg`}
                width={20}
                height={20}
                alt={t(language)}
              />
            </ListItemIcon>
            <ListItemText>{t(language)}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}
