import { StyleSheet, Text, View, Animated } from "react-native";
import React from "react";
import { bgs } from "../data";
import { WIDTH } from "../constants";

interface Props {
  scrollX: Animated.Value;
}

const Backdrop = ({ scrollX }: Props) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: bgs.map((_, index) => index * WIDTH),
    outputRange: bgs.map((bg) => bg),
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={[StyleSheet.absoluteFillObject, { backgroundColor }]}
    />
  );
};

export default Backdrop;

const styles = StyleSheet.create({});
