import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "./Heading";

const meta: Meta<HeadingProps> = {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Hello World",
    size: "md",
    as: "h2",
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

export const Default: StoryObj<HeadingProps> = {};

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: "lg",
  },
};

export default meta;
