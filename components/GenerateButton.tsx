import { Pressable, Text, StyleSheet, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function GenerateButton() {
  return (
    <Pressable style={styles.btn} onPress={() => console.log("Generate tapped")}>
      {/* Gradient Dot with spread shadow */}
      <LinearGradient
        colors={["#87CEFA", "#1E90FF", "#FF69B4"]} // light blue → blue → pink
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.dot}
      />
      <Text style={styles.text}>Generate</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 24,
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000", // black text
    marginLeft: 16,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    ...Platform.select({
      ios: {
        shadowColor: "#87CEFA", // light blue glow
        shadowOpacity: 0.8,
        shadowRadius: 6, // spread around
        shadowOffset: { width: 0, height: 0 },
      },
      android: {
        elevation: 6, // stronger glow on Android
      },
    }),
  },
});
