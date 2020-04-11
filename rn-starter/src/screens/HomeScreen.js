import React from "react"
import { Text, StyleSheet } from "react-native"
import { red } from "color-name";

const HomeScreen = () => {
  return <Text style={styles.text}>Hello World</Text>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'red'

  }
});

export default HomeScreen
