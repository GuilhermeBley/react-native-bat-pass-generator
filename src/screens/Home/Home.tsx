import React, {useState} from "react";
import {Text, View} from "react-native";
import { StatusBar } from 'expo-status-bar';

import styles from './Style';
import { BatLogo } from "../../components/BatLogo/BatLogo";
import BatButton from '../../components/BatButton/BatButton'
import ConfigModal from '../../components/ConfigModal'
import { PasswordConfig } from "../../services/PasswordConfig";


export default function Home() {

  const [modalVisible, setModalVisible] = useState(false);
  const [passwordConfig, onPasswordConfigChange] = useState(new PasswordConfig());

  return(
    <View style={styles.appContainer}>

      <View style={styles.logoContainer}>
        <BatLogo/>
      </View>

      <View style={styles.logoContainer}>
        <ConfigModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          onValidSubmit={onPasswordConfigChange}>
        </ConfigModal>
      </View>

      <View style={styles.inputContainer}>
        <BatButton passwordConfig={passwordConfig} >
        </BatButton>
      </View>


      <StatusBar style="light" />
    </View>
  )
}


