import { View, Text, TouchableOpacity } from "react-native";
import Feater from "@expo/vector-icons/Feather";

import { Todo } from "../../types/Todo";
import { styles } from "./styles";
import { useState } from "react";

export default function TodoItem() {
  const [task, setTask] = useState<Todo>({
    id: 0,
    description: "",
    done: false,
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.unchecked} />

      <Text style={styles.description}>Coletar 7 Frost Crystals</Text>

      <TouchableOpacity style={styles.iconContainer}>
        <Feater name="trash-2" size={20} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
