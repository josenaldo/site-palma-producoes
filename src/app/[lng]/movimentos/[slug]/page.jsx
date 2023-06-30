import Image from 'next/image'

export default function MovimentoPage({ params }) {
  return <div>Movimento: {params.slug}</div>
}
