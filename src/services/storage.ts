import AsyncStorage from "@react-native-async-storage/async-storage";

import { Todo } from "../types/Todo";

class Store {
  async storeTask(todos: Todo[]) {
    try {
      await AsyncStorage.setItem("@igtodo:tasks", JSON.stringify(todos));
    } catch (error) {
      console.log("Erro ao salvar tarefas");
    }
  }

  async getTasks() {
    try {
      const data = await AsyncStorage.getItem("@igtodo:tasks");
      const storagedTasks = data ? JSON.parse(data) : null;
      if (!storagedTasks) return;
      return storagedTasks as Todo[];
    } catch (error) {
      console.log("erro ao recuperar tarefas.");
    }
  }
}

export default new Store();
