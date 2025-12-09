/**
 * Converts simple markdown to HTML.
 * Supports:
 * - links [text](url)
 * - inline code `code`
 * Can be extended to support more markdown features as needed.
 */
export function markdownToHtml(markdown: string): string {
  let result = markdown;

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

  return result;
}
