import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';
import { PasswordConfig } from '../../services/PasswordConfig'

interface ConfigModalProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  onValidSubmit: (newConfig: PasswordConfig) => void;
}

const ConfigModal: React.FC<ConfigModalProps> = ({
  modalVisible,
  setModalVisible,
  onValidSubmit}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Configurações da senha</Text>
          <Button
            title="Salvar alterações"
            onPress={() => setModalVisible(false)}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ConfigModal;
