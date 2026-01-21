// biome-ignore-start lint: All DOM objects accessed in this file
// are guaranteed to exist for the entirety of runtime (forms in modal view)
export function openSuggestionOverlay(whatsSuggested: string) {
  const scrollValue = window.scrollY;
  switch (whatsSuggested) {
    case "app":
      document.querySelector("#app-overlay")!.classList.remove("hidden");
      break;

    case "best practice":
      document.querySelector("#best-practice-overlay")!.classList.remove("hidden");
      break;

    case "benchmark result":
      document.querySelector("#benchmark-result-overlay")!.classList.remove("hidden");
      break;

    case "dao":
      document.querySelector("#dao-overlay")!.classList.remove("hidden");
      break;

    case "contract":
      document.querySelector("#contract-overlay")!.classList.remove("hidden");
      break;

    default:
      throw new Error(`${whatsSuggested} is not a valid suggestion category`);
  }

  document.body.classList.add("no-scroll");
  document.body.style.top = `-${scrollValue}px`;
}
// biome-ignore-end lint: see lines 1&2

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
