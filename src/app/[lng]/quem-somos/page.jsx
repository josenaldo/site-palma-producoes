import Link from 'next/link'
import { useTranslation } from '@/i18n'

export default async function QuemSomosPage({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'quem-somos')

  return (
    <div>
      <h1>{t('title')}</h1>
      <br />
      <Link href={`/${lng}`}>{t('back-to-home')}</Link>
    </div>
  )
}
