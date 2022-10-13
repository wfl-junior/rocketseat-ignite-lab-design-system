import classNames from "classnames";

export type TextProps<T extends React.ElementType = "span"> =
  React.ComponentPropsWithoutRef<T> & {
    children: string;
    size?: "sm" | "md" | "lg";
    as?: T;
  };

export const Text = <T extends React.ElementType = "span">({
  children,
  size = "md",
  as,
  className,
  ...props
}: TextProps<T>): JSX.Element => {
  const Component: React.ElementType = as || "span";

  return (
    <Component
      className={classNames(
        "font-sans text-gray-100",
        {
          "text-xs": size === "sm",
          "text-sm": size === "md",
          "text-md": size === "lg",
        },
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
