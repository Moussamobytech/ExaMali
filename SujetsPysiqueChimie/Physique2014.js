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

const Physique2014 = () => {
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
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2014</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>A - PHYSIQUE</Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>I - Question de Cours : (6 points)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1- Donne l’enoncé des principes des actions réciproques d’équilibre d’un treuil (2 pts).
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2- Donne le principe de fonctionnement et la condition d’équilibre d’un treuil (2 pts).
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          3- Donne les facteurs de la quantité de chaleur dégagée par le passage d’un courant électrique dans un conducteur ohmique. Donne une formule de cette quantité électrique en précisant les unités (2 pts).
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>II - Exercice : (4 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Une lampe d’une puissance de 20 watts fonctionne sous une tension de 15 volts.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          a- Calcule :
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1- L’intensité du courant qui traverse la lampe.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2- La résistance de la lampe.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          3- L’énergie consommée en 12 heures de fonctionnement.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>B - CHIMIE</Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>I - Question de Cours : (7 points)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1- Définit une oxydation ; une réduction (2 pts).
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2- Décris l’expérience de réduction de la vapeur d’eau par le fer (croquis du dispositif expérimental) (5 pts).
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>II - Exercice : (6 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          On réduit 150 g de vapeur d’eau par le fer au rouge.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1- Calcule l’équation bilan de la réaction.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2- Calcule la quantité bilan de la réaction, la masse d’oxyde magnétique formé et le volume de gaz dégagé.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          On donne : [M(H)] = 1 g/mol ; [M(O)] = 16 g/mol ; [M(Fe)] = 56 g/mol ; Volume molaire normal : Vo = 22.4 L/mol.
        </Text>

        <Text style={[styles.instruction, dynamicStyles.text]}>
          Adamou Traoré Professeur – Lycée Technique Bamako
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

export default Physique2014;