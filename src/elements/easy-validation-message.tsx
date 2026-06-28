import type IUseInput from "../interfaces/i-use-input";

export const EasyValidationMessage: React.FC<
  EasyValidationMessageProperties
> = ({
  input,
  invalidClass = "",
  staticClass = "",
  validClass = "",
}: EasyValidationMessageProperties) => {
  const dynamicClass = (): string => {
    if (input.isDirty) {
      return input.isValid ? validClass : invalidClass;
    }

    return "";
  };

  return <p className={`${dynamicClass()} ${staticClass}`}>{input.message}</p>;
};

interface EasyValidationMessageProperties {
  input: IUseInput<string | number | Date>;
  invalidClass?: string;
  staticClass?: string;
  validClass?: string;
}
