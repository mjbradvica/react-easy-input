import { useState } from "react";
import type IUseInput from "../interfaces/i-use-input";
import type { BaseInputType } from "../types/base-input-type";

export default function useInput<T>(
  initialValue: T,
  defaultInputType: BaseInputType,
  conversionFunction: (element: HTMLInputElement) => T,
): IUseInput<T> {
  const id = crypto.randomUUID();
  const [isDirty, setDirty] = useState<boolean>(false);
  const [isValid, setValid] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [inputType, setInputType] = useState<BaseInputType>(defaultInputType);
  const [value, setValue] = useState<T>(initialValue);

  const handleInput = (event: React.InputEvent<HTMLInputElement>): void => {
    const element = event.target as HTMLInputElement;

    setDirty(true);
    setMessage(element.validationMessage);
    setValid(element.validity.valid);
    setValue(conversionFunction(element));
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
    const element = event.target;

    setDirty(true);
    setMessage(element.validationMessage);
    setValid(element.validity.valid);
    setValue(conversionFunction(element));
  };

  return {
    handleFocus,
    handleInput,
    id,
    inputType,
    isDirty,
    isValid,
    message,
    setInputType,
    value,
  };
}
