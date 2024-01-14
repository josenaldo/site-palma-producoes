import React from 'react'

import { Box, Chip, Container, Divider, Typography } from '@mui/material'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { useTranslation } from '@/features/i18n'
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
  BlockMore,
  BlockAbstract,
  BlockShareButton,
  BlockTripleCarousel,
  BlockColumns,
  BlockSpacer,
  BlockGallery,
  BlockKnowMoreButton,
  BlockLightbox,
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

  const imagesRef = React.useRef([])
  const [openLightbox, setOpenLightbox] = React.useState(false)
  const [indexLightbox, setIndexLightbox] = React.useState(0)

  function openLightboxWithIndex(src) {
    const index = imagesRef.current.findIndex((image) => image.src === src)
    setOpenLightbox(true)
    setIndexLightbox(index)
  }

  const comp = {
    h1: (props) => <Typography component="h1" variant="h2" {...props} />,
    h2: (props) => <AnchoredTitle component="h2" variant="h3" {...props} />,
    h3: (props) => <AnchoredTitle component="h3" variant="h4" {...props} />,
    h4: (props) => <AnchoredTitle component="h4" variant="h5" {...props} />,
    h5: (props) => <AnchoredTitle component="h5" variant="h6" {...props} />,
    h6: (props) => <AnchoredTitle component="h6" variant="h6" {...props} />,
    a: (props) => <Link {...props} color="primary" sx={{ fontWeight: 500 }} />,
    hr: Divider,
    img: (props) => {
      const imageExists =
        imagesRef.current.filter((image) => image.src === props.src).length > 0

      if (!imageExists) {
        imagesRef.current.push(props)
      }

      return (
        <BlockResponsiveImage
          openLightbox={openLightbox}
          setOpenLightbox={openLightboxWithIndex}
          {...props}
        />
      )
    },
    pre: BlockCode,
    blockquote: BlockBlockquote,
    p: (props) => (
      <Typography
        component="p"
        variant="body1"
        sx={{
          textAlign: {
            xs: 'justify',
            sm: 'justify',
            md: 'left',
          },
          my: 2,
        }}
        {...props}
      />
    ),

    // Custom tags
    BotaoCompartilhar: (props) => (
      <BlockShareButton url={url} title={title} image={image} type="button" />
    ),
    BotaoSaibaMais: BlockKnowMoreButton,
    IconeCompartilhar: (props) => (
      <BlockShareButton url={url} title={title} image={image} type="icon" />
    ),
    Carrossel: BlockCarousel,
    CarrosselTriplo: BlockTripleCarousel,
    Caixa: (props) => (
      <Box
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          maxWidth: '100%',
          width: '100%',
          height: '100%',
          maxHeight: '100%',
          overflow: 'hidden',
        }}
        {...props}
      />
    ),
    Chip: ({ label, ...props }) => <Chip label={label} {...props} />,
    Colunas: ({ formato = '1|1', ...props }) => (
      <BlockColumns format={formato} {...props} />
    ),
    Espaco: ({ altura = 1, ...props }) => (
      <BlockSpacer height={altura} {...props} />
    ),
    Faixa: ({ cor = 'surfice.lighter', children, ...props }) => (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          // overflow: 'hidden',
          backgroundColor: cor || 'transparent',
          position: 'relative',
          width: '100vw',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
        }}
        {...props}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            py: 4,
          }}
        >
          {children}
        </Container>
      </Box>
    ),
    Galeria: BlockGallery,
    ImagemPrincipal: (props) => (
      <BlockMainImage
        image={image}
        aspectRatio={`${image.width}/${image.height}`}
      />
    ),
    Lista: BlockChipList,
    Mais: ({
      textoMais = null,
      textoMenos = null,
      cor = 'primary',
      variante = 'outlined',
      children,
      ...props
    }) => (
      <BlockMore
        textMore={textoMais}
        textLess={textoMenos}
        variant={variante}
        color={cor}
        {...props}
      >
        {children}
      </BlockMore>
    ),
    Parcerias: BlockPartnerships,
    Parceria: BlockPartnershipItem,
    RedesSociais: (props) => <BlockSocialBar {...props} />,
    Resumo: BlockAbstract,
    Tags: ({ size = 'small', ...props }) => (
      <BlockTags tags={tags} size={size} />
    ),
    Titulo: (props) => (
      <BlockTitle
        title={title}
        subtitle={props.subtitulo}
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
        <Box className={`contentPage ${styles.markdownBody}`}>
          <MDXContent components={comp} />
        </Box>
        <BlockLightbox
          imagesRef={imagesRef}
          open={openLightbox}
          setOpen={setOpenLightbox}
          index={indexLightbox}
          setIndex={setIndexLightbox}
        />
      </Container>
    </Box>
  )
}
