export default interface IUseInput<T> {
  handleInput: (event: React.InputEvent<HTMLInputElement>) => void;
  id: string;
  value: T;
}
