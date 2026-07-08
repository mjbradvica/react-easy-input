import { validationStyling } from "../helpers/styling-helpers";
import type IUseInput from "../interfaces/i-use-input";

export const EasyBaseInput: React.FC<EasyBaseInputProperties> = ({
  autoFocus,
  input,
  invalidClass = "",
  list,
  max,
  maxLength,
  min,
  minLength,
  multiple,
  name,
  pattern,
  placeholder,
  readonly,
  required,
  staticClass = "",
  validClass = "",
}: EasyBaseInputProperties) => {
  const calculateValue = (): string => {
    if (input.inputType === "date") {
      return (input.value as Date).toISOString().slice(0, 10);
    }
    return input.value.toString();
  };

  return (
    <input
      autoFocus={autoFocus}
      className={`${staticClass} ${validationStyling(input, validClass, invalidClass)}`}
      id={input.id}
      onFocus={input.handleFocus}
      onInput={input.handleInput}
      list={list}
      max={max}
      maxLength={maxLength}
      min={min}
      minLength={minLength}
      multiple={multiple}
      name={name}
      pattern={pattern}
      placeholder={placeholder}
      readOnly={readonly}
      required={required}
      type={input.inputType}
      value={calculateValue()}
    />
  );
};

interface EasyBaseInputProperties {
  autoFocus?: boolean;
  input: IUseInput<string | number | Date>;
  invalidClass?: string;
  list?: string;
  max?: string | number;
  maxLength?: number;
  min?: string | number;
  minLength?: number;
  multiple?: boolean;
  name?: string;
  pattern?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  staticClass?: string;
  validClass?: string;
}
