import Image from 'next/image'

export default function ProjetoPage({ params }) {
  return <div>Projeto: {params.slug}</div>
}
