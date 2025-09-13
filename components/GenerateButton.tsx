
import { Text, Pressable, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function GenerateButton() {
  return (
    <Pressable style={styles.wrapper}>
      <LinearGradient colors={["#00CED1", "#00CED180"]} style={styles.button}>
        <View style={styles.dot} />
        <Text style={styles.text}>Generate</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 24,
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 14,
    borderRadius: 30,
    backgroundColor: "#fff",
    shadowColor: "#00CED1",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00CED1",
    marginRight: 8,
  },
  text: { color: "#000", fontWeight: "600", fontSize: 16 },
});
