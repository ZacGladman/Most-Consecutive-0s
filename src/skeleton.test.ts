import mostConsecutiveZeroes from "./skeleton";

test("Filters out consecutive non-zero values", () => {
  expect(mostConsecutiveZeroes(100000999954200490909080000020000000000000000000000200000)).toBe(22);
  expect(mostConsecutiveZeroes(1111011111001)).toBe(2)
  });

test("Works with only one zero", () => {
  expect(mostConsecutiveZeroes(9876543210)).toBe(1)
});

test("Works with only one character", () => {
  expect(mostConsecutiveZeroes(0)).toBe(1)
});

