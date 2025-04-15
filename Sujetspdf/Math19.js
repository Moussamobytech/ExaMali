import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

const Math19 = ({ navigation }) => {
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
        <Text style={[styles.title, dynamicStyles.text]}>Sujet de Mathématiques DEF 2019</Text>
        <Text style={[styles.sectionTitle, dynamicStyles.text]}>Épreuve de : Mathématiques DEF 2019</Text>

        <Text style={[styles.subTitle, dynamicStyles.text]}>I- ALGÈBRE</Text>

        <View style={styles.exerciseContainer}>
          <Text style={[styles.exerciseTitle, dynamicStyles.text]}>Exercice 1 :</Text>
          <Text style={[styles.exerciseText, dynamicStyles.text]}>
            1°) Résoudre l'équation suivante : 2x² - 5x + 3 = 0.
            {'\n'}
            2°) Factoriser l'expression P(x) = x² - 4x + 4.
            {'\n'}
            3°) Calculer la valeur de P(2).
          </Text>
        </View>

        <View style={styles.exerciseContainer}>
          <Text style={[styles.exerciseTitle, dynamicStyles.text]}>Exercice 2 :</Text>
          <Text style={[styles.exerciseText, dynamicStyles.text]}>
            Un commerçant achète 5 sacs de riz et 3 bidons d’huile pour 80 Euros.
            {'\n'}
            Un autre commerçant achète 2 sacs de riz et 4 bidons d’huile pour 60 Euros.
            {'\n'}
            1°) Traduire cette situation sous forme d'un système d’équations.
            {'\n'}
            2°) Résoudre ce système pour déterminer le prix d'un sac de riz et d'un bidon d’huile.
          </Text>
        </View>

        <Text style={[styles.subTitle, dynamicStyles.text]}>II- GÉOMÉTRIE</Text>

        <View style={styles.exerciseContainer}>
          <Text style={[styles.exerciseText, dynamicStyles.text]}>
            1°) Dans un repère orthonormé, placer les points A(2,3), B(5,-2), C(-1,4).
            {'\n'}
            2°) Déterminer la nature du triangle ABC en calculant ses longueurs.
            {'\n'}
            3°) Trouver l’équation de la droite passant par A et B.
          </Text>
        </View>

        <Text style={[styles.footer, dynamicStyles.text]}>
          Sujets de maths DEF | Adama Traoré Professeur Lycée Technique Bamako | Page 36
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

export default Math19;
