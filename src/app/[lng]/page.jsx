import Link from 'next/link'
import { useTranslation } from '@/i18n'

export default async function HomePage({ params: { lng } }) {
  const { t } = await useTranslation(lng)

  return (
    <div>
      <h1 variant="h1">{t('title')}</h1>
      <br />
      <Link href={`/${lng}/quem-somos`}>{t('to-quem-somos-page')}</Link>
    </div>
  )
}
