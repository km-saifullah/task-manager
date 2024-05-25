import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";
import DatePicker from "react-native-modern-datepicker";

const AddTask = ({ onCloseModal }) => {
  const [modalOpen, setMoadlOpen] = useState(false);
  const [date, setDate] = useState("");

  // handle modal
  const handleModal = () => {
    setMoadlOpen(!modalOpen);
  };

  // handle date
  const handleDate = (propDate) => {
    setDate(propDate);
    console.log(date);
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
            />
          </View>
          <View>
            <Button title="Select Date" onPress={handleModal} />
            {modalOpen && (
              <Modal animationType="slide">
                <View style={styles.dateWrapper}>
                  <View style={styles.dateContainer}>
                    <DatePicker
                      mode="calendar"
                      selected={date}
                      onDateChange={handleDate}
                      options={{
                        backgroundColor: "#090C08",
                        textHeaderColor: "#FFA25B",
                        textDefaultColor: "#F6E7C1",
                        selectedTextColor: "#fff",
                        mainColor: "#F4722B",
                        textSecondaryColor: "#D6C7A1",
                        borderColor: "rgba(122, 146, 165, 0.1)",
                        borderRadius: 8,
                      }}
                    />
                    <Button title="close" onPress={handleModal} />
                  </View>
                </View>
              </Modal>
            )}
          </View>
          <View style={styles.cancelBtn}>
            <Button title="Cancel" onPress={onCloseModal} color="#FF5D5D" />
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
  dateWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dateContainer: {
    width: "60%",
    height: 200,
    borderTopRightRadius: 8,
  },
  cancelBtn: {
    width: "50%",
    fontSize: 16,
    fontWeight: "600",
  },
});
