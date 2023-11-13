import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  // getting data
  const getTodoData = async () => {
    try {
      const todo = JSON.parse((await AsyncStorage.getItem("todoData")) || "[]");
      setTodos(todo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // AsyncStorage.clear();
    getTodoData();
  }, []);

  const uniqueId = () => {
    var S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
  };

  const pressHandler = async (key) => {
    setTodos((prevState) => {
      return prevState.filter((e) => e.key != key);
    });
    await AsyncStorage.setItem("todoData", JSON.stringify(todos));
  };

  const addTodo = async () => {
    if (value.length === 0) {
      return alert("Todo yazın!!!!");
    }

    const newTodo = {
      text: value,
      key: uniqueId(),
    };

    setValue(() => "");

    setTodos((prevTodos) => [newTodo, ...prevTodos]);

    await AsyncStorage.setItem("todoData", JSON.stringify([newTodo, ...todos]));
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
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
            value={value}
            multiline={true}
            autoCapitalize="sentences"
            autoCorrect={true}
            keyboardType="default"
            returnKeyType="done"
            onChangeText={(value) => {
              setValue(value);
            }}
          />
          <Button title="Add Todos" onPress={addTodo} />

          <FlatList
            data={todos}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View style={styles.flatlistElement}>
                  <View>
                    <Text style={styles.todoText}>{item.text}</Text>
                  </View>
                  <View>
                    <Text
                      style={styles.actionText}
                      onPress={() => pressHandler(item.key)}
                    >
                      Sil
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    marginBottom: 20,
    width: 352,
  },
  actionText: {
    color: "red",
  },
  flatlistElement: {
    marginTop: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  todoText: {
    minWidth: 300,
    color: "green",
  },
  actionText: {
    backgroundColor: "grey",
    color: "white",
    padding: 5,
  },
});
