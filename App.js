import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  Modal,
  ScrollView,
} from "react-native";
import { Input } from "./components/Input";
import { ItemList } from "./components/ItemList";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  function closeModal() {
    if (item !== "") {
      setModalVisible(!modalVisible);
      setList([...list, item]);
      setItem("");
    } else {
      setModalVisible(!modalVisible);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lista de Compras</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.scrollList}
      >
        {list &&
          list.map((element, index) => (
            <ItemList content={element} key={index} />
          ))}
      </ScrollView>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button1}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textButton1}>+</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Input variable={item} func={setItem} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={closeModal}
            >
              <Text style={styles.textStyle}>Adicionar Item de compra</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 80,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
  },
  button1: {
    backgroundColor: "#1E90FF",
    height: 70,
    width: 70,
    borderRadius: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 50,
    right: 50,
  },
  textButton1: {
    fontSize: 40,
    color: "#fff",
  },
  modalView: {
    height: 200,
    width: 400,
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 20,
  },
  textStyle: {
    color: "#2196F3",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  scrollList: {
    marginTop: 50,
  },
});
