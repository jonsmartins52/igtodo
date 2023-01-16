import { View, Text, TouchableOpacity } from "react-native";
import Feater from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Todo } from "../../types/Todo";
import { styles } from "./styles";
import { useState } from "react";

interface TodoItemProps {
  todo: Todo;
  onDelete: () => void;
}

export default function TodoItem({ todo, onDelete }: TodoItemProps) {
  const [task, setTask] = useState<Todo>({
    id: 0,
    description: "",
    done: false,
  });

  return (
    <View style={styles.container}>
      {task.done ? (
        <TouchableOpacity>
          <Ionicons name="checkmark-circle" size={24} color="#8284FA" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.unchecked} />
      )}

      <Text style={styles.description}>{todo.description}</Text>

      <TouchableOpacity style={styles.iconContainer} onPress={onDelete}>
        <Feater name="trash-2" size={20} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
