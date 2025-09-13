import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Platform,
} from "react-native";
import Constants from "expo-constants";

import Header from "./components/Header";
import SegmentTabs from "./components/SegmentTabs";
import PosterCarousel from "./components/PosterCarousel";
import ScriptBox from "./components/ScriptBox";
import SettingsRow from "./components/SettingsRow";
import GenerateButton from "./components/GenerateButton";

export default function App() {
  const [activeTab, setActiveTab] = useState("smart");
  const [activePoster, setActivePoster] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView contentContainerStyle={styles.scroll}>
        <Header />

        {/* ✅ Centered Segment Tabs */}
        <View style={styles.tabsWrapper}>
          <SegmentTabs activeTab={activeTab} onChange={setActiveTab} />
        </View>

        <Text style={styles.title}>
          What type of posters do you want to create?
        </Text>

        <PosterCarousel
          activeIndex={activePoster}
          setActiveIndex={setActivePoster}
        />

        <ScriptBox />
        <Text style={styles.settingsHeading}>Settings</Text>
        <View style={styles.settingsBox}>
          <SettingsRow label="Size" value="1080 x 1920 px" />
          <SettingsRow label="Category" value="Foods and beverage" />
        </View>

        <GenerateButton />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#070707",
    paddingTop:
      Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  scroll: {
    padding: 4,
  },
  tabsWrapper: {
    flexDirection: "row",
    justifyContent: "center", // ⬅️ Center both tabs equally
    marginVertical: 12,
  },
  title: {
    fontSize: 16,
    color: "#fff",
    marginVertical: 16,
    fontWeight: "700",
  },
  settingsBox: {
    marginTop: 0,
    borderRadius: 10,
    backgroundColor: "#111",
    paddingVertical: 0,
  },
  settingsHeading: {
    color: "#aaa",
    fontSize: 16,
    fontWeight: "600",
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginTop:16,
    marginBottom:0,
  },
});
