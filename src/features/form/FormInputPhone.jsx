import { MuiTelInput, matchIsValidTel } from 'mui-tel-input'
import { Controller } from 'react-hook-form'

import { FormControl, FormErrors } from '@/features/form/'

export default function FormInputText({
  name,
  control,
  label,
  variant = 'outlined',
  size = 'small',
  rules = {},
  formState,
  fullWidth,
  ...rest
}) {
  const errors = formState.errors
  return (
    <FormControl fullWidth={fullWidth}>
      <Controller
        as={MuiTelInput}
        name={name}
        control={control}
        defaultValue="+55"
        fieldId={name}
        fieldName={name}
        rules={{ validate: matchIsValidTel }}
        render={({
          formState = formState,
          fieldState: { error },
          field: { onChange, value },
        }) => (
          <MuiTelInput
            value={value}
            onChange={onChange}
            label={label}
            id={name}
            variant="outlined"
            preferredCountries={['BR']}
            focusOnSelectCountry={true}
            langOfCountryName="PT-BR"
            error={errors[name] !== undefined}
            size={size}
            fullWidth
          />
        )}
      />
      <FormErrors name={name} errors={errors} />
    </FormControl>
  )
}
