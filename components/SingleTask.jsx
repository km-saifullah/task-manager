import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SingleTask = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.taskName}>{name}</Text>
    </View>
  );
};

export default SingleTask;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    width: "100%",
    marginVertical: 16,
    paddingHorizontal: 12,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 16,
  },
  taskName: {
    fontSize: 18,
    fontWeight: "500",
    textTransform: "capitalize",
    color: "#181818",
  },
});
