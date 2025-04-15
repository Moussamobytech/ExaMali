import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

const Math22 = ({ navigation }) => {
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
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.title, dynamicStyles.text]}>Sujet de Mathématiques DEF 2022</Text>
        <Text style={[styles.sectionTitle, dynamicStyles.text]}>Épreuve de : Mathématiques DEF 2022</Text>

        <Text style={[styles.subTitle, dynamicStyles.text]}>I- ALGÈBRE (10pts)</Text>
        
        <View style={styles.exerciseContainer}>
          <Text style={[styles.exerciseTitle, dynamicStyles.text]}>Exercice 1 : (4pts)</Text>
          <Text style={[styles.exerciseText, dynamicStyles.text]}>
            Donner la valeur de chacune des expressions sous forme irréductible:
            {'\n'}a = (1/2 + 1/3) / (3/4 + 2/3)
            {'\n'}b = 2 / (5/4)
            {'\n'}c = (25/4) / (2/15 * 1/5)
            {'\n'}d = (2/3 - 5/4) / (5/2)
          </Text>
        </View>

        <View style={styles.exerciseContainer}>
          <Text style={[styles.exerciseTitle, dynamicStyles.text]}>Exercice 2 : (4pts)</Text>
          <Text style={[styles.exerciseText, dynamicStyles.text]}>
            1°) Mettre B(x) et C(x) sous la forme de produit de facteurs du 1ᵉʳ degré.
            {'\n'}B(x) = (x²+2x) - (1-2x) ; C(x) = 4 - 16x² + (4x²)(5x-4)
            {'\n'}2°) On considère l'expression A = 1/4 * [(a+b)² - (a-b)²]
            {'\n'}  a) Calculer A pour a=-1 et b=5
            {'\n'}  b) Calculer A pour a=-2 et b=3
            {'\n'}  c) Un élève de quatrième... affirmer que le nombre A est égal au produit des nombres a et b. A-t-il raison ? Justifier.
          </Text>
        </View>

        <View style={styles.exerciseContainer}>
          <Text style={[styles.exerciseTitle, dynamicStyles.text]}>Problème : (2pts)</Text>
          <Text style={[styles.exerciseText, dynamicStyles.text]}>
            1°) Résoudre le système d'équations:
            {'\n'}   | 10x - 3y = 35
            {'\n'}   |  5x - 4y = -20
            {'\n'}2°) Montrer que les valeurs trouvées pour x et y vérifient la condition suivante:
            {'\n'}   8 / (x-5) = (x+20) / (y+20)
          </Text>
        </View>

        <Text style={[styles.subTitle, dynamicStyles.text]}>II- GÉOMÉTRIE (10pts)</Text>

        <View style={styles.exerciseContainer}>
          <Text style={[styles.exerciseText, dynamicStyles.text]}>
            Dans un repère orthonormé (O ; i ; j), on donne les points A(-3 ;2), B(4 ;2) et C(3 ;-4).
            {'\n'}1°) Placer ces points dans le plan muni du repère orthonormé.
            {'\n'}2°) Calculer les distances d(A,B), d(A,C) et d(B,C).
            {'\n'}3°) Démontrer que le triangle ABC est rectangle en A.
            {'\n'}4°) Trouver les coordonnées du point D image du point C par la translation du vecteur AB.
            {'\n'}5°) Déterminer les coordonnées du point I centre du cercle circonscrit au triangle ABC.
            {'\n'}6°) Quel est le rayon de ce cercle ? Calculer le périmètre et l’aire du polygone ABDC.
          </Text>
        </View>

        <Text style={[styles.footer, dynamicStyles.text]}>
          Sujets de maths DEF | Adama Traoré Professeur Lycée Technique Bamako | Page 39
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
  toggleText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  footer: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Math22;
