import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MicButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.micButton} onPress={onPress}>
      <Ionicons name="mic" size={28} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  micButton: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: '#1e1e3f',
    padding: 16,
    borderRadius: 50,
    shadowColor: '#fff',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
});
