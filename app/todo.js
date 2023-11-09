import { Stack } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
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

      <Text>Todo</Text>
    </View>
  );
}

// const styles = {};
