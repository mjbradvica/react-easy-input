import type { Meta, StoryObj } from "@storybook/react-vite";
import { EasyDatalistInput } from "../inputs/easy-datalist-input";
import useTextInput from "../hooks/use-text-input";
import type EasyOption from "../interfaces/easy-option";

const meta: Meta<typeof EasyDatalistInput> = {
  component: EasyDatalistInput,
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  render: () => {
    const input = useTextInput();

    const options: Array<EasyOption> = [
      {
        value: "Boeing",
      },
      {
        value: "Airbus",
      },
      {
        value: "Embraer",
      },
    ];

    return <EasyDatalistInput input={input} options={options} />;
  },
};
