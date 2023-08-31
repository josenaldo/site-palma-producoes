import { Box } from '@mui/material'

import { pages } from '@/data'
import { useTranslation } from '@/features/i18n'
import { useIsHome } from '@/features/layout'
import { Link, SocialLinks } from '@/features/ui'

export default function DesktopMenu({ elevated }) {
  const { t } = useTranslation(['common'])
  const isHome = useIsHome()

  return (
    <Box
      sx={{
        display: {
          xs: 'none',
          md: 'flex',
        },
        flexDirection: 'row',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 1,
      }}
    >
      <SocialLinks color={!isHome || elevated ? 'text.dark' : 'text.light'} />
      <MenuItems
        t={t}
        color={!isHome || elevated ? 'text.dark' : 'text.light'}
      />
    </Box>
  )
}

function MenuItems({ t, color = 'text.dark' }) {
  if (!pages || pages.length === 0) return null

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1,
      }}
    >
      {pages.map((page) => (
        <Link key={page.href} href={page.href} variant="nav" color={color}>
          {t(page.title)}
        </Link>
      ))}
    </Box>
  )
}
