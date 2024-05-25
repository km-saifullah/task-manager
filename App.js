import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
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
      <Text style={styles.heading}>Task Manager</Text>
      <View style={styles.imgContainer}>
        <Image
          source={require("./assets/taskManagerLogo.png")}
          style={styles.logoImg}
        />
      </View>
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
  imgContainer: {
    alignItems: "center",
    marginBottom: 12,
  },
  logoImg: {
    width: 100,
    height: 100,
    alignItems: "center",
  },
  heading: {
    color: "#dddddd",
    fontSize: 32,
    textAlign: "center",
    marginVertical: 20,
  },
});
