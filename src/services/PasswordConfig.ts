export class PasswordConfig {
  allowLetters: boolean;
  allowNumbers: boolean;
  allowSymbols: boolean;
  length: number;

  constructor(
    allowLetters: boolean = true,
    allowNumbers: boolean = true,
    allowSymbols: boolean = true,
    length: number = 8) {
    this.allowLetters = allowLetters;
    this.allowNumbers = allowNumbers;
    this.allowSymbols = allowSymbols;
    this.length = length;
  }

  getCharacters(): string {
    let allowedChars = '';

    if (allowedChars)
      allowedChars += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (this.allowSymbols)
      allowedChars += '+_)!@#%¨$%¨¨&*(^`:Ç^>|\\/?*';
    if (this.allowLetters)
      allowedChars += '1234567890';

    return allowedChars;
  }
}
