import { Text, StyleSheet, View,ScrollView } from 'react-native'
import React, { Component } from 'react'

export default class HorizontalScroll extends Component {
  render() {
    return (
        <View style={{marginTop:28}}>
        <Text style={{fontSize:25}}>Horizontal Scroll</Text>
        <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View style={[styles.card, styles.green]}>
            <Text style={{ color: "#fff" }}>FlatCard</Text>
          </View>
          <View style={[styles.card, styles.red]}>
            <Text style={{ color: "#fff" }}>FlatCard</Text>
          </View>
          <View style={[styles.card, styles.cyan]}>
            <Text style={{ color: "#fff" }}>FlatCard</Text>
          </View>
          <View style={styles.card}>
            <Text style={{ color: "#fff" }}>FlatCard</Text>
          </View>
          <View style={[styles.card, styles.cyan]}>
            <Text style={{ color: "#fff" }}>FlatCard</Text>
          </View>
          <View style={[styles.card, styles.red]}>
            <Text style={{ color: "#fff" }}>FlatCard</Text>
          </View>
          <View style={[styles.card, styles.green]}>
            <Text style={{ color: "#fff" }}>FlatCard</Text>
          </View>

          </ScrollView>
        </View>
      </View>
    )
  }
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
      width: 150,
      height: 200,
      backgroundColor: "#000",
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 3,
      borderRadius:10,
      shadowColor: "#000",
      shadowOffsetX: 20,
      shadowRadius:81
    },
    green:{
        backgroundColor:"#198119e4"
    },
    red:{
        backgroundColor:"#d00624e3"
    },
    cyan:{
        backgroundColor:"#217474"
    }
    

  });