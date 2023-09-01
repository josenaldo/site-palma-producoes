import React from 'react'

import { Box } from '@mui/material'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

export default function Form({
  children,
  onSubmit,
  defaultValues = {},
  validations = null,
  sx,
  ...props
}) {
  const { register, handleSubmit, formState, control, watch, setValue, reset } =
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

  const submitForm = (data) => {
    onSubmit(data)
    reset(defaultValues)
  }

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(submitForm)}
      onReset={() => {
        reset(defaultValues)
      }}
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
