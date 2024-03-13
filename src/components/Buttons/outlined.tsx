import {
  Button,
  ButtonProps,
  ButtonPropsVariantOverrides,
  SvgIconProps,
} from "@mui/material";

import { styled } from "@mui/material/styles";

import "./index.scss";
import { CSSProperties } from "react";

type Props = {
  text: string;
  Icon?: string;
  style?: CSSProperties;
  variant: "contained" | "outlined" | "text";
  type: "button" | "submit";
};

// const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
//   textTransform: "capitalize",
//   height: "40px",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-start",
// }));
const ButtonOutlined = (props: Props) => {
  const { text, Icon, style, variant, type = "submit" } = props;
  console.log(variant);
  return (
    <Button
      variant={variant}
      style={style}
      className="button"
      startIcon={Icon ? <img src={Icon} className="icon-button-img" /> : null}
      type={type}
    >
      {text}
    </Button>
  );
};

export default ButtonOutlined;
