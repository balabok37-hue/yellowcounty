import { allMachines } from '@/data/machines';

const normalize = (s: string) => s.toLowerCase().replace(/\s+/g, ' ').trim();

export function getStaticGalleryForMachine(machineName: string, year?: number): string[] {
  const name = normalize(machineName);

  // Exact match first
  const exact = allMachines.find(m => normalize(m.name) === name);
  if (exact) return exact.gallery?.length ? exact.gallery : [exact.image];

  // Try matching by year + model tokens
  const tokens = name.split(' ').filter(Boolean);
  const maybeYear = tokens[0];

  const targetYear = typeof year === 'number' ? String(year) : (maybeYear.match(/^\d{4}$/) ? maybeYear : undefined);
  const withoutYear = targetYear ? tokens.slice(1).join(' ') : tokens.join(' ');

  const fuzzy = allMachines.find(m => {
    const mn = normalize(m.name);
    const mTokens = mn.split(' ').filter(Boolean);
    const mYear = mTokens[0]?.match(/^\d{4}$/) ? mTokens[0] : undefined;
    const mWithoutYear = mYear ? mTokens.slice(1).join(' ') : mn;

    if (targetYear && mYear && targetYear !== mYear) return false;

    // Basic containment both ways
    return mWithoutYear.includes(withoutYear) || withoutYear.includes(mWithoutYear);
  });

  if (fuzzy) return fuzzy.gallery?.length ? fuzzy.gallery : [fuzzy.image];

  return [];
}
