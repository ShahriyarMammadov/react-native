import { View, Text, StyleSheet, Image } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import placeHolderImage from "../assets/images/blog2.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "red" }}>Hello world!</Text>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "teal" },
          headerShadowVisible: false,
        }}
      />
      <StatusBar style="auto" />

      <View>
        <Image style={styles.image} source={placeHolderImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4F6F52",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
