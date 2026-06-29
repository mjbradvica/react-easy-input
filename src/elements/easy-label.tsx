import { validationStyling } from "../helpers/styling-helpers";
import type IUseInput from "../interfaces/i-use-input";

export const EasyLabel: React.FC<EasyLabelProperties> = ({
  content,
  input,
  invalidClass = "",
  staticClass = "",
  validClass = "",
}: EasyLabelProperties) => {
  return (
    <label
      className={`${validationStyling(input, validClass, invalidClass)} ${staticClass}`}
      htmlFor={input.id}
    >
      {content}
    </label>
  );
};

interface EasyLabelProperties {
  content: string;
  input: IUseInput<string | number | Date | boolean>;
  invalidClass?: string;
  staticClass?: string;
  validClass?: string;
}
