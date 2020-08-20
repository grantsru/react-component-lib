module.exports = {
  roots: ["src"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  testPathIgnorePatterns: ["node_modules/"],
  transform: { "^.+\\.ts|.tsx?$": "ts-jest" },
  testMatch: ["**/*.test.(ts|tsx)"],
};
