import { Slot } from "@radix-ui/react-slot";

interface RootProps {
  children: React.ReactNode;
}

export const Root: React.FC<RootProps> = ({ children }) => (
  <div className="flex h-12 w-full items-center gap-3 rounded bg-gray-800 px-4 py-3 focus-within:ring-2 focus-within:ring-cyan-500">
    {children}
  </div>
);

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {}

export const Input: React.FC<InputProps> = props => (
  <input
    type="text"
    className="flex-1 bg-transparent text-xs text-gray-100 placeholder:text-gray-400 focus:outline-none"
    {...props}
  />
);

interface IconProps {
  children: React.ReactNode;
}

export const Icon: React.FC<IconProps> = ({ children }) => (
  <Slot className="h-6 w-6 text-gray-400">{children}</Slot>
);
