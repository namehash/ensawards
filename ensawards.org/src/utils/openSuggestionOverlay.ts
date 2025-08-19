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
