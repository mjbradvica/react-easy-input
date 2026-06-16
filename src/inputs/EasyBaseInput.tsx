import type IUseInput from "../interfaces/i-use-input";
import type { BaseInputType } from "../types/base-input-type";

export const EasyBaseInput: React.FC<EasyBaseInputProperties> = ({
  input,
  placeholder,
  type,
}: EasyBaseInputProperties) => {
  const calculateValue = (): string => {
    switch (type) {
      case "date": {
        return (input.value as Date).toISOString().slice(0, 10);
      }
      case "text":
      case "number":
      default: {
        return input.value.toString();
      }
    }
  };

  return (
    <input
      id={input.id}
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
