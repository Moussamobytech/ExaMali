import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

const Math20 = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const dynamicStyles = {
    container: {
      backgroundColor: isDarkMode ? '#000' : '#fff',
    },
    text: {
      color: isDarkMode ? '#fff' : '#000',
    },
    toggleSwitch: {
      backgroundColor: isDarkMode ? '#4CAF50' : '#f44336',
    },
    toggleText: {
      color: isDarkMode ? '#fff' : '#000',
    },
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={[styles.container, dynamicStyles.container]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('AccueilMaitre')}>
          <Image source={require('./../Asset/return.png')} style={styles.returnImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleTheme} style={styles.toggleContainer}>
          <View style={[styles.toggleSwitch, dynamicStyles.toggleSwitch]}>
            <Text style={[styles.toggleText, dynamicStyles.toggleText]}>
              {isDarkMode ? 'ON' : 'OFF'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView vertical showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.title, dynamicStyles.text]}>Sujet de Mathématiques DEF 2020</Text>
        <Text style={[styles.sectionTitle, dynamicStyles.text]}>Épreuve de : Mathématiques DEF 2020</Text>

        <Text style={[styles.subTitle, dynamicStyles.text]}>I- ALGÈBRE</Text>

        <View style={styles.exerciseContainer}>
          <Text style={[styles.exerciseTitle, dynamicStyles.text]}>Exercice 1 :</Text>
          <Text style={[styles.exerciseText, dynamicStyles.text]}>
          1°) Comparez : √50/2 et √50/√2, √(4 × 25) et √4 × √25.

            {'\n'}
            2°) Simplifier les expressions suivantes : {'\n'}
            A = 7√2 + 3√2 - 5√2 ; B = (√5 - 3)(4 + √5) ; C = (√3 + 5√2){'\n'}
            3°) Développer, réduire et ordonner f(x) ; g(x) et h(x) suivant les puissances décroissantes de x.
          </Text>
        </View>

        <View style={styles.exerciseContainer}>
          <Text style={[styles.exerciseTitle, dynamicStyles.text]}>Exercice 2 :</Text>
          <Text style={[styles.exerciseText, dynamicStyles.text]}>
            Fatou achète 2 pigeons et 3 pintades à 40 Euros. Moussa achète 7 pigeons et 2 pintades à 55 Euros.
            {'\n'}
            1°) Traduire en équation. {'\n'}
            2°) Écrire le système formé par ces équations. {'\n'}
            3°) En déduire le prix d'un pigeon et d'une pintade.
          </Text>
        </View>

        <Text style={[styles.subTitle, dynamicStyles.text]}>II- GÉOMÉTRIE</Text>

        <View style={styles.exerciseContainer}>
          <Text style={[styles.exerciseText, dynamicStyles.text]}>
            1°) Dans le plan muni d’un repère orthonormé (O ; i ; j), placer les points : A(1;3), B(4;-1), C(-3;0).
            {'\n'}
            2°) Calculer les distances : AB ; BC ; AC et en déduire la nature du triangle ABC.
            {'\n'}
            3°) Calculer les coordonnées du centre K du cercle circonscrit au triangle ABC et la longueur du rayon.
            {'\n'}
            4°) Trouver l’équation de la droite (AF) avec F(-6 ; 4).
            {'\n'}
            5°) Quelle est la position de cette droite (AF) par rapport au cercle ?
          </Text>
        </View>

        <Text style={[styles.footer, dynamicStyles.text]}>
          Sujets de maths DEF | Adama Traoré Professeur Lycée Technique Bamako | Page 37
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  scrollContainer: {
    paddingBottom: 50,
  },
  returnImage: {
    width: 30,
    height: 30,
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#0000FF',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  exerciseContainer: {
    marginBottom: 20,
  },
  exerciseTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  footer: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
    color: '#555',
  },
});

export default Math20;
