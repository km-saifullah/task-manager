import { Button, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import AddTask from "./components/AddTask";

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  // close modal
  const onCloseModal = () => {
    setOpenModal(false);
  };

  // handle add task
  const handleAddTask = () => {
    setOpenModal(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View>
        <Button title="Add Task" onPress={handleAddTask} color="#663399" />
      </View>
      {openModal && <AddTask onCloseModal={onCloseModal} />}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 65,
  },
});
