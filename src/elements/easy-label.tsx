import type IUseInput from "../interfaces/i-use-input";

export const EasyLabel: React.FC<EasyLabelProperties> = ({
  content,
  input,
  staticClass,
}: EasyLabelProperties) => {
  return (
    <label className={staticClass} htmlFor={input.id}>
      {content}
    </label>
  );
};

interface EasyLabelProperties {
  content: string;
  input: IUseInput<string | number | Date | boolean>;
  staticClass?: string;
}
