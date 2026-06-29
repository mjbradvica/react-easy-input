import { EasyLabel } from "../elements/easy-label";
import type { Meta, StoryObj } from "@storybook/react-vite";
import useTextInput from "../hooks/use-text-input";
import { EasyBaseInput } from "../inputs/easy-base-input";
import { EasyValidationMessage } from "../elements/easy-validation-message";

const meta: Meta<typeof EasyLabel> = {
  component: EasyLabel,
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  render: () => {
    const input = useTextInput();

    return (
      <div className="mb-3">
        <EasyLabel input={input} content="My Label:" staticClass="form-label" />
        <div className="input-group">
          <EasyBaseInput
            input={input}
            staticClass="form-control"
            required
            validClass="is-valid"
            invalidClass="is-invalid"
          />
        </div>
        <EasyValidationMessage input={input} invalidClass="text-danger" />
      </div>
    );
  },
};
