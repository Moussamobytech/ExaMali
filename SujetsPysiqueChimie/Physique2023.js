import React, { useState, useMemo } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Physique2023 = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dynamicStyles = useMemo(() => getDynamicStyles(isDarkMode), [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <View style={dynamicStyles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Physiquechimie')}
          accessibilityLabel="Go back to home"
          accessibilityRole="button"
        >
          <Image source={require('./../Asset/return.png')} style={styles.returnImage} />
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleDarkMode} style={styles.toggleContainer}>
          <View style={[styles.toggleSwitch, dynamicStyles.toggleSwitch]}>
            <Text style={[styles.toggleText, dynamicStyles.toggleText]}>
              {isDarkMode ? 'ON' : 'OFF'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2023</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>Épreuve de Physique-Chimie</Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>A - Physique</Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>
          I - q15. Questions de Cours: (6 points)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          a) Définition de l'évaporation.
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          b) À l'aide d'expériences, établir les facteurs influents sur la vitesse d'évaporation.
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          c) Définir l'effet Joule.
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          d) Citer trois applications de l'effet Joule.
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>
          II - q16. Exercice: (4 pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          Calculer la puissance électrique dissipée par effet Joule dans un rhéostat de 25 ohms par un courant d'intensité 5 Ampères. Trouve la quantité de chaleur (en joules et en kWh) dégagée en une demi-heure de fonctionnement.
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>B - Chimie</Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>
          Questions de Cours: (6 points)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          1°) Définir les termes suivants : Une oxydation ; un oxydant ; une réduction ; un réducteur.
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          2°) Comment prépare-t-on le méthane au laboratoire?
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Exercice: (4 points)</Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          On traite du carbure de calcium par l'eau en excès. On obtient un gaz ayant un volume de 4,48 l dans les conditions normales. Calcule la masse de carbure de calcium nécessaire si le carbure utilisé contient 15 % d'impuretés.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          M(Ca) = 40 g/mol ; M(C) = 12 g/mol ; M(H) = 1 g/mol ; M(O) = 16 g/mol.
        </Text>
      </ScrollView>
    </View>
  );
};

const getDynamicStyles = (isDarkMode) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#000' : '#fff',
      padding: 16,
      paddingBottom: 50,
    },
    header: {
      color: isDarkMode ? '#FFD700' : '#800000',
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 16,
      marginBottom: 8,
      color: isDarkMode ? '#FFD700' : '#00008B',
    },
    sectionSubtitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 12,
      marginBottom: 8,
      color: isDarkMode ? '#fff' : '#000',
    },
    text: {
      fontSize: 16,
      color: isDarkMode ? '#fff' : '#000',
    },
    toggleSwitch: {
      padding: 5,
      borderRadius: 15,
      width: 60,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isDarkMode ? '#4CAF50' : '#f44336',
    },
    toggleText: {
      fontSize: 12,
      fontWeight: 'bold',
      color: isDarkMode ? '#fff' : '#000',
    },
  });

const styles = StyleSheet.create({
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
  sectionSubtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 24,
  },
  question: {
    fontSize: 16,
    marginVertical: 4,
  },
  instruction: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
});

export default Physique2023;