import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 48,
    height: 208,
    borderTopColor: "#333333",
    borderTopWidth: 1,
  },
  emptyIcon: {
    width: 56,
    height: 56,
    marginBottom: 16,
  },
  emptyTextBold: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#808080",
  },
  emptyTextNormal: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#808080",
  },
});
