export class Anagram {
  #input: string;

  constructor(input: string) {
    this.#input = input.toLowerCase();
  }

  public matches(...potentials: string[]): string[] {
    const sortedInput = Anagram.sortedString(this.#input);

    console.log(sortedInput, potentials);

    return potentials
      .map((x) => x.toLowerCase())
      .filter((x) => x.toLowerCase() !== this.#input.toLowerCase())
      .filter((x) => x.length === this.#input.length)
      .filter((x) => sortedInput === Anagram.sortedString(x));
  }

  private static sortedString(input: string): string {
    return input.toLowerCase().split("").sort().join("");
  }
}
