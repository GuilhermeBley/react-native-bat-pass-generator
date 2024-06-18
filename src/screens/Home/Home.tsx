import React, {useState} from "react";
import {Text, View} from "react-native";
import { StatusBar } from 'expo-status-bar';

import styles from './Style';
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";
import { BatButton } from '../../components/BatButton/BatButton'
import ConfigModal from '../../components/ConfigModal'


export default function Home() {

  const [modalVisible, setModalVisible] = useState(false);

  return(
    <View style={styles.appContainer}>

      <View style={styles.logoContainer}>
        <BatLogo/>
      </View>

      <View style={styles.logoContainer}>
        <ConfigModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}>
        </ConfigModal>
      </View>

      <View style={styles.inputContainer}>
        <BatButton/>
      </View>


      <StatusBar style="light" />
    </View>
  )
}


