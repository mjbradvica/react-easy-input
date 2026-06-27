import type IUseInput from "../interfaces/i-use-input";
import useInput from "./use-input";

export default function useEmailInput(initialValue = ""): IUseInput<string> {
  return useInput(initialValue, "email", (element) => element.value);
}
