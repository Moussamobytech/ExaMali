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

const Physique2011 = () => {
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
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2011</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>I - PHYSIQUE</Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Question de Cours : (7 points)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1-a) Décris une expérience montrant la transformation de la chaleur en travail (3 pts).
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          b) Définis le rendement d’un moteur à explosion donné la formule (1 pt).
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2-a) montre à partir d’une expérience que la quantité d’électricité est une grandeur mesurable (2 pts).
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          b) Écris l’expérience de la quantité d’électricité en précisant les unités dans le système international (S.I) (1 pt).
        </Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Exercice : (3 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Une lampe à incandescence alimentée par une batterie d’accumulateurs est parcourue par un courant d’intensité 0.25A. Elle fonctionne pendant 6h par jour. Calcule en coulombs et en ampères-heures la quantité d’électricité qu’elle traverse en une semaine.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>II - CHIMIE</Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Question de Cours : (6 points)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1- Explique la préparation de l’alcool éthylique par fermentation alcoolique (2 pts).
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2- Réduction de l’acide sulfurique concentré et chaud par le cuivre (4 pts).
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Dispose expérimentale - Interprétation - Équation bilan.
        </Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Exercice : (4 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          On traite le cuivre par de l’acide sulfurique concentré et bouillant. Le volume du gaz obtenu est de 1 L (1 litre) à TPN.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          a) Écris l’équation bilan de la réaction (1 pt).
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          b) comment identifie –t- on le gaz qui se dégage. (1pt).
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
        c)-Calcule la masse de cuivre attaqué. (1pt) 
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
        d)-Calcule la masse de sulfate de cuivre il obtenue. (1pt) 
        
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
        On donne : M(Cu) =64g/mol ; M(S) =32g/mol ;
M(O) =16g/mol; M(H) = 1g/mol; volume molaire normal: VO= 22.4L/mol. 
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
  scrollContainer: {
    paddingBottom: 20,
  },
});

export default Physique2011;