export function openSuggestionOverlay(whatsSuggested: string) {
  const scrollValue = window.scrollY;
  switch (whatsSuggested) {
    case "app":
      document.querySelector("#app-overlay")!.classList.remove("hidden");
      document.body.classList.add("no-scroll");
      document.body.style.top = `-${scrollValue}px`;
      break;

    case "best practice":
      document.querySelector("#best-practice-overlay")!.classList.remove("hidden");
      document.body.classList.add("no-scroll");
      document.body.style.top = `-${scrollValue}px`;
      break;

    default:
      throw new Error(`${whatsSuggested} is not a valid suggestion category`);
  }
}
