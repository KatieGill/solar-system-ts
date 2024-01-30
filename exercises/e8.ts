// SPACE DATA EXERCISE 8
// Return a Planet by a given moon name
import { Planet } from "../data/types";

//  must have destructured parameters
export function findPlanetByMoon({
  planets,
  moonName,
}: {
  planets: Planet[];
  moonName: string;
}) {
  return planets.find((planet) => {
    if (planet.moons) {
      const moonArray = planet.moons.map((moon) => moon.toLowerCase());
      return moonArray.includes(moonName.toLowerCase());
    }
  });
}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
