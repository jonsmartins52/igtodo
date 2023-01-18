import { Text, View, TextInput, TouchableOpacity } from "react-native";
import SimpliLineIcons from "@expo/vector-icons/SimpleLineIcons";

import { useState } from "react";

import { styles } from "./styles";
import Tasks from "../../components/Tasks";
import { Todo } from "../../types/Todo";

export default function Home() {
  const [tasks, setTasks] = useState<Todo[]>([]);
  const [taskName, setTaskName] = useState("");

  function handleAddTask(description: string) {
    if (!description) return;

    const taskLength = tasks.length;

    for (let task of tasks) {
      if (task.id === taskLength + 1) return;
    }

    setTasks([...tasks, { id: taskLength + 1, description, done: false }]);
    setTaskName("");
  }

  function handleDeleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleToggleTask(id: number) {
    const taskToUpdate = tasks.find((task) => task.id === id);
    if (!taskToUpdate) return;

    taskToUpdate.done = !taskToUpdate.done;

    setTasks(
      tasks.map((task) => (task.id === taskToUpdate.id ? taskToUpdate : task))
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTaskName}
          value={taskName}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleAddTask(taskName)}
        >
          <Text>
            <SimpliLineIcons name="plus" size={16} color="#FFF" />
          </Text>
        </TouchableOpacity>
      </View>

      <Tasks
        todos={tasks}
        onDelete={handleDeleteTask}
        onToggle={handleToggleTask}
      />
    </View>
  );
}
