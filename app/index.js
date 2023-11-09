import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("Shahriyar");
  const [surname, setSurname] = useState("Mammadov");

  return (
    <View style={styles.container}>
      <Text>Name: {name}</Text>
      <Text>Surname: {surname}</Text>
      <View style={styles.btn}>
        <Button
          title="Change Name"
          onPress={() => {
            setName(name === "Shahriyar" ? surname : "Shahriyar");
          }}
        />
      </View>
      <View>
        <TextInput
          // keyboardType="numeric"
          style={styles.input}
          placeholder="Mammadov"
          onChangeText={(value) => {
            setSurname(value);
          }}
        />
      </View>
    </View>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    padding: 40,
  },
  input: {
    borderColor: "teal",
    borderWidth: 1,
    padding: 8,
    margin: 10,
    width: 300,
  },
};
