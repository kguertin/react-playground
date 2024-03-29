import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Kevin";

  return (
    <View>
      <Text style={styles.textStyle}>Getting Started with React Native!</Text>
      <Text style={styles.subheadingStyle}>My Name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subheadingStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
