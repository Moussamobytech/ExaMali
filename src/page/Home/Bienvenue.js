import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';

const { height, width } = Dimensions.get('window');

const Bienvenue = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const images = [
    require('./../../../Asset/élèvee.png'),
    require('./../../../Asset/exam.png'),
    require('./../../../Asset/info.jpg'),
  ];

  const handleStart = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('AccueilMaitre');
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        autoplayTimeout={5}
        showsPagination
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        loop
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slideContainer}>
            <ImageBackground
              source={image}
              style={styles.slide}
              resizeMode="cover" // ✅ Affiche l’image en plein écran
            >
              <View style={styles.overlay}>
                <View style={styles.header}>
                  <Text style={styles.title}>Bienvenue sur l'App EXAMALI</Text>
                  <Text style={styles.subtitle}>
                    Vivez une expérience unique avec nos fonctionnalités exclusives
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleStart}
                  activeOpacity={0.9}
                >
                  <Text style={styles.buttonText}>Commencer l'expérience</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        ))}
      </Swiper>

      {/* Modal de chargement */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={isLoading}
        onRequestClose={() => {}}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ActivityIndicator size="large" color="#5378c0" />
            <Text style={styles.modalText}>Connexion en cours...</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width: width,
    height: height,
    justifyContent: 'flex-end',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'space-between',
    paddingVertical: 60,
    paddingHorizontal: 30,
    width: '100%',
  },
  header: {
    marginTop: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#ddd',
    textAlign: 'center',
    lineHeight: 24,
  },
  dot: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
    marginBottom: 10,
  },
  activeDot: {
    backgroundColor: '#00aaff',
    width: 30,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 16,
    borderRadius: 12,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    marginTop: 15,
    fontSize: 16,
    color: '#333',
  },
});

export default Bienvenue;
