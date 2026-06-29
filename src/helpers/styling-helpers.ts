import type IUseInput from "../interfaces/i-use-input";

export const validationStyling = <T>(
  input: IUseInput<T>,
  validClass: string,
  invalidClass: string,
): string => {
  if (input.isDirty) {
    return input.isValid ? validClass : invalidClass;
  }

  return "";
};
