import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  createText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4EA8DE",
  },
  doneText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#8284FA",
  },
});
