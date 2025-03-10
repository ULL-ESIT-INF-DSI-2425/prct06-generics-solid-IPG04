export abstract class Bird {
  abstract makeSound(): string;
}

export abstract class FlyingBird extends Bird {
  abstract fly(): string;
}

export class Sparrow extends FlyingBird {
  fly() {
    return "Flying...";
  }

  makeSound() {
    return "Chirp chirp!";
  }
}

export class Penguin extends Bird {
  makeSound() {
    return "Honk!";
  }
}
