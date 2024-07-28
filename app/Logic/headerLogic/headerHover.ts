export function headerHover() {
  document.body.addEventListener("mouseover", (event) => {
    const target = event.target as HTMLElement;
    const modal = document.querySelector(".modal");
    if (target.classList.contains("modalActiveItem")) {
      modal?.classList.add("active");
    } else if (!target.closest(".header")) {
      modal?.classList.remove("active");
    }
  });
}
