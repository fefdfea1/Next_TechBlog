export function sidebarActive(
  event: React.MouseEvent<HTMLElement, MouseEvent>
) {
  const target = event.target as HTMLElement;
  const targetLi = target.closest(".sideActiveItem") as HTMLLIElement;
  if (
    target.closest(".sideActiveItem") &&
    !targetLi.classList.contains("active")
  ) {
    targetLi.classList.add("active");
  } else if (
    target.closest(".sideActiveItem") &&
    targetLi.classList.contains("active")
  ) {
    targetLi.classList.remove("active");
  }
}
