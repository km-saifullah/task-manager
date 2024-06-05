import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const EditButton = ({ id, handleEditTask }) => {
  return (
    <Button
      title="Edit Task"
      onPress={() => handleEditTask(id)}
      color="#3AA6B9"
    />
  );
};

export default EditButton;

const styles = StyleSheet.create({});
