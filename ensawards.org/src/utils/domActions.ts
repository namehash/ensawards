export function openOverlay(overlayId: string) {
  const scrollValue = window.scrollY;
  const overlay = document.getElementById(overlayId);

  if (overlay === null) {
    throw new Error(`${overlayId} is not a valid overlay identifier`);
  }

  overlay.classList.remove("hidden");

  document.body.classList.add("no-scroll");
  document.body.style.top = `-${scrollValue}px`;
}

export const scrollWithOffset = (id: string, offset: number) => {
  const element = document.getElementById(id);
  if (!element) return;

  const y = element.getBoundingClientRect().top + window.scrollY - offset;

  scrollToY(y);
};

export const scrollToY = (topPosition: number) => {
  window.scrollTo({
    top: topPosition,
    behavior: "smooth",
  });
};
