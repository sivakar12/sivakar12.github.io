export default function(title: string) {
  return title
    .toLowerCase()
    .replace(/\//g, '-')        // Replace forward slashes with hyphens
    .replace(/[^\w\s-]/g, '')   // Remove all non-word chars except spaces and hyphens
    .replace(/\s+/g, '-')       // Replace spaces with hyphens
    .replace(/--+/g, '-')       // Replace multiple hyphens with single hyphen
    .trim()                   // Trim hyphens from start and end
}