export function toSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[\/&]/g, '-')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}
