import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("hegde");

  

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <TextInput 
      style={styles.buttonc}
      placeholder="Enter name" 
      onChangeText={(val)=>setName(val)}/>

      <Text>Enter name</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonc: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
