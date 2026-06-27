import {
  EasyBaseInput,
  EasyValidationMessage,
  useDateInput,
  useEmailInput,
  usePasswordInput,
} from "../../src/index";

export const App: React.FC = () => {
  const date = useDateInput();
  const email = useEmailInput();
  const password = usePasswordInput();

  return (
    <>
      <EasyBaseInput input={date} placeholder="first name" />
      <div>
        <EasyBaseInput input={password} />
        <button onClick={password.toggleInputType}>Toggle</button>
      </div>
      <div>
        <EasyBaseInput input={email} />
        <EasyValidationMessage input={email} />
      </div>
    </>
  );
};
