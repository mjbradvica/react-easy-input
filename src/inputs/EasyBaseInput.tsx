import type IUseInput from "../interfaces/i-use-input";
import type { BaseInputType } from "../types/base-input-type";

export const EasyBaseInput: React.FC<EasyBaseInputProperties> = ({
  input,
  placeholder,
  type,
}: EasyBaseInputProperties) => {
  const calculateValue = (): string => {
    if (type === "date") {
      return (input.value as Date).toISOString().slice(0, 10);
    }
    return input.value.toString();
  };

  return (
    <input
      id={input.id}
      onFocus={input.handleFocus}
      onInput={input.handleInput}
      placeholder={placeholder}
      type={type}
      value={calculateValue()}
    />
  );
};

interface EasyBaseInputProperties {
  input: IUseInput<string | number | Date>;
  placeholder?: string;
  type: BaseInputType;
}
