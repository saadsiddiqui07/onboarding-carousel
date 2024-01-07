import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Animated, View, Text } from "react-native";
import { DATA } from "./data";
import { useRef } from "react";
import Item from "./components/Item";
import Indicator from "./components/Indicator";
import Backdrop from "./components/Backdrop";
import BackgroundSquare from "./components/BackgroundSquare";

export default function App() {
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: true }
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Backdrop scrollX={scrollX} />
      <BackgroundSquare scrollX={scrollX} />
      <Animated.FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        contentContainerStyle={{ paddingBottom: 100 }}
        data={DATA}
        scrollEventThrottle={32}
        onScroll={handleScroll}
        keyExtractor={(data) => data.key}
        renderItem={({ item, index }) => {
          return (
            <Item key={item.key} item={item} index={index} scrollX={scrollX} />
          );
        }}
      />
      <Indicator scrollX={scrollX} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
