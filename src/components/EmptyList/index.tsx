import { View, Text, Image } from "react-native";

import { styles } from "./styles";
import ClipBoard from "../../assets/Clipboard.svg";

export default function EmptyList() {
  return (
    <View style={styles.container}>
      <ClipBoard style={styles.emptyIcon} />
      <Text style={styles.emptyTextBold}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.emptyTextNormal}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
