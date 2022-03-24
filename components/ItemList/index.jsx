import react, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';


export function ItemList({ content }) {

  return <View style={styles.container}>
    <Text style={styles.text}>{content}</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 300,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  text: {
    fontSize: 20,
  }
})