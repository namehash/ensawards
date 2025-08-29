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

    default:
      throw new Error(`${whatsSuggested} is not a valid suggestion category`);
  }

  document.body.classList.add("no-scroll");
  document.body.style.top = `-${scrollValue}px`;
}

export const scrollWithOffset = (id: string, offset: number) => {
  const element = document.getElementById(id);
  if (!element) return;

  const y = element.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};
