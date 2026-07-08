import type EasyOption from "../interfaces/easy-option";
import type IUseInput from "../interfaces/i-use-input";
import { EasyBaseInput } from "./easy-base-input";

export const EasyDatalistInput: React.FC<EasyDatalistInputProperties> = ({
  input,
  options,
}: EasyDatalistInputProperties) => {
  const list = crypto.randomUUID();

  return (
    <div>
      <EasyBaseInput input={input} list={list} />
      <datalist id={list}>
        {options.map((option) => {
          return (
            <option
              disabled={option.disabled}
              key={option.value}
              label={option.label}
              selected={option.selected}
              value={option.value}
            />
          );
        })}
      </datalist>
    </div>
  );
};

interface EasyDatalistInputProperties {
  input: IUseInput<string | number | Date>;
  options: Array<EasyOption>;
}
