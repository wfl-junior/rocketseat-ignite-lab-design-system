import classNames from "classnames";

export type HeadingProps<T extends React.ElementType = "span"> =
  React.ComponentPropsWithoutRef<T> & {
    children: string;
    size?: "sm" | "md" | "lg";
    as?: T;
  };

export const Heading = <T extends React.ElementType = "span">({
  children,
  size = "md",
  as,
  className,
  ...props
}: HeadingProps<T>): JSX.Element => {
  const Component: React.ElementType = as || "h2";

  return (
    <Component
      className={classNames(
        "font-sans font-bold text-gray-100",
        {
          "text-lg": size === "sm",
          "text-xl": size === "md",
          "text-2xl": size === "lg",
        },
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
