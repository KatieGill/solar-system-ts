// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy
import { Asteroid } from "../data/types";
import { maxBy } from "./e17";

export function getGreatestDiscoveryYear(asteroids: Asteroid[]) {
  const asteroidDiscoveriesMap = new Map<number, number>();
  asteroids.forEach((asteroid) => {
    let count = asteroids.filter(
      (obj) => obj.discoveryYear === asteroid.discoveryYear
    ).length;
    asteroidDiscoveriesMap.set(asteroid.discoveryYear, count);
  });
  const greatestDiscoveryYear = maxBy(
    [...asteroidDiscoveriesMap],
    (entry) => entry[1]
  );
  if (greatestDiscoveryYear) return greatestDiscoveryYear[0];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
