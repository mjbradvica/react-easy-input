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
  return (
    <p
      className={`${validationStyling(input, validClass, invalidClass)} ${staticClass}`}
    >
      {input.message}
    </p>
  );
};

interface EasyValidationMessageProperties {
  input: IUseInput<string | number | Date>;
  invalidClass?: string;
  staticClass?: string;
  validClass?: string;
}
