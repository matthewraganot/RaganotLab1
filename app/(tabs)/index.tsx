import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HelloWorldScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>RAGANOT, MATTHEW REY </Text>
      <Text style={styles.h1}>IT3R9 </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontSize: 32,   // h1 size
    fontWeight: 'bold',
    color: '#222',
  },
});
