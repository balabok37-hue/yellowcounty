import type { Machine } from '@/components/MachineCard';

// Generate URL-friendly slug from machine name with ID for uniqueness
export function generateMachineSlug(machine: Machine): string {
  const nameSlug = machine.name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
  return `${nameSlug}-${machine.id}`;
}

// Parse machine slug to find machine by matching (extracts ID from end)
export function findMachineBySlug(machines: Machine[], slug: string): Machine | undefined {
  // Try to extract ID from end of slug (format: name-slug-ID)
  const idMatch = slug.match(/-(\d+)$/);
  if (idMatch) {
    const id = parseInt(idMatch[1], 10);
    return machines.find(m => m.id === id);
  }
  // Fallback: try to match by name slug (for backward compatibility)
  return machines.find(m => {
    const nameSlug = m.name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
    return nameSlug === slug;
  });
}
