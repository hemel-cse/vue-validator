declare type ValidatorDefinition = {
  check: Function, // validator function
  message?: string|Function // error message
}

declare type ValidationError = {
  field: string,
  validator: string,
  message?: string
}

declare type ValidationResult = {
  valid: boolean,
  invalid: boolean,
  dirty: boolean,
  pristine: boolean,
  touched: boolean,
  untouched: boolean,
  modified: boolean,
  [key: string]: Array<ValidationError>|boolean|string // validator result
}
