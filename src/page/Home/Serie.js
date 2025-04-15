import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Serie = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContaine}>
        <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
          <Image
            source={require('../../../Asset/return.png')}
            style={styles.returnImage}
          />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Title */}
      <Text style={styles.text}>Choisir ta série</Text>
      
      {/* Images Section */}
      <View style={styles.imageRow}>
        <TouchableOpacity onPress={() => navigation.navigate('AccueilMaitres')}>
          <Image
            source={require('../../../Asset/TSE.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
          <Image
            source={require('../../../Asset/TSEXP.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.imageRow}>
        <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
          <Image
            source={require('../../../Asset/TSECO.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
          <Image
            source={require('../../../Asset/TSS.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.imageRow}>
        <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
          <Image
            source={require('../../../Asset/TLL.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
          <Image
            source={require('../../../Asset/TAL.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.centeredImage}>
          <Image source={require('../../../Asset/Mali.png')} style={styles.imageMali} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Serie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  headerContaine: {
    marginTop: 10,
  },
  returnImage: {
    width: 30,
    height: 30,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
  },
  
  textt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    fontFamily: 'IslandMoments-Regular'
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Aligne les images horizontalement avec un espace égal
    marginTop: 40, // Ajoute de l'espace entre le texte et les images
  },
  centeredImage: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 170,
    height: 194,
    resizeMode: 'contain',
  },
  imageMali: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});
