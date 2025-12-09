/**
 * Converts simple markdown to HTML.
 * Supports:
 * - links [text](url)
 * - inline code `code`
 * - unordered lists (- item)
 * - newlines as line breaks
 * Can be extended to support more markdown features as needed.
 */
export function markdownToHtml(markdown: string): string {
  let result = markdown;

  // First, process inline elements (code and links) before processing block elements

  // Convert inline code `code` to HTML <code> tags
  result = result.replace(
    /`([^`]+)`/g,
    '<code class="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 font-mono text-sm">$1</code>',
  );

  // Convert markdown links [text](url) to HTML <a> tags
  result = result.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-black underline underline-offset-[25%] decoration-black/40 hover:decoration-black transition-all duration-200" target="_blank" rel="noopener noreferrer">$1</a>',
  );

  // Now process block elements (lists and newlines)

  // Convert bullet points to HTML lists
  // Match sequences of lines starting with "- " (unordered list items)
  result = result.replace(/(?:^|\n)((?:- .+(?:\n|$))+)/g, (match, listContent) => {
    // Extract individual list items
    const items = listContent
      .split("\n")
      .filter((line: string) => line.trim().startsWith("- "))
      .map((line: string) => line.trim().substring(2).trim())
      .filter((item: string) => item.length > 0);

    // Build the <ul> with <li> items
    const listItems = items.map((item: string) => `<li class="ml-5">${item}</li>`).join("");

    return `\n<ul class="list-disc pl-5 space-y-1">${listItems}</ul>\n`;
  });

  // Convert remaining newlines to <br> tags
  // But avoid adding <br> right before or after <ul> tags
  result = result.replace(/\n(?!<ul|<\/ul>)/g, "<br>");

  // Clean up any <br> tags that appear right after </ul>
  result = result.replace(/<\/ul><br>/g, "</ul>");

  return result;
}
