import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Hover me",
    as: "button",
  },
};

export const Default: StoryObj<ButtonProps> = {};

export default meta;
