export abstract class Bird {
  abstract makeSound(): string;
}

export abstract class FlyingBird extends Bird {
  abstract fly(): string;
}

/**
 * Represents a Sparrow, which is a type of FlyingBird.
 */
export class Sparrow extends FlyingBird {
  fly() {
    return "Flying...";
  }

  makeSound() {
    return "Chirp chirp!";
  }
}

/**
 * Represents a Penguin, which is a type of Bird.
 */
export class Penguin extends Bird {
  makeSound() {
    return "Honk!";
  }
}
