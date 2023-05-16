export const PLANET_ORBITAL_PERIODS: Record<string, number> = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

export const EARTH_YEAR_IN_SECONDS = 31557600;

export type Planet = keyof typeof PLANET_ORBITAL_PERIODS;

function roundToDigits(value: number, significantFigures: number): number {
  return parseFloat(value.toFixed(significantFigures));
}

export function age(planet: Planet, seconds: number): number {
  const years =
    seconds / (EARTH_YEAR_IN_SECONDS * PLANET_ORBITAL_PERIODS[planet]);
  return roundToDigits(years, 2);
}
