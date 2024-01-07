import { Animated, StyleSheet } from "react-native";
import React from "react";
import { HEIGHT, WIDTH } from "../constants";

const BackgroundSquare = ({ scrollX }: { scrollX: Animated.Value }) => {
  const SQUARE = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, WIDTH), new Animated.Value(WIDTH)),
    1
  );

  const rotate = SQUARE.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["35deg", "0deg", "35deg"],
  });

  const translateX = SQUARE.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -HEIGHT, 0],
  });

  return (
    <Animated.View
      style={{
        backgroundColor: "#fff",
        height: HEIGHT,
        width: HEIGHT,
        position: "absolute",
        top: -HEIGHT * 0.6,
        left: -HEIGHT * 0.3,
        borderRadius: 80,
        transform: [{ rotate }, { translateX }],
      }}
    />
  );
};

export default BackgroundSquare;

const styles = StyleSheet.create({});
