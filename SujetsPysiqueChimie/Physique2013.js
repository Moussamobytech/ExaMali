import React, { useState, useMemo } from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Physique2013 = () => {
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

        <TouchableOpacity
          onPress={toggleDarkMode}
          style={styles.toggleContainer}
          accessibilityLabel={`Turn ${isDarkMode ? 'off' : 'on'} dark mode`}
          accessibilityRole="switch"
        >
          <View style={[styles.toggleSwitch, dynamicStyles.toggleSwitch]}>
            <Text style={[styles.toggleText, dynamicStyles.toggleText]}>
              {isDarkMode ? 'ON' : 'OFF'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2013</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>I - PHYSIQUE</Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Question de Cours : (6 points)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1- Enonce les principes fondamentaux de la calorimétrie (2 pts).
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2- Décris une expérience mettant en évidence le principe de la machine à vapeur (2 pts).
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          3- A l’aide de schémas, résume le cycle à quatre temps du moteur à explosion (2 pts).
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>II - Exercice : (4 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          La manivelle d’un treuil a 40 cm de rayon. Le cylindre sur lequel s’enroule la corde a un rayon de 15 cm. On utilise ce treuil pour tirer une charge de 10 m. le long d’un plan incliné de 30° par rapport à l’horizontale sur une distance de 10 m. On a une longueur de manivelle de 60 cm.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          a- Calcule la force exercée perpendiculairement sur la manivelle quand on tire un seul employé content 10 litres d’eau dont le poids est 98.1 N.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          b- Calcule la distance de tours de manivelle pour tirer un seul d’eau.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          c- Calcule la distance parcourue par l’employé de la manivelle pour tirer un seul d’eau. On donne le périmètre de tambour P = 2 π r.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>III - CHIMIE</Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Question de Cours : (7 points)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1- Enonce deux comparaisons entre action du chlore sur le méthane et l’éthylène (4 pts).
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          a- Décris le dispositif expérimental ;
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          b- Faire l’interprétation ;
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          c- Écris les équations chimiques correspondantes.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2- Préparation du méthane au laboratoire (3 pts).
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          a- Fais le schéma du dispositif expérimental ;
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          b- Décris l’expérience ;
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          c- Écris l’équation de la réaction.
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Exercice : (3 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          On fait agir de l’eau en excès sur 50 g de carbure d’aluminium contenant 20% d’impuretés calcaire.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1- Calcule le volume de méthane obtenu.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2- La masse d’hydroxyde d’aluminium formé.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          On donne : [M(C)] = 12 g/mol ; [M(Al)] = 27 g/mol ; [M(H)] = 1 g/mol ; [M(O)] = 16 g/mol ; volume molaire normal : Vo = 22.4 L/mol.
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
  instruction: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 16,
    textAlign: 'center',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
});

export default Physique2013;