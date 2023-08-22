import { TouchableOpacity, StyleSheet, Text, View, Linking} from "react-native";
import React from "react";
import { Image } from "react-native";

export default function ExtendedCards() {

  const openLink = () => {
    const url = 'https://www.holidify.com/places/agra/'; // Replace with your desired URL
    Linking.openURL(url)
      .then(() => console.log(`Opened ${url}`))
      .catch((err) => console.error(`Error opening ${url}: ${err}`));
  };


  return (
    <View style={{ marginTop: 28 }}>
      <Text style={{ fontSize: 25 }}>ExtendedCards</Text>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://foodandtravel.com/imager/hours/219609/Ministry-of-Tourism-Govt-of-India-595161_Taj-Mahal-Uttar-Pradesh-Aerial_821631bb23140209ea99c8f810f75634.jpg",
            }}
            style={{ height: 400, width: "100%" }}
          />

          <View style={{ flex: 1, flexDirection: "row", borderWidth:2, paddingTop:10, height:20, marginBottom:34, backgroundColor:"#5ce61c3e" }}>
            <TouchableOpacity onPress={()=>{openLink()}}>
             <Text style={{ color: "#000", fontSize: 22, marginHorizontal:25 }}>ExtendedCards</Text>
            </TouchableOpacity>
            <Text style={{ color: "#000", fontSize: 22, marginHorizontal:15 }}>ExtendedCards</Text>
          </View>
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
    height: 500,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 3,
  },
});
