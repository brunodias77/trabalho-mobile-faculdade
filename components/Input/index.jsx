import react from 'react';
import { TouchableOpacity, TextInput, StyleSheet, Text } from 'react-native'

export function Input({ variable, func }) {
  return (<TouchableOpacity style={styles.container}>
    <TextInput style={styles.textInput} placeholder="Digite o item da compra" value={variable} onChangeText={element => func(element)}></TextInput>
  </TouchableOpacity>);
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 10,
    width: 300,
    backgroundColor: "#fff",
    borderColor: "white",
    borderRadius: 10,
    marginTop: 20,

  },
  textInput: {
    fontSize: 20,
  }
})