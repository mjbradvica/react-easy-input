import type IDirty from "./i-dirty";
import type IValid from "./i-valid";

export default interface IUseInput<T> extends IDirty, IValid {
  handleFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleInput: (event: React.InputEvent<HTMLInputElement>) => void;
  id: string;
  message: string;
  value: T;
}
