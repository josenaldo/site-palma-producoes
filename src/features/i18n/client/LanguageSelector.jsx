import React from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import {
  Box,
  Button,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material'
import { useTranslation } from '@/features/i18n'

const languages = ['pt', 'en']

export default function LanguageSelector({ onlyIcon = false }) {
  const { t, locale } = useTranslation(['common'])
  const router = useRouter()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const [query, setQuery] = React.useState({})

  React.useEffect(() => {
    if (router.isReady) {
      setQuery(router.query)
    }
  }, [router.isReady, router.query])

  const handleChange = async (value) => {
    console.log('🔴 LanguageSelector handleChange', value)

    const pathname = router.pathname

    let newPathname = router.pathname
    console.log('🔴 LanguageSelector newPathname', newPathname)

    const newQuery = {
      ...query,
      locale: value,
    }
    console.log('🔴 LanguageSelector newQuery', newQuery)

    const queryKeys = Object.keys(newQuery)
    console.log('🔴 LanguageSelector queryKeys', queryKeys)

    queryKeys.forEach((key) => {
      newPathname = newPathname.replace(`[${key}]`, `${newQuery[key]}`)
    })
    console.log('🔴 LanguageSelector newPathname after queryKeys', newPathname)

    const queryString = router.asPath.split('?')[1] || ''
    console.log('🔴 LanguageSelector queryString', queryString)

    if (queryString) {
      newPathname += `?${queryString}`
    }
    console.log(
      '🔴 LanguageSelector newPathname after query string',
      newPathname
    )

    const url = { pathname: pathname, query: newQuery }
    console.log('🔴 LanguageSelector url', url)

    const urlAs = { pathname: newPathname }
    console.log('🔴 LanguageSelector urlAs', urlAs)

    router.push(url, urlAs, { query: newQuery })
    // window.location.assign(newPathname)

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
      key={router.asPath}
      sx={{
        py: onlyIcon ? 0 : 1,
      }}
    >
      {onlyIcon ? (
        <IconButton
          id="basic-button"
          variant="text"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <Image
            src={`/flags/${t('common:languageSelector.flag')}.svg`}
            width={20}
            height={20}
            alt={t(locale)}
          />
        </IconButton>
      ) : (
        <Button
          id="basic-button"
          variant="text"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          startIcon={
            <Image
              src={`/flags/${t('common:languageSelector.flag')}.svg`}
              width={20}
              height={20}
              alt={t(locale)}
            />
          }
        >
          {t('common:languageSelector.language')}
        </Button>
      )}

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
              {t('common:languageSelector.' + language)}
            </ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}
