import { tailwindRunner } from "./runner";

// const scenarios = [0, 2, 4, 8];

tailwindRunner("Border - Divide Width", [
  ["divide-x-2", { styles: {} }],
  // ...expectError(scenarios.map((n) => `divide-x-${n}`)),
  // ...expectError(scenarios.map((n) => `divide-y-${n}`)),
  // ...expectError(["divide-x-reverse", "divide-y-reverse"]),
]);
