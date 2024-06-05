import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const AddTask = ({ onCloseModal }) => {
  const [taskName, setTaskName] = useState("");

  // handle input fields
  const handleInput = (enteredText) => {
    setTaskName(enteredText);
  };

  // handle add task
  const handleTask = () => {
    console.log(taskName);
  };
  return (
    <View>
      <Modal animationType="slide" style={styles.container}>
        <View style={styles.inputContainer}>
          <View>
            <TextInput
              placeholder="Task Name"
              style={styles.textInput}
              placeholderTextColor="#dddddd"
              onChangeText={handleInput}
              value={taskName}
            />
          </View>
          <View style={styles.buttonContainer}>
            <View style={[styles.cancelBtn, styles.addBtn]}>
              <Button title="Add Task" onPress={handleTask} color="#40A578" />
            </View>
            <View style={styles.cancelBtn}>
              <Button title="Cancel" onPress={onCloseModal} color="#FF5D5D" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222222",
  },
  textInput: {
    width: 310,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderColor: "#dddddd",
    borderWidth: 2,
    marginBottom: 8,
    color: "#ffffff",
    fontSize: 18,
    borderRadius: 8,
    shadowColor: "#dddddd",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 1,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    columnGap: 12,
  },
  addBtn: {
    backgroundColor: "#40A578",
  },
  cancelBtn: {
    width: "30%",
    fontSize: 16,
    fontWeight: "600",
  },
});
