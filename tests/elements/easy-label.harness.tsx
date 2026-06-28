import { EasyLabel, useTextInput } from "../../src";

export const EasyLabelHarness: React.FC = () => {
  const input = useTextInput();

  return (
    <div>
      <EasyLabel
        input={input}
        content="my-label"
        invalidClass="invalid-class"
        staticClass="static-class"
        validClass="valid-class"
      />
      <input
        value={input.value}
        onInput={input.handleInput}
        onFocus={input.handleFocus}
        id={input.id}
        required
      />
    </div>
  );
};
