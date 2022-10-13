import classNames from "classnames";

export interface HeadingProps {
  children: string;
  size?: "sm" | "md" | "lg";
  as?: React.ElementType;
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  size = "md",
  as: Component = "h2",
}) => (
  <Component
    className={classNames("font-sans text-gray-100", {
      "text-lg": size === "sm",
      "text-xl": size === "md",
      "text-2xl": size === "lg",
    })}
  >
    {children}
  </Component>
);
