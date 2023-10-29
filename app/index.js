import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Button,
  TextInput,
} from "react-native";
import { Stack, useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "purple" }}>
      <Text>salam</Text>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "teal" },
          headerShadowVisible: false,
        }}
      />
    </View>
  );
};

export default Home;
