import type IUseInput from "../interfaces/i-use-input";

export const EasyValidationMessage: React.FC<
  EasyValidationMessageProperties
> = ({ input }: EasyValidationMessageProperties) => {
  return <p>{input.message}</p>;
};

interface EasyValidationMessageProperties {
  input: IUseInput<string | number | Date>;
}
