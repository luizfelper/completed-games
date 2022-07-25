import BoxStyle from "./style";

export default function Box({ children, ...props }: any) {
  return <BoxStyle>{children}</BoxStyle>;
}
