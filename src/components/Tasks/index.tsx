import { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";

import { Todo } from "../../types/Todo";
import EmptyList from "../EmptyList";
import TodoItem from "../TodoItem";
import { styles } from "./styles";

interface TaskProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

interface HeaderProps {
  tasksCreated: number;
  tasksDone: number;
}

export default function Tasks({ todos, onDelete, onToggle }: TaskProps) {
  const [headerStats, setHeaderStats] = useState<HeaderProps>({
    tasksCreated: 0,
    tasksDone: 0,
  });

  useEffect(() => {
    const data = {
      tasksCreated: todos.length,
      tasksDone: todos.filter((todo) => todo.done).length,
    };
    setHeaderStats(data);
  }, [todos]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerText, { color: "#4EA8DE" }]}>
          Criadas {headerStats.tasksCreated}
        </Text>
        <Text style={[styles.headerText, { color: "#8284FA" }]}>
          Concluídas {headerStats.tasksDone}
        </Text>
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onDelete={() => onDelete(item.id)}
            onToggle={() => onToggle(item.id)}
          />
        )}
        ListEmptyComponent={() => <EmptyList />}
      />
    </View>
  );
}
