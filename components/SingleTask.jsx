import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SingleTask = ({ name, createdAt }) => {
  return (
    <View style={[styles.container, { borderLeftColor: "red" }]}>
      <View>
        <View>
          <Text style={styles.taskName}>{name}</Text>
        </View>
        <View>
          <Text>Created At: {createdAt}</Text>
        </View>
      </View>
    </View>
  );
};

export default SingleTask;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    width: "100%",
    marginVertical: 8,
    paddingHorizontal: 12,
    paddingVertical: 14,
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
  },
});
