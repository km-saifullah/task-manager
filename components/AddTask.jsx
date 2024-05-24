import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const AddTask = ({ onCloseModal }) => {
  return (
    <View style={styles.container}>
      <Modal animationType="slide" style={styles.container}>
        <View style={styles.inputContainer}>
          <View>
            <TextInput placeholder="Task Name" />
          </View>
          <View>
            <Button title="Cancel" onPress={onCloseModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222222",
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
