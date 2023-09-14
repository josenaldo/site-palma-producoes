import { Box, Container, Divider, Typography } from '@mui/material'

import { useTranslation } from '@/features/i18n'

import { useMDXComponent } from 'next-contentlayer/hooks'

import { AnchoredTitle, Link } from '@/features/ui'

import {
  BlockBlockquote,
  BlockCarousel,
  BlockChipList,
  BlockCode,
  BlockMainImage,
  BlockResponsiveImage,
  BlockSocialBar,
  BlockYoutube,
  BlockTags,
  BlockTitle,
  BlockToc,
  BlockPartnerships,
  BlockPartnershipItem,
} from '@/features/content/blocks'

import styles from './ContentPage.module.css'

export default function ContentPage({
  title,
  titleBorderBottomColor = 'primary.main',
  image,
  body,
  tags,
  author,
  date,
  url,
  ns = ['common'],
  components = {},
}) {
  const { t, isoLocale } = useTranslation(ns)

  const contentBody = body?.code || body?.html || body?.raw || body

  const MDXContent = useMDXComponent(contentBody)

  const comp = {
    h1: (props) => <Typography component="h1" variant="h2" {...props} />,
    h2: (props) => <AnchoredTitle component="h2" variant="h3" {...props} />,
    h3: (props) => <AnchoredTitle component="h3" variant="h4" {...props} />,
    h4: (props) => <AnchoredTitle component="h4" variant="h5" {...props} />,
    h5: (props) => <AnchoredTitle component="h5" variant="h6" {...props} />,
    h6: (props) => <AnchoredTitle component="h6" variant="h6" {...props} />,
    a: Link,
    hr: Divider,
    img: BlockResponsiveImage,
    pre: BlockCode,
    blockquote: BlockBlockquote,

    // Custom tags
    Carrossel: BlockCarousel,
    ImagemPrincipal: (props) => <BlockMainImage image={image} />,
    Lista: BlockChipList,
    Parcerias: BlockPartnerships,
    Parceria: BlockPartnershipItem,
    RedesSociais: (props) => <BlockSocialBar {...props} />,
    Tags: (props) => <BlockTags tags={tags} />,
    Titulo: (props) => (
      <BlockTitle
        title={title}
        titleBorderBottomColor={titleBorderBottomColor}
      />
    ),
    Youtube: (props) => <BlockYoutube {...props} />,
    ...components,
    Toc: BlockToc,
  }

  return (
    <Box>
      <Container>
        <Box className={styles.markdownBody}>
          <MDXContent components={comp} />
        </Box>
      </Container>
    </Box>
  )
}
