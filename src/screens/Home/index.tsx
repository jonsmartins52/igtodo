import { Text, View, TextInput, TouchableOpacity } from "react-native";
import SimpliLineIcons from "@expo/vector-icons/SimpleLineIcons";

import { styles } from "./styles";
import Tasks from "../../components/Tasks";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
        />
        <TouchableOpacity style={styles.addButton}>
          <Text>
            <SimpliLineIcons name="plus" size={16} color="#FFF" />
          </Text>
        </TouchableOpacity>
      </View>

      <Tasks />
    </View>
  );
}
