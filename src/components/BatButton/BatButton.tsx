import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import generatePass from '../../services/passwordService';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import * as Clipboard from 'expo-clipboard';
import { styles } from './BatButtonStyles';
import { PasswordConfig } from "../../services/PasswordConfig";

interface BatButtonProps{
  passwordConfig: PasswordConfig | null
}

const BatButton: React.FC<BatButtonProps> = ({ passwordConfig }) => {
  const [pass, setPass] = useState('');

  function handleGenerateButton() {
    let generateToken = generatePass(passwordConfig);
    setPass(generateToken);
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass);
  }

  return (
    <>
      <BatTextInput pass={pass} />

      <Pressable
        onPress={handleGenerateButton}
        style={styles.button}
      >
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>

      <Pressable
        onPress={handleCopyButton}
        style={styles.button}
      >
        <Text style={styles.text}>⚡ COPY</Text>
      </Pressable>

    </>
  );
}

export default BatButton;