import { useState } from "react";
import type IUseInput from "../interfaces/i-use-input";

export default function useInput<T>(
  initialValue: T,
  conversionFunction: (element: HTMLInputElement) => T,
): IUseInput<T> {
  const id = crypto.randomUUID();
  const [isDirty, setDirty] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [isValid, setValid] = useState<boolean>(false);
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

  return { isDirty, handleFocus, handleInput, id, message, isValid, value };
}
