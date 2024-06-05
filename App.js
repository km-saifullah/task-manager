import React, { useState } from "react";
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import AddTask from "./components/AddTask";
import SingleTask from "./components/SingleTask";
import DeleteButton from "./components/DeleteButton";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [taskName, setTaskName] = useState([]);

  // close modal
  const onCloseModal = () => {
    setOpenModal(false);
  };

  // handle add task
  const handleAddTask = () => {
    setOpenModal(true);
  };

  // handle add task
  const handleTask = (enteredText) => {
    if (enteredText == "") {
      console.warn("Enter the task name");
    } else {
      setTaskName((currentTask) => [
        ...taskName,
        {
          name: enteredText,
          createdAt: new Date()
            .toLocaleString("en-GB", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            })
            .replace(",", ""),
          id: Math.random().toString(),
        },
      ]);
      setOpenModal(false);
    }
  };

  // handle delete a task
  const handleDeleteTask = (id) => {
    setTaskName(taskName.filter((task) => task.id !== id));
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
      {openModal && (
        <AddTask
          onCloseModal={onCloseModal}
          setOpenModal={setOpenModal}
          setTaskName={setTaskName}
          handleTask={handleTask}
          handleDeleteTask={handleDeleteTask}
        />
      )}

      <View style={styles.taskList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={taskName}
          renderItem={(task) => {
            return (
              <SingleTask
                name={task.item.name}
                createdAt={task.item.createdAt}
                id={task.item.id}
              >
                <DeleteButton
                  id={task.item.id}
                  handleDeleteTask={handleDeleteTask}
                />
              </SingleTask>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
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
  taskList: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
