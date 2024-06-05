import React, { useState } from "react";
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import AddTask from "./components/AddTask";
import SingleTask from "./components/SingleTask";
import DeleteButton from "./components/DeleteButton";
import EditButton from "./components/EditButton";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [taskName, setTaskName] = useState([]);
  const [priorityValue, setPriorityValue] = useState("");
  const [editTask, setEditTask] = useState(null);

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
    // if (enteredText == "") {
    //   console.warn("Enter the task name");
    // } else {
    //   setTaskName((currentTask) => [
    //     ...taskName,
    //     {
    //       id: Math.random().toString(),
    //       name: enteredText,
    //       priority: priorityValue,
    //       createdAt: new Date()
    //         .toLocaleString("en-BD", {
    //           year: "numeric",
    //           month: "2-digit",
    //           day: "2-digit",
    //           hour: "2-digit",
    //           minute: "2-digit",
    //         })
    //         .replace(",", ""),
    //     },
    //   ]);
    //   setOpenModal(false);
    // }

    if (enteredText == "") {
      console.warn("Enter the task name");
    } else {
      if (editTask) {
        setTaskName((currentTask) =>
          currentTask.map((task) =>
            task.id === editTask.id
              ? { ...task, name: enteredText, priority: priorityValue }
              : task
          )
        );
        setEditTask(null); // Clear the editTask state after editing
      } else {
        setTaskName((currentTask) => [
          ...taskName,
          {
            id: Math.random().toString(),
            name: enteredText,
            priority: priorityValue,
            createdAt: new Date()
              .toLocaleString("en-BD", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              })
              .replace(",", ""),
          },
        ]);
      }
      setOpenModal(false);
    }
  };

  // handle edit task
  const handleEditTask = (id) => {
    const taskToEdit = taskName.find((task) => task.id === id);
    setEditTask(taskToEdit);
    setPriorityValue(taskToEdit.priority);
    setOpenModal(true);
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
          setPriorityValue={setPriorityValue}
          editTask={editTask}
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
                priority={task.item.priority}
              >
                <View style={styles.btn}>
                  <DeleteButton
                    id={task.item.id}
                    handleDeleteTask={handleDeleteTask}
                  />
                  <EditButton
                    id={task.item.id}
                    handleEditTask={handleEditTask}
                  />
                </View>
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
  btn: {
    flexDirection: "row",
    gap: 12,
    marginTop: 10,
  },
});
