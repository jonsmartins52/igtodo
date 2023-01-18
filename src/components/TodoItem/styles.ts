import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#262626",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#333333",
    marginBottom: 8,
    height: 64,
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 8,
  },
  description: {
    fontSize: 14,
    color: "#F2F2F2",
    marginHorizontal: 8,
    width: 235,
  },
  unchecked: {
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#4EA8DE",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
  },
  textDone: {
    color: "#808080",
    textDecorationLine: "line-through",
    textAlign: "left",
    fontSize: 14,
    width: 235,
  },
});
