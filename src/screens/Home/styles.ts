import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  header: {
    backgroundColor: "#0D0D0D",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: -24,
    paddingHorizontal: 20,
    width: "100%",
  },
  input: {
    flex: 1,
    backgroundColor: "#262626",
    borderRadius: 6,
    borderWidth: 1,
    paddingHorizontal: 16,
    color: "#F2F2F2",
    fontSize: 16,
  },
  addButton: {
    marginLeft: 4,
    height: 52,
    width: 52,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});
