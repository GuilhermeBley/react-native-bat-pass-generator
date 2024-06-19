class PasswordConfig {
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

export default function generatePass(passwordConfig: PasswordConfig | null = null) : string {
  if (passwordConfig == null)
    passwordConfig = new PasswordConfig()

  let password: string = ''
  let characters:string = passwordConfig.getCharacters()
  let passwordLength = passwordConfig.length

  for(let index = 0; index < passwordLength; index++){
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    )
  }

  return password
}