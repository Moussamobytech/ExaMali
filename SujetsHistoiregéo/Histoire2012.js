import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const BiologieCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.circle}>
        <Icon name="feather" size={40} color="#fff" />
      </View>
      <Text style={styles.text}>Biologie</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 108,
    height: 108,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4, // For Android shadow
    padding: 10,
  },
  circle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#4CD964', // vert vif
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
});

export default BiologieCard;
