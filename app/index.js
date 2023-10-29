import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import placeHolderImage from "../assets/images/blog2.jpg";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  const imageSource = selectedImage ? { uri: selectedImage } : placeHolderImage;

  return (
    <View style={styles.container}>
      <Text style={{ color: "red" }}>Hello Dunya!</Text>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "teal" },
          headerShadowVisible: false,
        }}
      />
      <StatusBar style="auto" />

      <View>
        <Image style={styles.image} source={imageSource} />
      </View>

      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => alert("You pressed a button. hahah")}
        >
          <Text style={styles.buttonLabel}>Hello Button</Text>
        </Pressable>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.buttonLabel}>Hello Click</Text>
      </View>
      <Text onPress={pickImageAsync}>Choose a photo</Text>
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
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
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
