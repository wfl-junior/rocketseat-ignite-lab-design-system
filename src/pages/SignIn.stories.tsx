import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { rest } from "msw";
import { SignIn, SignInProps } from "./SignIn";

const meta: Meta<SignInProps> = {
  title: "Pages/SignIn",
  component: SignIn,
  args: {},
  parameters: {
    msw: {
      handlers: [
        rest.post("/sessions", (_request, response, context) => {
          return response(
            context.json({
              message: "Login realizado!",
            }),
          );
        }),
      ],
    },
  },
};

export const Default: StoryObj<SignInProps> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByLabelText("Endereço de e-mail"),
      "johndoe@example.com",
    );

    userEvent.type(canvas.getByLabelText("Sua Senha"), "TestPassword123$");

    userEvent.click(
      canvas.getByRole("button", {
        name: "Entrar na plataforma",
      }),
    );

    await waitFor(() => {
      return expect(canvas.getByText("Login realizado!")).toBeInTheDocument();
    });
  },
};

export default meta;
