function mouseoverLogic(event: MouseEvent) {
  const target = event.target as HTMLElement;
  const DevCategory = document.querySelector(".DevCategory");
  const DevOpsCategory = document.querySelector(".DevOpsCategory");
  if (target.classList.contains("Dev")) {
    DevCategory?.classList.add("activeDev");
    DevOpsCategory?.classList.remove("activeDevOps");
  } else if (target.classList.contains("DevOps")) {
    DevOpsCategory?.classList.add("activeDevOps");
    DevCategory?.classList.remove("activeDev");
  }
  console.log(!target.closest(".Dev"));
  if (!target.closest(".Dev")) {
    DevCategory?.classList.remove(".activeDevOps");
    DevOpsCategory?.classList.remove(".activeDev");
  }
}

export function headerHover() {
  document.body.addEventListener("mouseover", mouseoverLogic);
}

export function removeHover() {
  document.body.removeEventListener("mouseover", mouseoverLogic);
}
