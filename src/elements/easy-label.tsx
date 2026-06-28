import type IUseInput from "../interfaces/i-use-input";

export const EasyLabel: React.FC<EasyLabelProperties> = ({
  content,
  input,
  invalidClass = "",
  staticClass = "",
  validClass = "",
}: EasyLabelProperties) => {
  const dynamicClass = (): string => {
    if (input.isDirty) {
      return input.isValid ? validClass : invalidClass;
    }

    return "";
  };

  return (
    <label className={`${dynamicClass()} ${staticClass}`} htmlFor={input.id}>
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
