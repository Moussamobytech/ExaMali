import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Mathpdf = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode state

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const dynamicTextColor = isDarkMode ? '#fff' : '#000';
  const dynamicBackgroundColor = isDarkMode ? '#000' : '#fff';

  return (
    <ScrollView style={[styles.container, { backgroundColor: dynamicBackgroundColor }]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Sujets')}>
          <Image source={require('./../Asset/return.png')} style={styles.returnImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleTheme} style={styles.toggleContainer}>
          <View style={[styles.toggleSwitch, isDarkMode ? styles.toggleSwitchOn : styles.toggleSwitchOff]}>
            <Text style={[styles.toggleText, isDarkMode ? styles.textOn : styles.textOff]}>
              {isDarkMode ? 'ON' : 'OFF'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.sujetContainer}>
      <TouchableOpacity >
        <Image source={require('./../AssetDEF/MATDEF20.png')} style={styles.image} />
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  returnImage: {
    width: 30,
    height: 30,
  },
  sujetContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    width: '100%',
  },
  image: {
    width: '150%',  // Légèrement réduit pour éviter qu'il touche les bords
    height: undefined,
    aspectRatio: 1, // Maintien du ratio
    resizeMode: 'contain',
    marginBottom: 10,
  },
  
  toggleContainer: {
    padding: 10,
  },
  toggleSwitch: {
    width: 60,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleSwitchOn: {
    backgroundColor: '#4CAF50',
  },
  toggleSwitchOff: {
    backgroundColor: '#f44336',
  },
  toggleText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  textOn: {
    color: '#fff',
  },
  textOff: {
    color: '#000',
  },
});

export default Mathpdf;
