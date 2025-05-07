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

const Physique2018 = () => {
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
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2018</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>I - PHYSIQUE</Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>1°) Questions de Cours :</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          a) Cité les trois genres de leviers en donnant un exemple de chacun (3 pts).
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          b) Définis le pouvoir calorifique d’un combustible, donne en quoi elle s’exprime (3 pts).
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          c) Précise le sens conventionnel du courant à l’extérieur d’un générateur. Précise en précisant les unités, la formule de la quantité d’électricité (4 pts).
        </Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>2°) Exercice :</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          a) Calcule en Coulomb puis en Ampères heures, la quantité d’électricité qui traverse une lampe électrique pendant 1h 15mn ; sachant que l’intensité du courant est de 5 A.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          b) Calcule l’intensité du courant qui traverse une fer à repasser sachant qu’en 12 mn la quantité d’électricité qui le traverse est de 5760 Coulombs.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>II - CHIMIE</Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>1°) Questions de Cours :</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          a) Complète puis équilibre s’il y a lieu les équations bilan des corps formés :
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1) Al + O2 → __________
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2) Fe + Cl2 → __________
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          3) Cu + H2SO4 → __________
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          4) Zn + H2O → __________
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          b) Citer deux usages du fer.
        </Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>2°) Exercice :</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          On réduit entièrement 30 grammes de vapeur d’eau par du fer.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          - Écrire l’équation de la réaction ;
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          - Calcule la masse d’oxyde magnétique de formée ;
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          - Calcule le volume d’hydrogène dégagé.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          M(Fe) = 56g/mol ; M(H) = 1 g/mol ; M(O) = 16 g/mol ; Le volume molaire normal est de 22,4L/mol.
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

export default Physique2018;