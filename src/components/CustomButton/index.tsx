import { Button } from "@chakra-ui/react";
import { TypesSize } from "../../types/buttonTypes";
interface Props {
  label: string;
  variant: "primary" | "secondary";
  width: string;
  fontSize: "sm" | "md" | "lg";

  fontBold: boolean;
  sizeName: "md" | "lg";
}
export const CustomButton = ({
  label,
  variant = "primary",
  fontSize = "md",
  width,
  fontBold,
  sizeName,
}: Props) => {
  const variantColors = {
    primary: "primary",
    secondary: "secondary",
  };
  const backgroundColor = variantColors[variant] || "warning";

  const hoverColorMapping = {
    primary: "primaryHover",
    secondary: "secondaryHover",
  };

  const hoverColor = hoverColorMapping[variant] || "warningHover";

  const y = TypesSize.find((x) => x.sizeName === sizeName);
  return (
    <Button
      w={width}
      h={y?.background}
      bg={backgroundColor}
      fontSize={fontSize}
      color={"nWhite"}
      fontWeight={fontBold ? "bold" : "normal"}
      _hover={{
        bg: hoverColor,
      }}
    >
      {label}
    </Button>
  );
};
