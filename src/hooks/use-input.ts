import { useState } from "react";
import type IUseInput from "../interfaces/i-use-input";

export default function useInput<T>(
  initialValue: T,
  conversionFunc: (element: HTMLInputElement) => T,
): IUseInput<T> {
  const id = crypto.randomUUID();
  const [dirty, setDirty] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [valid, setValid] = useState<boolean>(false);
  const [value, setValue] = useState<T>(initialValue);

  const handleInput = (event: React.InputEvent<HTMLInputElement>): void => {
    const element = event.target as HTMLInputElement;

    setDirty(true);
    setMessage(element.validationMessage);
    setValid(element.validity.valid);
    setValue(conversionFunc(element));
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
    const element = event.target as HTMLInputElement;

    setDirty(true);
    setMessage(element.validationMessage);
    setValid(element.validity.valid);
    setValue(conversionFunc(element));
  };

  return { dirty, handleFocus, handleInput, id, message, valid, value };
}
