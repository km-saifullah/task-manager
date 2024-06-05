import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const SingleTask = ({ name, createdAt, children }) => {
  return (
    <View style={[styles.container, { borderLeftColor: "red" }]}>
      <View>
        <View>
          <Text style={styles.taskName}>{name}</Text>
        </View>
        <View>
          <Text style={styles.createdAt}>Created At: {createdAt}</Text>
        </View>
        {children}
      </View>
    </View>
  );
};

export default SingleTask;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    width: "100%",
    marginVertical: 6,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 8,
    borderRightColor: "transparent",
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
  },
  taskName: {
    fontSize: 18,
    fontWeight: "500",
    textTransform: "capitalize",
    color: "#181818",
    marginBottom: 3,
  },
  createdAt: {
    color: "blue",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 3,
  },
  deleteBtn: {
    marginTop: 6,
  },
});
