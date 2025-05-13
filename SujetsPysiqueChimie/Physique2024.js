import React, { useState, useMemo } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Physique2024 = () => {
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
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2024</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>
          Physique - Chimie - République du Mali - Un Peuple - Un But - Une Foi
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>
          A - Physique (10 points)
        </Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>
          89-2. Questions de Cours
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          1) Décris une expérience montrant la transformation de la chaleur en travail. (3 pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          2) Énonce les principes fondamentaux de la calorimétrie. (4 pts)
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>
          II - Exercice
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          On réalise l'électrolyse d'une solution de sulfate de zinc dans un électrolyseur traversé par un courant de 2,5 ampères pendant 12 minutes.
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          a) Écris l'équation de dissociation. (1 pt)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          b) Écris l'équation de la réaction à la cathode de l'électrolyseur. (1 pt)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          c) Calcule la masse de zinc déposée à la cathode de l'électrolyseur. On donne : M(Zn) = 65 g/mol ; 1 F = 96500 C/mol. (1 pt)
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>
          B - Chimie (10 points)
        </Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>
          890 - Questions de Cours
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          1) Cite les particules fondamentales de l'atome. (3 pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          2) L'action du dichlore sur le méthane conduit à des produits de substitution ou de destruction. Précise les conditions favorables à l'un ou l'autre de ces deux phénomènes. Écris et équilibre les équations relatives à chaque cas. (4 pts)
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>
          Exercice (3 pts)
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          On réalise les conditions d'obtention du dérivé di-substitué par l'action du dichlore sur le méthane. Sachant qu'on a utilisé 4,8 g de méthane, calcule :
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          a) La masse de corps substitué formé.
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          b) Le volume de gaz chlorhydrique dégagé.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          On donne : M(Cl) = 35,5 g/mol ; M(H) = 1 g/mol ; M(C) = 12 g/mol.
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

export default Physique2024;