import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  //Platform,
} from "react-native";
//import Constants from "expo-constants";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "./components/Header";
import SegmentTabs from "./components/SegmentTabs";
import PosterCarousel from "./components/PosterCarousel";
import ScriptBox from "./components/ScriptsBox";
import SettingsRow from "./components/SettingsRow";
import GenerateButton from "./components/GenerateButton";

export default function App() {
  const [activeTab, setActiveTab] = useState<"smart" | "advanced">("smart");
  const [activePoster, setActivePoster] = useState(0);

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* ✅ Everything padded under status bar & safe areas */}
        <Header />

        <SegmentTabs activeTab={activeTab} onChange={setActiveTab} />

        <Text style={styles.title}>What type of posters do you want to create?</Text>

        <PosterCarousel activeIndex={activePoster} setActiveIndex={setActivePoster} />

        <ScriptBox />

        <View style={styles.settingsBox}>
          <Text style={styles.settingsHeading}>Settings</Text>
          <SettingsRow label="Size" value="1080 x 1920 px" />
          <SettingsRow label="Category" value="Foods and beverage" />
        </View>

        <GenerateButton />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#070707",
  },
  scroll: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    color: "#fff",
    marginVertical: 16,
    fontWeight: "700",
  },
  settingsBox: {
    marginTop: 16,
    borderRadius: 16,
    backgroundColor: "#111",
    paddingVertical: 4,
  },
  settingsHeading: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
});
