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
  Image,
} from "react-native";
import axios from "axios";

export default function fakeUsers() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=1")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Axios Error:", error);
      });
  }, []);

  return (
    <View>
      <Stack.Screen
        options={{
          title: "Users Api",
          headerStyle: { backgroundColor: "teal" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      {data ? (
        <View>
          {data?.results?.map((e, i) => {
            return (
              <View key={i}>
                <Image
                  width={150}
                  height={150}
                  source={{
                    uri: e?.picture?.large,
                  }}
                />
                <Text>
                  Name: {e?.name?.title}. {e?.name?.first} {e?.name?.last}
                </Text>
                <Text>Gender: {e?.gender}</Text>
                <Text>Age: {e?.dob?.age}</Text>
                <Text>Date: {e?.dob?.date}</Text>
                <Text>Email: {e?.email}</Text>
                <Text>Country: {e?.location?.country}</Text>
                <Text>City: {e?.location?.city}</Text>
              </View>
            );
          })}
        </View>
      ) : (
        <Text>Loading</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
