import type IValid from "../interfaces/i-valid";

export default function useCanSubmit(inputs: Array<IValid>): boolean {
  return inputs.every((input) => input.isValid);
}
