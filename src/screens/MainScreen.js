import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AnimatedOrb from '../components/AnimatedOrb';
import MicButton from '../components/MicButton';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, I'm Shaalini</Text>
      <AnimatedOrb />
      <MicButton onPress={() => {
        console.log("Mic pressed - STT function goes here");
      }} />
      <Text style={styles.subtitle}>How can I help you today?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e23',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    marginTop: 50,
  },
});
