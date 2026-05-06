export const removeHtmlTags = (html: string) =>
  html.replace(/<[^>]*>/g, '');

export const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const truncate = (text: string, length: number) =>
  text.length > length ? text.slice(0, length) + '...' : text;