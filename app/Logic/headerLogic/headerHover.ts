export function headerHover(
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) {
  try {
    const DevCategory = document.querySelector(
      ".DevCategory"
    ) as HTMLDivElement;
    const DevOpsCategory = document.querySelector(
      ".DevOpsCategory"
    ) as HTMLDivElement;
    const DevSpan = document.querySelector(".Dev") as HTMLSpanElement;
    const DevOpsSpan = document.querySelector(".DevOps") as HTMLSpanElement;
    const target = event.target as HTMLElement;
    if (DevSpan.contains(target)) {
      DevCategory.classList.add("active");
      DevOpsCategory.classList.remove("active");
    } else if (DevOpsSpan.contains(target)) {
      DevOpsCategory.classList.add("active");
      DevCategory.classList.remove("active");
    } else {
      DevCategory.classList.remove("active");
      DevOpsCategory.classList.remove("active");
    }
  } catch (error) {
    return error;
  }
}
