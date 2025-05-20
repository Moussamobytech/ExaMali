import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }) => {
  // Chemins des images locales (vérifiez que le dossier et les noms sont corrects)
  const images = [
    require('./../../../Asset/slade1.png'), // Ajustez le chemin selon la structure de votre projet
    require('./../../../Asset/slade4.jpg'),
    require('./../../../Asset/slade5.png'),
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bienvenue sur l'App EXAMALI</Text>
        <Text style={styles.subtitle}>
          Vivez une expérience unique avec nos fonctionnalités exclusives
        </Text>
      </View>

      <View style={styles.sliderContainer}>
        <Swiper
          style={styles.swiper}
          autoplay
          autoplayTimeout={5} // Changé à 5 secondes comme demandé
          showsPagination
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
          loop // Ajouté pour un défilement en boucle fluide
        >
          {images.map((image, index) => (
            <View key={index} style={styles.slide}>
              <Image
                source={image}
                style={styles.image}
                resizeMode="cover"
                onError={(e) => console.log('Erreur de chargement d\'image:', e.nativeEvent.error)} // Debug
              />
            </View>
          ))}
        </Swiper>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
        activeOpacity={0.9}
      >
        <Text style={styles.buttonText}>Commencer l'expérience</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: height * 0.05,
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 25,
    marginBottom: height * 0.03,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 24,
  },
  sliderContainer: {
    width: width,
    height: height * 0.6,
    marginBottom: height * 0.03,
    overflow: 'hidden', // Assure que le contenu du slider est bien contenu
  },
  swiper: {
    // Pas de style height ici, géré par sliderContainer
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Centrer l'image
  },
  image: {
    width: '100%',
    height: '100%',
  },
  dot: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Légère modification pour contraste
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
    marginBottom: 10, // Positionnement fixe pour éviter les problèmes
  },
  activeDot: {
    backgroundColor: '#0984E3',
    width: 30,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0984E3',
    paddingVertical: 18,
    marginHorizontal: 25,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});

export default WelcomeScreen;