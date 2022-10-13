import { Icon } from "phosphor-react";
import { Text } from "./Text";
import * as TextInput from "./TextInput";

interface TextInputControlProps extends TextInput.InputProps {
  label: string;
  name: string;
  icon?: Icon;
}

export const TextInputControl: React.FC<TextInputControlProps> = ({
  label,
  icon: Icon,
  ...props
}) => (
  <div className="flex flex-col gap-2">
    <Text as="label" htmlFor={props.name} className="font-semibold">
      {label}
    </Text>

    <TextInput.Root>
      {Icon && (
        <TextInput.Icon>
          <Icon />
        </TextInput.Icon>
      )}

      <TextInput.Input {...props} />
    </TextInput.Root>
  </div>
);
