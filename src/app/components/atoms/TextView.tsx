import { Platform, StyleSheet, Text, TextProps } from "react-native";
import React from "react";

type TText = {
  text: string;
};

const TextView = (props: TextProps & TText) => {
  return (
    <Text {...props} style={[props.style, styles.txt]}>
      {props.text}
    </Text>
  );
};

export default TextView;

const styles = StyleSheet.create({
  txt: {
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
  },
});
