import { Box } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'

export default function Form({
  children,
  onSubmit,
  defaultValues = {},
  validations = null,
  sx,
  ...props
}) {
  const { register, handleSubmit, formState, control, watch, setValue } =
    useForm({
      criteriaMode: 'all',
      mode: 'onChange',
      defaultValues: defaultValues,
      resolver: yupResolver(validations),
    })

  const formProps = {
    register: register,
    formState: formState,
    control: control,
    setValue: setValue,
  }

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        ...sx,
      }}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { ...formProps })
        }
        return child
      })}
    </Box>
  )
}
