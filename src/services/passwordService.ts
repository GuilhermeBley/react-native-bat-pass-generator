import { PasswordConfig } from "./PasswordConfig";

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