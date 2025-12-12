// Generate URL-friendly slug from machine name
export function generateMachineSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

// Parse machine slug to find machine by matching
export function findMachineBySlug(machines: { id: number; name: string }[], slug: string): { id: number; name: string } | undefined {
  return machines.find(m => generateMachineSlug(m.name) === slug);
}
