import {
  Animated,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { WIDTH } from "../constants";
import { Props } from "../data";

interface ItemProps {
  item: Props;
  index: number;
  scrollX: Animated.Value;
}

const Item = ({ item, scrollX, index }: ItemProps) => {
  return (
    <View
      style={{
        width: WIDTH,
        alignItems: "center",
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View style={{ flex: 0.7, justifyContent: "center" }}>
        <Image
          source={item.image}
          style={{
            width: WIDTH / 2,
            height: WIDTH / 2,
            resizeMode: "contain",
          }}
        />
      </View>
      <View style={{ flex: 0.3, paddingHorizontal: 20 }}>
        <Text
          style={{
            fontWeight: "800",
            fontSize: 25,
            marginBottom: 10,
            color: "#fff",
          }}
        >
          {item.title}
        </Text>
        <Text style={{ color: "#fff" }}>{item.description}</Text>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({});
