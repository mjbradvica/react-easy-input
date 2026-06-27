import type IUseInput from "../interfaces/i-use-input";
import useInput from "./use-input";

export default function useTextInput(initialValue = ""): IUseInput<string> {
  return useInput(initialValue, "text", (element) => element.value);
}
