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

const Physique2015 = () => {
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
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2015</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>I - PHYSIQUE (10 pts)</Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Questions de cours</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1) Donner les principes graphiques des forces suivantes appliquées au même point A :
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          a) F₁ de direction horizontale et d’intensité 3 N.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          b) F₂ de direction verticale et d’intensité 5 N (Échelle : 1 cm pour 1 N).
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2) Écrire la relation entre le poids d’un corps et sa masse en précisant les unités dans le système S.I.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          3) EXERCICE : La masse d’un vaisseau spatial est m = 2 tonnes.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Calculer le poids du vaisseau sur la Terre puis sur la Lune.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          On donne : g Terre = 9.8 N/Kg ; g Lune = 1.6 N/Kg.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>II - CHIMIE (10 pts)</Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Questions de cours</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1) a) Compléter et équilibrer les équations chimiques suivantes :
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          NaCl + H2SO4 → __________ + __________
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Al(OH)3 + Ca(OH)2 → __________ + __________
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          HNO3 + Ca(OH)2 → __________ + __________
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          b) Nommer tous les corps (réactifs et produits formés).
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2) Le nombre de masse d’un atome est de 127. Son numéro atomique est de 53.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          a) Combien de protons, de nucléons et de neutrons son noyau renferme-t-il ?
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          b) Combien d’électrons cet atome possède-t-il ?
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

export default Physique2015;