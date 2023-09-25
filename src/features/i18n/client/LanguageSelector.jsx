import React, { useEffect } from 'react'

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
import { useTranslation } from '@/features/i18n'
import { set } from 'date-fns'

const languages = ['pt', 'en']

export default function LanguageSelector() {
  const { t, locale } = useTranslation(['common'])
  const router = useRouter()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const [query, setQuery] = React.useState({ locale: locale })

  useEffect(() => {
    if (!router.isReady) {
      console.log('🔴 not ready. router.query:', router.query)
      console.log('🔴query:', query)
      return null
    }

    setQuery(router.query)
    console.log('🔴 ready! router.query', router.query)
    console.log('🔴query:', query)
  }, [router.query, router.isReady])

  const handleChange = async (value) => {
    // let pathname = router.pathname
    // let newPathname = router.pathname

    // const newQuery = {
    //   ...router.query,
    //   locale: value,
    // }
    // const queryKeys = Object.keys(newQuery)

    // queryKeys.forEach((key) => {
    //   newPathname = newPathname.replace(`[${key}]`, `${newQuery[key]}`)
    // })

    // const queryString = router.asPath.split('?')[1] || ''
    // if (queryString) {
    //   newPathname += `?${queryString}`
    // }
    // console.log('🔴 new pathname', newPathname)

    // router.push({
    //   pathname: pathName,
    //   query: newQuery,
    // })

    router.push({
      href: './',
      query: { ...router.query, locale: value },
    })
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
        py: 1,
      }}
    >
      <Button
        id="basic-button"
        variant="text"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        startIcon={
          <Image
            src={`/flags/${locale}.svg`}
            width={20}
            height={20}
            alt={t(locale)}
          />
        }
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
              {t('common:languageSelector.' + language)}
            </ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}
