import { View } from "react-native";

import { styles } from "./styles";
import Rocket from "../../assets/rocket.svg";
import To from "../../assets/to.svg";
import Do from "../../assets/do.svg";

export default function Logo() {
  return (
    <View style={styles.logoContainer}>
      <Rocket width={20} height={32} style={styles.rocketImage} />
      <To width={35} height={25} />
      <Do width={43} height={27} />
    </View>
  );
}
