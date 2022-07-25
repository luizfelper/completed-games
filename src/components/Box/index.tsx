import { BoxStyle, BoxStyleTitle } from "./style";

export default function Box({ children, ...props }: any) {
  return (
    <BoxStyle>
      <BoxStyleTitle>{props.title}</BoxStyleTitle>
      <span>{children}</span>
    </BoxStyle>
  );
}
