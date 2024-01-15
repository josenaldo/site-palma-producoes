import { useTranslation } from '@/features/i18n'
import { BigBanner } from '@/features/ui'

export default function BannerPortfolio() {
  const { t } = useTranslation(['common', 'servicos'])

  return (
    <BigBanner
      image="/images/content/pages/servicos-portfolio.jpg"
      alt="Link para Portfolio"
      href="/portfolio"
      buttonText={t('servicos:bannerPortfolio.button')}
      title={t('servicos:bannerPortfolio.title')}
    />
  )
}
