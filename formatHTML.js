// formatHTML.js
export default function formatHTML(html) {
  // basic safe formatter - splits tags and indents simply
  let formatted = "";
  let indent = 0;

  // split on boundaries between tags like: ">   <"
  const parts = html.split(/>\s*</);

  parts.forEach((raw, idx) => {
    let element = raw;

    // restore the angle brackets that were removed by split
    if (idx === 0) {
      // first item may start with '<'
      // nothing to change
    }

    // detect closing tag
    const isClosing = element.startsWith("/");
    // detect self-closing pattern (ends with /) OR void tags like meta, img, br, link
    const trimmed = element.trim();
    const isSelfClosingBySlash = trimmed.endsWith("/");
    const voidTagMatch = trimmed.match(/^(meta|img|br|hr|input|link|area|base|col|command|embed|keygen|param|source|track|wbr)\b/i);
    const isCommentOrDoctype = /^!/.test(trimmed); // e.g. !DOCTYPE or !-- comment

    if (isClosing) {
      indent = Math.max(indent - 2, 0);
    }

    formatted += " ".repeat(indent) + "<" + element + ">\n";

    if (!isClosing && !isSelfClosingBySlash && !voidTagMatch && !isCommentOrDoctype) {
      indent += 2;
    }
  });

  return formatted.trim();
}
