import { pages } from '@/data'
import useIsHome from '@/features/layout/useIsHome'
import { Link, SocialLinks } from '@/features/ui'
import { Box } from '@mui/material'

export default function DesktopMenu({ t }) {
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
        gap: 2,
      }}
    >
      <SocialLinks color={isHome ? 'text.light' : 'text.dark'} />
      <MenuItems t={t} color={isHome ? 'text.light' : 'text.dark'} />
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
        gap: 2,
      }}
    >
      {pages.map((page) => (
        <Link key={page.key} href={page.href} variant="nav" color={color}>
          {t(page.title)}
        </Link>
      ))}
    </Box>
  )
}
