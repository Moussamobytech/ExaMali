import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Logo = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; 
  const navigation = useNavigation();

  useEffect(() => {
    
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000, 
      useNativeDriver: true,
    }).start();

    // Attendre 3 secondes avant de naviguer vers la page suivante
    const timer = setTimeout(() => {
      navigation.replace('Bienvenue'); // Remplace par la page suivante (modifier 'NextPage' selon votre page)
    }, 5000); // Temps d'attente avant de changer de page (3 secondes)

    return () => clearTimeout(timer); // Nettoie le timer
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Image 
            source={require('../../../Asset/logoexamali.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  logo: {
    width: 250,
    height: 250,
  }
});

export default Logo;
