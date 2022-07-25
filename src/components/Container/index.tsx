import React from "react";
import { ContainerStyle } from "./styles";

export default function Container({ children }: any) {
  return <ContainerStyle>{children}</ContainerStyle>;
}
