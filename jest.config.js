/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  preset: "ts-jest/presets/js-with-ts-esm",
  testEnvironment: "node",
  maxWorkers: 1,
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
};
