import { Dispatch, RefObject, SetStateAction } from "react";

export function headerOver(
  event: React.MouseEvent<HTMLElement, MouseEvent>,
  setDevModal: Dispatch<SetStateAction<boolean>>,
  steDevOpsState: Dispatch<SetStateAction<boolean>>,
  DevRef: RefObject<HTMLSpanElement>,
  DevOps: RefObject<HTMLSpanElement>
) {
  const target = event.target as HTMLElement;
  if (DevRef.current && DevRef.current) {
    setDevModal(true);
  } else if (target.closest(".DevOps")) {
    steDevOpsState(true);
  }
}
