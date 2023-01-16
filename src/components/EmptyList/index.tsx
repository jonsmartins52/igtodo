import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export default function EmptyList() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.emptyIcon}
        source={require("../../assets/Clipboard.png")}
      />
      <Text style={styles.emptyTextBold}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.emptyTextNormal}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
