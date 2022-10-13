import classNames from "classnames";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  as?: React.ElementType;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  as: Component = "button",
  className,
  ...props
}) => (
  <Component
    className={classNames(
      "w-full cursor-pointer rounded bg-cyan-500 py-3 px-4 font-sans text-sm font-semibold text-black transition-colors hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-white",
      className,
    )}
    {...props}
  >
    {children}
  </Component>
);
