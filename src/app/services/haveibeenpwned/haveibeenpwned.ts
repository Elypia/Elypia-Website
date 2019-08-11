export class PwnedPassword {

  hash: string;
  occurences: number;

  constructor(req: string, pwned: string) {
    const split: string[] = pwned.split(':');
    this.hash = req + split[0];
    this.occurences = Number(split[1]);
  }
}
