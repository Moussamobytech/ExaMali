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

const Physique2017 = () => {
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
          accessibilityLabel={`Turn ${isDarkMode ? 'off' : 'on'} motar mode`}
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
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2017</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>I - PHYSIQUE</Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Questions de cours :</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          a) Résume le cycle à quatre temps du moteur à explosion (2 pts).
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          b) Cité deux applications de l’effet Joule (2 pts).
        </Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>2) Exercice :</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Une lampe de puissance 20W fonctionne sous une tension de 24V :
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          a) Calcule l’intensité du courant qui traverse cette lampe ;
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          b) La résistance de la lampe ;
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          c) L’énergie dissipée pendant 15 h de fonctionnement pour cette durée, le prix du kilowattheure d’électricité est de 60 FCFA.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>II - CHIMIE</Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Questions de cours :</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          a) Définit les mots suivants : oxydation ; oxyde ; réduction ; réducteur ; oxydo-réduction (4 pts).
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          b) Cité trois usages du zinc (3 pts).
        </Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>2) Exercice :</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Calculer dans les conditions normales, le volume de gaz obtenu par l’action de 2 grammes de zinc, supposé pur, sur l’acide chlorhydrique en excès.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          M(Zn) = 65 g/mol ; M(Cl) = 35.5 g/mol ; Le volume molaire normal = 22.4 L/mol.
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

export default Physique2017;