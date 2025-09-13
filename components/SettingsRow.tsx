import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = { label: string; value: string };

export default function SettingsRow({ label, value }: Props) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.right}>
        <Text style={styles.value}>{value}</Text>
        <Ionicons name="chevron-forward" size={18} color="#aaa" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#333",
  },
  label: { color: "#fff", fontSize: 14 },
  right: { flexDirection: "row", alignItems: "center" },
  value: { color: "#aaa", marginRight: 6 },
});
