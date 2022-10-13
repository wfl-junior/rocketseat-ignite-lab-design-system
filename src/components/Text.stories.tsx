import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

const meta: Meta<TextProps> = {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Hello World",
    size: "md",
    as: "span",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
};

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg",
  },
};

export default meta;
