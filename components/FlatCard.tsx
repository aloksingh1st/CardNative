import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FlatCard() {
  return (
    <View style={{marginTop:28}}>
      <Text style={{fontSize:25}}>FlatCard</Text>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={{ color: "#fff" }}>FlatCard</Text>
        </View>
        <View style={styles.card}>
          <Text style={{ color: "#fff" }}>FlatCard</Text>
        </View>
        <View style={styles.card}>
          <Text style={{ color: "#fff" }}>FlatCard</Text>
        </View>
        <View style={styles.card}>
          <Text style={{ color: "#fff" }}>FlatCard</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  card: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 3,
  },
});
