import { View, Text, Pressable, StyleSheet } from "react-native";

type Props = {
  activeTab: "smart" | "advanced";
  onChange: (tab: "smart" | "advanced") => void;
};

export default function SegmentTabs({ activeTab, onChange }: Props) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => onChange("smart")}>
        <Text style={[styles.tab, activeTab === "smart" && styles.active]}>Smart script</Text>
      </Pressable>
      <Pressable onPress={() => onChange("advanced")}>
        <Text style={[styles.tab, activeTab === "advanced" && styles.active]}>Advanced script</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 12,
  },
  tab: {
    marginRight: 20,
    color: "#888",
    fontSize: 14,
  },
  active: {
    color: "#fff",
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});
