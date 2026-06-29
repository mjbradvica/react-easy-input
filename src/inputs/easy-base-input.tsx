import { validationStyling } from "../helpers/styling-helpers";
import type IUseInput from "../interfaces/i-use-input";

export const EasyBaseInput: React.FC<EasyBaseInputProperties> = ({
  input,
  invalidClass = "",
  name,
  placeholder,
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
      className={`${staticClass} ${validationStyling(input, validClass, invalidClass)}`}
      id={input.id}
      onFocus={input.handleFocus}
      onInput={input.handleInput}
      name={name}
      placeholder={placeholder}
      required={required}
      type={input.inputType}
      value={calculateValue()}
    />
  );
};

interface EasyBaseInputProperties {
  input: IUseInput<string | number | Date>;
  invalidClass?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  staticClass?: string;
  validClass?: string;
}
