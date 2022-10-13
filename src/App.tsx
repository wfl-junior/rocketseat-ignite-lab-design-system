import { EnvelopeSimple, Lock } from "phosphor-react";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";
import { Text } from "./components/Text";
import { TextInputControl } from "./components/TextInputControl";

export const App: React.FC = () => (
  <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-8 bg-gray-900 text-gray-100">
    <header className="flex flex-col items-center">
      <Logo />

      <Heading size="lg" className="mt-4">
        Ignite Lab
      </Heading>

      <Text size="lg" className="block text-gray-400">
        Faça login e comece a usar!
      </Text>
    </header>

    <form
      className="flex w-full max-w-[400px] flex-col items-stretch gap-4"
      onSubmit={event => event.preventDefault()}
    >
      <TextInputControl
        label="Endereço de e-mail"
        name="email"
        type="email"
        placeholder="johndoe@example.com"
        icon={EnvelopeSimple}
      />

      <TextInputControl
        label="Sua Senha"
        name="password"
        type="password"
        placeholder="************"
        icon={Lock}
      />

      <div className="flex items-center gap-3">
        <Checkbox
          id="remember"
          name="remember"
          aria-labelledby="remember-label"
        />

        <Text
          id="remember-label"
          as="label"
          htmlFor="remember"
          size="sm"
          className="cursor-pointer text-gray-200"
        >
          Lembrar de mim por 30 dias
        </Text>
      </div>

      <Button type="submit" className="mt-4">
        Entrar na plataforma
      </Button>
    </form>

    <footer className="flex flex-col items-center gap-4">
      <Text
        as="a"
        href="#"
        className="text-gray-400 underline transition-colors hover:text-gray-200"
        size="sm"
      >
        Esqueceu sua senha?
      </Text>

      <Text
        as="a"
        href="#"
        className="text-gray-400 underline transition-colors hover:text-gray-200"
        size="sm"
      >
        Não possui conta? Crie uma agora!
      </Text>
    </footer>
  </div>
);
