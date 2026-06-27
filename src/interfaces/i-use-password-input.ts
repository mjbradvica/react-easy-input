import type IUseInput from "./i-use-input";

export default interface IUsePasswordInput extends IUseInput<string> {
  toggleInputType: () => void;
}
