import TextField from '@mui/material/TextField'

import { FormControl, FormErrors } from '@/features/form/'

export default function FormInputText({
  children,
  name,
  type,
  id,
  label,
  helperText = '',
  register,
  validation = {},
  formState,
  size = 'small',
  rules = {},
  setValue,
  fullWidth = true,
  ...rest
}) {
  const errors = formState.errors

  return (
    <FormControl fullWidth={fullWidth}>
      <TextField
        id={id}
        type={type}
        name={name}
        label={label}
        size={size}
        helperText={helperText}
        {...register(name, validation)}
        error={errors[name] !== undefined}
        {...rest}
      >
        {children}
      </TextField>
      <FormErrors name={name} errors={errors} label={label} />
    </FormControl>
  )
}
