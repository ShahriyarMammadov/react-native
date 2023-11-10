import { Stack } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: "buy coffee",
      key: 1,
    },
    {
      text: "Problem Solving",
      key: 2,
    },
    {
      text: "Create TODO APP",
      key: 3,
    },
    {
      text: "learning react-native",
      key: 4,
    },
  ]);

  const [value, setValue] = useState();

  const pressHandler = (key) => {
    setTodos((prevState) => {
      return prevState.filter((e) => e.key != key);
    });
  };

  return (
    <View>
      <Stack.Screen
        options={{
          title: "ToDo App",
          headerStyle: { backgroundColor: "#776B5D" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />

      <View style={styles.container}>
        <TextInput
          placeholder="Task Əlavə Edin"
          style={styles.input}
          // onKeyPress={(keyPress) => {
          //   console.log(keyPress);
          //   if (e.nativeEvent.key == "Enter") {
          //     // dismissKeyboard();
          //     dismissKeyboard();
          //   }
          // }}
          multiline={true}
          autoCapitalize="sentences"
          autoCorrect={true}
          keyboardType="default"
          returnKeyType="done"
          onChangeText={(value) => {
            // todos.unshift({
            //   text: value,
            //   key: value.length,
            // });
          }}
        />

        <FlatList
          data={todos}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
              <Text style={styles.flatlistElement}>
                {item.text} {item.key}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderColor: "teal",
    borderWidth: 1,
    padding: 8,
    margin: 10,
    width: 320,
  },
});
