import { BoxStyle, BoxStyleTitle } from "./styles";

export default function Box({ children, ...props }: any) {
  return (
    <BoxStyle>
      <BoxStyleTitle>{props.title}</BoxStyleTitle>
      <p>{children}</p>
    </BoxStyle>
  );
}
