import { Button } from "react-native";

const DeleteButton = ({ id, handleDeleteTask }) => {
  return (
    <Button
      title="Delete"
      onPress={() => handleDeleteTask(id)}
      color="#A91D3A"
    />
  );
};

export default DeleteButton;
