// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
import { AllData } from "../data/types";

// Return example: 42
export const allPlanetsMoonsCount = (data: AllData) => {
  return data.planets.reduce(
    (moonsSum, planet) =>
      (moonsSum += planet.moonsCount ? planet.moonsCount : 0),
    0
  );
};
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
