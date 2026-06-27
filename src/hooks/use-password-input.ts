import useInput from "./use-input";
import type IUsePasswordInput from "../interfaces/i-use-password-input";

export default function usePasswordInput(initialValue = ""): IUsePasswordInput {
  const toggleInputType = (): void => {
    if (input.inputType === "password") {
      input.setInputType("text");
    } else {
      input.setInputType("password");
    }
  };

  const input = useInput(initialValue, "password", (element) => element.value);

  return {
    ...input,
    toggleInputType,
  };
}
