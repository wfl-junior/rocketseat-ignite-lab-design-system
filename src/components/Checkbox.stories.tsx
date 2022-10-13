import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";
import { Text } from "./Text";

const meta: Meta<CheckboxProps> = {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    id: "checkbox",
    "aria-labelledby": "checkbox-label",
  },
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    "aria-labelledby": {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    Story => (
      <div className="flex items-center gap-3">
        {Story()}
        <Text
          id="checkbox-label"
          as="label"
          htmlFor="checkbox"
          className="cursor-pointer"
        >
          Lembrar de mim por 30 dias
        </Text>
      </div>
    ),
  ],
};

export const Default: StoryObj<CheckboxProps> = {};

export default meta;
