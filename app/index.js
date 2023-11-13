import { Link } from "expo-router";
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
  const [name, setName] = useState("Shahriyar");
  const [surname, setSurname] = useState("Mammadov");

  const [people, setPeople] = useState([
    {
      name: "Shahriyar",
      age: 21,
    },
    {
      name: "Mammad",
      age: 18,
    },
    {
      name: "Shax",
      age: 78,
    },
    {
      name: "Olla",
      age: 15,
    },
    {
      name: "Molla",
      age: 26,
    },
  ]);

  const pressHandlerId = (name) => {
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.name != name);
    });
  };

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

      <View style={styles.flatlist}>
        <FlatList
          // numColumns={2}
          keyExtractor={(item) => item.age}
          data={people}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressHandlerId(item.name)}>
              <Text style={styles.flatlistElement}>
                {item.name} {item.age}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <Button
          title="Silinmişləri geri qaytar"
          onPress={() =>
            setPeople([
              {
                name: "Shahriyar",
                age: 21,
              },
              {
                name: "Mammad",
                age: 18,
              },
              {
                name: "Shax",
                age: 78,
              },
              {
                name: "Olla",
                age: 15,
              },
              {
                name: "Molla",
                age: 26,
              },
            ])
          }
        />
      </View>

      {/* EXPO ROUTER */}
      <View>
        <Link href={"/todo"} style={styles.nav}>
          Todo App
        </Link>
        <Link href={"/fakeUsers"} style={styles.nav}>
          Users Api
        </Link>
      </View>
    </View>
  );
}

const styles = {
  container: {
    padding: 10,
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
  flatlist: {
    borderWidth: 1,
    borderColor: "green",
    backgroundColor: "white",
    width: 350,
    height: 200,
    marginTop: 40,
    shadowColor: "green",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
  },
  flatlistElement: {
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "teal",
  },
  nav: {
    marginTop: 30,
    fontSize: 20,
    color: "red",
  },
};
