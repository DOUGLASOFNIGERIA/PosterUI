import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ScriptBox() {
  return (
    <View style={styles.box}>
      <TextInput
        style={styles.input}
        placeholder="stunning promotional image..."
        placeholderTextColor="#aaa"
        multiline
      />
      <View style={styles.icon}>
        <Ionicons name="image-outline" size={20} color="#aaa" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginTop: 16,
    borderRadius: 12,
    backgroundColor: "#111",
    minHeight: 120,
    padding: 12,
    position: "relative",
  },
  input: {
    color: "#fff",
    fontSize: 14,
    textAlignVertical: "top",
  },
  icon: {
    position: "absolute",
    bottom: 8,
    right: 8,
  },
});
