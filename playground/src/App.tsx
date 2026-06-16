import { EasyBaseInput, useDateInput, useTextInput } from "../../src/index";

export const App: React.FC = () => {
  const name = useTextInput();
  const date = useDateInput();

  return (
    <>
      <EasyBaseInput input={date} placeholder="first name" type="date" />
    </>
  );
};
