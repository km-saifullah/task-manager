import { StyleSheet, Text, View } from "react-native";

const SingleTask = ({ name, createdAt, priority, children }) => {
  const getBorderColor = (value) => {
    switch (value) {
      case "High":
        return "red";
      case "Medium":
        return "orange";
      case "Low":
        return "blue";
      default:
        return "transparent";
    }
  };
  const borderColor = getBorderColor(priority);
  console.log(priority, borderColor);
  return (
    <>
      {!name ? null : (
        <View style={[styles.container, { borderLeftColor: borderColor }]}>
          <View>
            <View>
              <Text style={styles.taskName}>{name}</Text>
            </View>
            <View>
              <Text style={styles.createdAt}>🗓️ {createdAt}</Text>
            </View>
            {children}
          </View>
        </View>
      )}
    </>
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
    borderLeftColor: "#000",
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
    textAlign: "center",
  },
  createdAt: {
    color: "blue",
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 5,
  },
  priority: {
    color: "red",
  },
  deleteBtn: {
    marginTop: 6,
  },
});
