import type IUseInput from "../interfaces/i-use-input";

export default function useCanSubmitEdit(
  inputs: Array<IUseInput<string | Date | number | boolean>>,
): boolean {
  return (
    inputs.every((input) => input.isValid) &&
    inputs.some((input) => input.isDirty)
  );
}
