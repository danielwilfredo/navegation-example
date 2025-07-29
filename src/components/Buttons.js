import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Buttons = ({ text, action }) => {
  return (
    <TouchableOpacity onPress={action} style={styles.boton}>
      <Text style={styles.texto}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    backgroundColor: "#3e3b054d",
    padding: 10,
    borderRadius: 15,
    opacity: 0.8,
    marginVertical: 5,
  },
  texto: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Buttons;
