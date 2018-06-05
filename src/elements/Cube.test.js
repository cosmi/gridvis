import Cube from "./Cube";

it('calculates Cube volume correctly', () => {
  const c = new Cube([0,0,0.5], [1,0.5,1]);
  expect(c.volume).toEqual(0.25);
});

it('will assert cube dimensions', () => {
  expect(() => new Cube([0,0,0.5], [1,0.5])).toThrow();
});

it('will assert cube dimensions are nonempty arrays', () => {
  expect(() => new Cube([0,0,0.5], "a")).toThrow();
  expect(() => new Cube("a", [0,0,0.5])).toThrow();
  expect(() => new Cube([], [])).toThrow();
});
