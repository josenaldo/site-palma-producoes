import React from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import {
  Box,
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'

const languages = ['pt', 'en']

export default function LanguageSelector({ t }) {
  const router = useRouter()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  // TODO: verificar se mudança de idioma respeita parametros da busca
  const handleChange = async (value) => {
    let pathname = router.pathname

    const newQuery = {
      ...router.query,
      locale: value,
    }

    let newPathname = pathname
    const queryKeys = Object.keys(newQuery)

    queryKeys.forEach((key) => {
      newPathname = newPathname.replace(`[${key}]`, `${newQuery[key]}`)
    })

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
    <Box
      sx={{
        py: 1,
      }}
    >
      <Button
        id="basic-button"
        variant="outlined"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        startIcon={<LanguageIcon />}
      >
        {t('common:languageSelector.language')}
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
            <ListItemText>
              {t(`common:languageSelector.${language}`, { ns: 'common' })}
            </ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}
