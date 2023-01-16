import { View, Text, FlatList } from "react-native";
import EmptyList from "../EmptyList";
import TodoItem from "../TodoItem";
import { styles } from "./styles";

export default function Tasks() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.createText}>Criadas 0</Text>
        <Text style={styles.doneText}>Concluídas 0</Text>
      </View>

      <TodoItem />
    </View>
  );
}
