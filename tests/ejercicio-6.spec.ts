import { describe, it, expect } from "vitest";
import { Sparrow, Penguin } from "../src/ejercicio-6/bird";

describe("Bird classes", () => {
  it("Sparrow should make sound and fly", () => {
    const sparrow = new Sparrow();
    expect(sparrow.makeSound()).toBe("Chirp chirp!");
    expect(sparrow.fly()).toEqual("Flying...");
  });

  it("Penguin should make sound", () => {
    const penguin = new Penguin();
    expect(penguin.makeSound()).toEqual("Honk!");
  });
});
