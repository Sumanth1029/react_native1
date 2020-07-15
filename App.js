import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "sumanth", id: "1" },
    { name: "hegde", id: "2" },
    { name: "shreedhar", id: "3" },
    { name: "madhura", id: "4" },
    { name: "sumu", id: "5" },
    { name: "sumu", id: "6" },
    { name: "sumu", id: "7" },
    { name: "sumu", id: "8" },
  ]);

  return (
    <View style={styles.container}>
      {/* <ScrollView>
        {people.map((p) => {
          return (
            <View key={p.key}>
              <Text style={styles.item}>{p.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}

      <FlatList
      numColumns={2}
      keyExtractor={(item)=>item.id}
        data={people}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}
//df
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    marginTop: 24,
    padding: 30,
    borderColor: "#222",
    borderWidth: 2,
    color: "white",marginHorizontal:10,marginTop:24
  },
});
