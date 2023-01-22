import { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import SimpliLineIcons from "@expo/vector-icons/SimpleLineIcons";
import uuid from "react-native-uuid";

import { styles } from "./styles";
import Tasks from "../../components/Tasks";
import { Todo } from "../../types/Todo";
import Logo from "../../components/Logo";
import storage from "../../services/storage";

export default function Home() {
  const [tasks, setTasks] = useState<Todo[]>([]);
  const [taskName, setTaskName] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    storage.getTasks().then((response) => {
      if (!response) return;
      setTasks(response);
    });
  }, []);

  async function handleAddTask(description: string) {
    if (!description) {
      Alert.alert("Tarefa vazia.", "A tarefa não pode estar vazia.");
      return;
    }

    const newTasks = [
      ...tasks,
      { id: uuid.v4() as string, description, done: false },
    ];
    setTasks(newTasks);
    setTaskName("");

    await storage.storeTask(newTasks);
  }

  function handleDeleteTask(id: string) {
    Alert.alert("Excluir tarefa", "Deseja excluir tarefa?", [
      {
        text: "Sim",
        onPress: () => removeTask(id),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  async function removeTask(id: string) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    storage.storeTask(newTasks);
  }

  async function handleToggleTask(id: string) {
    const taskToUpdate = tasks.find((task) => task.id === id);
    if (!taskToUpdate) return;

    taskToUpdate.done = !taskToUpdate.done;
    const newTasks = tasks.map((task) =>
      task.id === taskToUpdate.id ? taskToUpdate : task
    );

    setTasks(newTasks);
    await storage.storeTask(newTasks);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            { borderColor: isFocused ? "#5E60CE" : "#0D0D0D" },
          ]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTaskName}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
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
