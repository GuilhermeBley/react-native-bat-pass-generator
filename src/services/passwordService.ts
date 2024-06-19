class PasswordConfig {
  allowLetters: boolean;
  allowNumbers: boolean;
  allowSymbols: boolean;

  constructor(
    allowLetters: boolean = true,
    allowNumbers: boolean = true,
    allowSymbols: boolean = true) {
      this.allowLetters = allowLetters;
      this.allowNumbers = allowNumbers;
      this.allowSymbols = allowSymbols;
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

export default function generatePass(passwordConfig: PasswordConfig | null = null) {
  if (passwordConfig == null)
    passwordConfig = new PasswordConfig()

  let password: string = ''
  let characters:string = passwordConfig.getCharacters()
  let passwordLength = 8

  for(let index = 0; index < passwordLength; index++){
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    )
  }

  return password
}