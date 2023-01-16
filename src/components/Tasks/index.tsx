import { useState } from "react";
import { View, Text, FlatList } from "react-native";

import { Todo } from "../../types/Todo";
import EmptyList from "../EmptyList";
import TodoItem from "../TodoItem";
import { styles } from "./styles";

interface TaskProps {
  todos: Todo[];
  onDelete: (id: number) => void;
}

export default function Tasks({ todos, onDelete }: TaskProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerText, { color: "#4EA8DE" }]}>Criadas 0</Text>
        <Text style={[styles.headerText, { color: "#8284FA" }]}>
          Concluídas 0
        </Text>
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TodoItem todo={item} onDelete={() => onDelete(item.id)} />
        )}
        ListEmptyComponent={() => <EmptyList />}
      />
    </View>
  );
}
