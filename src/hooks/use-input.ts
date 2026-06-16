import { useState } from "react";
import type IUseInput from "../interfaces/i-use-input";

export default function useInput<T>(
  initialValue: T,
  conversionFunc: (element: HTMLInputElement) => T,
): IUseInput<T> {
  const id = crypto.randomUUID();
  const [value, setValue] = useState<T>(initialValue);

  const handleInput = (event: React.InputEvent<HTMLInputElement>): void => {
    const element = event.target as HTMLInputElement;

    setValue(conversionFunc(element));
  };

  return { handleInput, id, value };
}
