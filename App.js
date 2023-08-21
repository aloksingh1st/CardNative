import { View, Text, StyleSheet, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'
import HorizontalScroll from './components/HorizontalScroll'
import ExtendedCards from './components/ExtendedCards'
import ListView from './components/ListView'

const App = () => {
  return (
    <SafeAreaView >
      <ScrollView>
          <FlatCard />
          <HorizontalScroll />
          <ExtendedCards />
          <ListView />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
})

export default App