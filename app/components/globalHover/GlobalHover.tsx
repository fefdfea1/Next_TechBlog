"use client";

import { headerHover } from "@/app/Logic/headerLogic/headerHover";
import { ReactNode } from "react";

type propsType = {
  children: ReactNode;
};

export default function GlobalHover(props: propsType) {
  return (
    <div onMouseMove={(event) => headerHover(event)}>{props.children}</div>
  );
}
