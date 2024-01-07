import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { DATA } from "../data";
import { WIDTH } from "../constants";

interface Props {
  scrollX: Animated.Value;
}

const Dot = ({
  index,
  scrollX,
}: {
  index: number;
  scrollX: Animated.Value;
}) => {
  const inputRange = [(index - 1) * WIDTH, index * WIDTH, (index + 1) * WIDTH];
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.8, 1.4, 0.8],
    extrapolate: "clamp",
  });
  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.5, 1, 0.5],
    extrapolate: "clamp",
  });
  return (
    <Animated.View
      key={index}
      style={{
        height: 10,
        width: 10,
        borderRadius: 5,
        margin: 10,
        // backgroundColor,
        transform: [{ scale }],
        opacity,
        backgroundColor: "white",
      }}
    />
  );
};

const Indicator = ({ scrollX }: Props) => {
  return (
    <View
      style={{
        flexDirection: "column",
        position: "absolute",
        bottom: 50,
        left: 30,
        right: 30,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 15,
          marginBottom: 30,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            paddingHorizontal: 15,
            paddingVertical: 12,
            borderRadius: 10,
            flex: 0.5,
          }}
        >
          <Text
            style={{ textAlign: "center", fontWeight: "700", fontSize: 15 }}
          >
            Log In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            paddingHorizontal: 15,
            paddingVertical: 12,
            borderRadius: 10,
            flex: 0.5,
          }}
        >
          <Text
            style={{ textAlign: "center", fontWeight: "700", fontSize: 15 }}
          >
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 14, fontWeight: "600" }}>
          Skip
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
          }}
        >
          {DATA.map((_, index) => {
            return <Dot key={index} index={index} scrollX={scrollX} />;
          })}
        </View>
        <Text style={{ color: "#fff", fontSize: 14, fontWeight: "600" }}>
          Next
        </Text>
      </View>
    </View>
  );
};

export default Indicator;

const styles = StyleSheet.create({});
