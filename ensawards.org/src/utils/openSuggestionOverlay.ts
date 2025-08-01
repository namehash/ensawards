export function openSuggestionOverlay(whatsSuggested: string) {
    switch (whatsSuggested) {
        case "app":
            alert("Opening App suggestion!");
            break;

        case "best practice":
            alert("Opening Best practice suggestion!");
            break;

        default:
            throw new Error(`${whatsSuggested} is not a valid suggestion category`)
    }
}