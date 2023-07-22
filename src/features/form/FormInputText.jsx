import { Controller } from 'react-hook-form'
import TextField from '@mui/material/TextField'

export default function FormInputText({
  name,
  control,
  label,
  variant = 'outlined',
  size = 'small',
  ...rest
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size={size}
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant={variant}
          {...rest}
        />
      )}
    />
  )
}
