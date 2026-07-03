import type IValid from "./i-valid";

export default interface IUseInput<T> extends IValid {
  handleFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleInput: (event: React.InputEvent<HTMLInputElement>) => void;
  id: string;
  inputType: string;
  isDirty: boolean;
  message: string;
  value: T;
}
