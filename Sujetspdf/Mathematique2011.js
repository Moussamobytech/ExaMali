import React, { useState, useMemo } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Mathematique2011 = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dynamicStyles = useMemo(() => getDynamicStyles(isDarkMode), [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <View style={[styles.container, dynamicStyles.container]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AccueilMaitre')}
          accessibilityLabel="Go back to home"
          accessibilityRole="button"
        >
          <Image source={require('./../Asset/return.png')} style={styles.returnImage} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={toggleDarkMode}
          style={styles.toggleContainer}
          accessibilityLabel={`Toggle dark mode ${isDarkMode ? 'off' : 'on'}`}
          accessibilityRole="switch"
          accessibilityState={{ checked: isDarkMode }}
        >
          <View style={[styles.toggleSwitch, dynamicStyles.toggleSwitch]}>
            <Text style={[styles.toggleText, dynamicStyles.toggleText]}>
              {isDarkMode ? 'ON' : 'OFF'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2011 - Algèbre</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>Sujet de Mathématiques</Text>

        <Text style={[styles.subHeader, dynamicStyles.text]}>Exercice 1 :</Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          La somme de deux nombres entiers est 320. Si l’on divise le plus grand des deux par l’autre, on obtient b est 3 et le reste 8. Quels sont ces deux nombres.
        </Text>

        <Text style={[styles.subHeader, dynamicStyles.text]}>Exercice 2 :</Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          Soient les nombres réels a et b tels que : a = (x² - 1) / 2 et b = (x² - 4) / 2.{'\n'}1°) Calcule la moyenne réel m pour que :{'\n'}   1°) a et b soient opposés.{'\n'}   2°) a et b soient inverses.
        </Text>

        <Text style={[styles.subHeader, dynamicStyles.text]}>Problème :</Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          On donne les deux applications f et g définies de IR vars IR par :{'\n'}f(x) = x² + x et g(x) = x² - 2(x - 1) - 5 f(x).{'\n'}1°) Factorise f et g (dans IR) puis résous f(x) = 0 et g(x) = 0.{'\n'}2°) On considère la fonction rationnelle définie dans IR par :{'\n'}   h(x) = (x² - 1) / 9 + h(x).{'\n'}   a) Développe, réduit et ordonne h(x).{'\n'}   b) Calcule h² - f(h) les résultats sous la forme d’un entier ou d’une fraction irréductible.{'\n'}   c) Calcule h(x - 1). En déduis un encadrement d’ordre 2 de h(x - 1). Sachant que 1/7 {'<'} 1/3 {'<'} 1/1.{'\n'}   d) Résous dans IR l’inéquation h(x) = 0.{'\n'}   e) Résous h(x) = -32.
        </Text>

        <Text style={[styles.subHeader, dynamicStyles.text]}>Géométrie :</Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          1°) Dans un repère orthonormal (o, i, j) place les points A(0 ; 4) B(2 ; 3) et C(-1 ; 3).{'\n'}2°) Calcule x², x², x² et x². En déduis les distances AB, AC et BC.{'\n'}3°) Quelle est la nature du triangle ABC ? Tu justifieras ta réponse.{'\n'}4°) Trouve les coordonnées du point D, translation de A par rapport à x²C. En déduis la nature exacte du quadrilatère ABCD.{'\n'}5°) a) Trouve une équation de la droite (AB).{'\n'}   b) Trouve une équation de la droite (AC) passant par C et parallèle à (AB).{'\n'}   c) Montre par calcul que le point D appartient à (x).{'\n'}6°) a) Soit C la cercle de circonscrit au quadrilatère ABCD. Trace C et donne son centre I et son rayon R.{'\n'}   b) Soit un point M(x ; y) appartenant au cercle C. Trouve une relation entre les coordonnées x et y de M.
        </Text>
      </ScrollView>
    </View>
  );
};

const getDynamicStyles = (isDarkMode) =>
  StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? '#000' : '#fff',
    },
    header: {
      color: isDarkMode ? '#FFD700' : '#800000',
    },
    sectionTitle: {
      color: isDarkMode ? '#FFD700' : '#00008B',
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
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 50,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  toggleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleSwitch: {
    padding: 5,
    borderRadius: 15,
    width: 60,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  returnImage: {
    width: 30,
    height: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
  },
  question: {
    fontSize: 16,
    marginVertical: 4,
  },
  scrollContainer: {
    paddingBottom: 40,
  },
});

export default Mathematique2011;