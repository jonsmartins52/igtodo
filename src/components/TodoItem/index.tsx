import { View, Text, TouchableOpacity } from "react-native";
import Feater from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Todo } from "../../types/Todo";
import { styles } from "./styles";

interface TodoItemProps {
  todo: Todo;
  onDelete: () => void;
  onToggle: () => void;
}

export default function TodoItem({ todo, onDelete, onToggle }: TodoItemProps) {
  return (
    <View style={styles.container}>
      {todo.done ? (
        <TouchableOpacity onPress={onToggle}>
          <Ionicons name="checkmark-circle" size={24} color="#8284FA" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.unchecked} onPress={onToggle} />
      )}

      {todo.done ? (
        <Text style={styles.textDone}>{todo.description}</Text>
      ) : (
        <Text style={styles.description}>{todo.description}</Text>
      )}

      <TouchableOpacity style={styles.iconContainer} onPress={onDelete}>
        <Feater name="trash-2" size={20} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
