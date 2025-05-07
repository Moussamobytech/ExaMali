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

const Physique2012 = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dynamicStyles = useMemo(() => getDynamicStyles(isDarkMode), [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <View style={dynamicStyles.container}>
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
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2012</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>I - PHYSIQUE</Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Question de Cours : (7 points)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1-a) Partie d’une application de la loi de Faraday :
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          a) Décris le processus de purification de certains métaux (3 pts).
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          b) Qu’est-ce que la galvanoplastie ? (1 pt).
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2- Décris l’électrolyse d’une sulfate de cuivre avec anode en cuivre :
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Expérience, interprétation, équation de la réaction à la cathode (3 pts).
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>II - Application Numérique : (3 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Calcule la masse de cuivre déposée en un quart d’heure dans un voltamètre à sulfate de cuivre par un courant de 3.6 A.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          On donne M(Cu) = 64 g/mol ; 1F = 96 500C/mol.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>III - CHIMIE</Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Question de Cours : (7 points)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1-a) Définis : une réaction chimique, une équation chimique, le nombre de masse d’un atome (1.5 pts).
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          b) Fais la représentation de la structure électronique des atomes suivants : 27/13 Al, 23/11 Na, 16/8 O donne le nombre de protons et de neutrons contenus dans le noyau de chacun de ces atomes (2.5 pts).
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2- Décris l’expérience-interprétation-équation bilan (3 pts).
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Application Numérique : (3 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          On réduit 160 g d’oxyde de cuivre II par un courant d’oxyde de carbone.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
        a- Calcule le volume du gaz formé.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
        b- La masse de cuivre obtenu. 
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
        On donne : M(Cu) = 64 g/mol ; M(O) = 16 g/mol ; M(C) = 12 g/mol ; 
        Volume molaire normal : Vo = 22,4 L/mol. 

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

export default Physique2012;