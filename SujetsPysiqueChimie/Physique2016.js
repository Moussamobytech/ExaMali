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

const Physique2016 = () => {
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
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2016</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>I - PHYSIQUE (10 pts)</Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Questions de cours</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          a) Énonce les lois qualitatives de l’électrolyse.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          b) Définis le courant électrique dans un conducteur métallique et dans un électrolyte.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          c) Définis l’intensité du courant électrique puis précise son unité de mesure.
        </Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>2 - Application Numérique :</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Une ampoule électrique s’allume pendant 2 heures et 25 minutes. Déterminer en coulomb et en ampères heures la quantité d’électricité qui a traversée cette ampoule électrique sachant que l’intensité du courant est de 0.45 A.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>II - CHIMIE (10 pts)</Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>I - Questions de cours</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Décris l’expérience de la réduction de la vapeur d’eau par le fer :
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          a) Dispositif expérimental
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          b) Interprétation
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          c) Équation de la réaction
        </Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>2 - Application :</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          On réduit 50,4g de vapeur d’eau par le fer.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          a) Écris l’équation chimique de la réaction.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          b) Calcule la masse d’oxyde magnétique de fer formé.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          c) Calcule le volume d’hydrogène dégagé.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          On donne M(Fe) = 56g/mol ; M(O) = 16g/mol ; M(H) = 1g/mol Volume molaire normal : V = 22,4l/mol.
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

export default Physique2016;