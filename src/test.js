import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

// Récupérer les dimensions de l'écran
const { width } = Dimensions.get('window');

const Card = () => {
  return (
    <View style={styles.card}>
      
        <Image
          source={require('./../../Asset/def1.png')} // Chemin de votre image
          style={styles.iconImage}
        />
    
      <View style={styles.textContainer}>
        <Text style={styles.subject}>Anglais</Text>
        <Text style={styles.title}>Anglais du DEF 2023</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Voir le sujet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: width - 25, // Largeur responsive (écran - marges)
    minHeight: 80, // Hauteur minimale ajustée
  },
  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 20,
    backgroundColor: '#00C4B4', // Couleur verte comme dans l'image
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    overflow: 'hidden',
  },
  iconImage: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    marginRight: 10,
    overflow: 'hidden',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  subject: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20, // Bordures plus arrondies comme dans l'image
    borderWidth: 1, // Ajout d'une bordure
    borderColor: '#ccc',
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  buttonText: {
    color: '#666', // Couleur du texte ajustée comme dans l'image
    fontSize: 14,
    fontWeight: '500',
  },
});

export default Card;