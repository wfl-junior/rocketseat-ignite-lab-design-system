import { Meta, StoryObj } from "@storybook/react";
import { EnvelopeSimple } from "phosphor-react";
import * as TextInput from "./TextInput";

const meta: Meta<TextInput.InputProps> = {
  title: "Components/TextInput",
  component: TextInput.Input,
  args: {
    placeholder: "johndoe@example.com",
    type: "text",
  },
};

export const Default: StoryObj<TextInput.InputProps> = {
  decorators: [Story => <TextInput.Root>{Story()}</TextInput.Root>],
};

export const WithIcon: StoryObj<TextInput.InputProps> = {
  decorators: [
    Story => (
      <TextInput.Root>
        <TextInput.Icon>
          <EnvelopeSimple />
        </TextInput.Icon>
        {Story()}
      </TextInput.Root>
    ),
  ],
};

export default meta;
