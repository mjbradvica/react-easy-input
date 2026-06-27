import useInput from "./use-input";
import type IUsePasswordInput from "../interfaces/i-use-password-input";
import { useState } from "react";
import type { BaseInputType } from "../types/base-input-type";

export default function usePasswordInput(initialValue = ""): IUsePasswordInput {
  const [inputType, setInputType] = useState<BaseInputType>("text");

  const toggleInputType = (): void => {
    if (input.inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  const input = useInput(initialValue, inputType, (element) => element.value);

  return {
    ...input,
    toggleInputType,
  };
}
