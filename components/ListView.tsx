import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Image } from "react-native";

export default function ListView() {
  return (
    <View style={{ marginTop: 28 }}>
    <Text style={{ fontSize: 25 }}>ExtendedCards</Text>
    <View style={styles.container}>
      <View style={styles.card}>
      <Image
            source={{
              uri: "https://foodandtravel.com/imager/hours/219609/Ministry-of-Tourism-Govt-of-India-595161_Taj-Mahal-Uttar-Pradesh-Aerial_821631bb23140209ea99c8f810f75634.jpg",
            }}
            style={{ height: 60, width: 60,borderRadius: 100, }}
          />

          <Text style={{ color: "#000", fontSize: 22, marginHorizontal:25 }}>Name</Text>
          <Text style={{ color: "#000", fontSize: 22, marginHorizontal:25 }}>Professor</Text>
    

      </View>

      <View style={styles.card}>
      <Image
            source={{
              uri: "https://foodandtravel.com/imager/hours/219609/Ministry-of-Tourism-Govt-of-India-595161_Taj-Mahal-Uttar-Pradesh-Aerial_821631bb23140209ea99c8f810f75634.jpg",
            }}
            style={{ height: 60, width: 60,borderRadius: 100, }}
          />

          <Text style={{ color: "#000", fontSize: 22, marginHorizontal:25 }}>Name</Text>
          <Text style={{ color: "#000", fontSize: 22, marginHorizontal:25 }}>Professor</Text>
    

      </View>

      <View style={styles.card}>
      <Image
            source={{
              uri: "https://foodandtravel.com/imager/hours/219609/Ministry-of-Tourism-Govt-of-India-595161_Taj-Mahal-Uttar-Pradesh-Aerial_821631bb23140209ea99c8f810f75634.jpg",
            }}
            style={{ height: 60, width: 60,borderRadius: 100, }}
          />

          <Text style={{ color: "#000", fontSize: 22, marginHorizontal:25 }}>Name</Text>
          <Text style={{ color: "#000", fontSize: 22, marginHorizontal:25 }}>Professor</Text>
    

      </View>

      <View style={styles.card}>
      <Image
            source={{
              uri: "https://foodandtravel.com/imager/hours/219609/Ministry-of-Tourism-Govt-of-India-595161_Taj-Mahal-Uttar-Pradesh-Aerial_821631bb23140209ea99c8f810f75634.jpg",
            }}
            style={{ height: 60, width: 60,borderRadius: 100, }}
          />

          <Text style={{ color: "#000", fontSize: 22, marginHorizontal:25 }}>Name</Text>
          <Text style={{ color: "#000", fontSize: 22, marginHorizontal:25 }}>Professor</Text>
    

      </View>

     
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      paddingTop: 10,
      flexDirection:"column",
      marginBottom:10,
      borderWidth:2,
      borderRadius:15,
      backgroundColor: "#473c3ccf",
    },
    card: {
      flex: 1,
      width: "100%",
      flexDirection:"row",
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 3,
      marginBottom:20,
      backgroundColor: "#473c3c0",
      paddingHorizontal:60,
    },
  });
  