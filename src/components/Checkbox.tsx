import * as RadixCheckbox from "@radix-ui/react-checkbox";
import classNames from "classnames";
import { Check } from "phosphor-react";

export interface CheckboxProps extends RadixCheckbox.CheckboxProps {}

export const Checkbox: React.FC<CheckboxProps> = ({ className, ...props }) => (
  <RadixCheckbox.Root
    className={classNames(
      "flex aspect-square w-6 items-center justify-center rounded bg-gray-800",
      className,
    )}
    {...props}
  >
    <RadixCheckbox.Indicator asChild>
      <Check weight="bold" className="h-5 w-5 text-cyan-500" />
    </RadixCheckbox.Indicator>
  </RadixCheckbox.Root>
);
