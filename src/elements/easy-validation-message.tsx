import { validationStyling } from "../helpers/styling-helpers";
import type IUseInput from "../interfaces/i-use-input";

export const EasyValidationMessage: React.FC<
  EasyValidationMessageProperties
> = ({
  input,
  invalidClass = "",
  staticClass = "",
  validClass = "",
}: EasyValidationMessageProperties) => {
  const displayMessage = (): string => {
    return input.isValid ? "valid" : input.message;
  };

  const isVisible = (): "hidden" | "visible" => {
    return input.isValid ? "hidden" : "visible";
  };

  return (
    <p
      className={`${validationStyling(input, validClass, invalidClass)} ${staticClass}`}
      style={{ visibility: isVisible() }}
    >
      {displayMessage()}
    </p>
  );
};

interface EasyValidationMessageProperties {
  input: IUseInput<string | number | Date>;
  invalidClass?: string;
  staticClass?: string;
  validClass?: string;
}
