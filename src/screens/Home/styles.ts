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
    backgroundColor: "#262626",
    borderRadius: 6,
    borderWidth: 1,
    color: "#F2F2F2",
    fontSize: 16,
    flex: 1,
    padding: 16,
    width: "65%",
  },
  addButton: {
    alignItems: "center",
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    justifyContent: "center",
    marginLeft: 4,
    padding: 18,
    width: "20%",
  },
});
