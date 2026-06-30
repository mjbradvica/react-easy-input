import { EasyBaseInput, useDateInput } from "../../src/index";

export const App: React.FC = () => {
  const date = useDateInput();

  return (
    <>
      <div>
        <EasyBaseInput input={date} />
      </div>
    </>
  );
};
