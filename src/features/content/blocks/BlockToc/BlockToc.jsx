import React from 'react'
import slugify from 'slugify'

import { Box, Tab, Tabs } from '@mui/material'

export default function BlockToc({ children, ...props }) {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const lis = React.Children.toArray(children.props.children).filter(
    (child) => {
      return child !== '\n' && child !== ' '
    }
  )

  const items = lis.map((li) => {
    return {
      id: slugify(li.props.children, { lower: true }),
      text: li.props.children,
    }
  })

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
        centered
      >
        {items.map((item) => {
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
