import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

const Initialloader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { height: "100%", alignItems: "center", justifyContent: "center" },
});

export default Initialloader;
