import type IUseInput from "../interfaces/i-use-input";
import useInput from "./use-input";

export default function useNumberInput(initialValue = 0): IUseInput<number> {
  return useInput(initialValue, "number", (element) => Number(element.value));
}
