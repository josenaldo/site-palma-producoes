import React, { useMemo } from 'react'
import slugify from 'slugify'

import { Box, Tab, Tabs } from '@mui/material'

export default function BlockToc({ children, ...props }) {
  const [value, setValue] = React.useState(0)
  const [selectedY, setSelectedY] = React.useState(0)
  const scrollRef = React.useRef(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const lis = useMemo(() => {
    return React.Children.toArray(children.props.children).filter((child) => {
      return child !== '\n' && child !== ' '
    })
  }, [children])

  const itemsMap = lis.reduce((acc, li, currentIndex) => {
    const id = slugify(li.props.children, { lower: true })
    return {
      ...acc,
      [id]: {
        id,
        text: li.props.children,
        index: currentIndex,
      },
    }
  }, {})

  const getItemIndex = (entry) => {
    const id = entry.target.id
    const item = itemsMap[id]
    return item.index
  }

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.length === 0) return

        if (entries.length === 1) {
          const index = getItemIndex(entries[0])
          const newSelectedY = entries[0].boundingClientRect.y
          setValue(index)
          setSelectedY(newSelectedY)
          scrollRef.current = window.scrollY
          return
        }

        const visibles = entries.filter((entry) => entry.isIntersecting)

        if (visibles.length === 0) return

        const diff = scrollRef.current - window.scrollY
        const isScrollingUp = diff > 0

        let visible = null
        if (isScrollingUp) {
          visible = visibles[0]
        } else {
          visible = visibles[visibles.length - 1]
        }

        const index = getItemIndex(visible)
        setValue(index)
        scrollRef.current = window.scrollY
      },
      { rootMargin: '-100px' }
    )

    Object.values(itemsMap).forEach((item) => {
      const target = document.getElementById(item.id)
      if (target) {
        observer.observe(target)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [itemsMap, getItemIndex])

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'sticky',
        top: '80px',
        py: 2,
        backgroundColor: 'background.paper',
        zIndex: 100,
        width: '100%',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
      >
        {Object.values(itemsMap).map((item) => {
          return (
            <Tab
              key={item.id}
              label={item.text}
              wrapped
              sx={{ fontSize: '1rem', fontWeight: 'bold' }}
              onClick={() => {
                const content = document.getElementById(item.id)
                if (content) {
                  content.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  })
                }
              }}
            />
          )
        })}
      </Tabs>
    </Box>
  )
}
