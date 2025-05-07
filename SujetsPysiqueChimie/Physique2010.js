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

const Physique2010 = () => {
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
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2010</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>I - PHYSIQUE</Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Question de Cours :</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1-a) Partie d’une application de la loi Faraday :
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          a) Décris le processus de purification des métaux. b) Qu’est-ce que la galvanoplastie ?
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1-b) Exercice : Le long d’un cylindre d’un treuil à un rayon de 10 cm, la manivelle a une longueur de 50 cm.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1- Détermine l’intensité de la force qu’il faut appliquer à la manivelle pour équilibrer une charge P de 50 N suspendue à la corde.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2- Calcule le travail moteur et le travail résistant pour un tour complet du cylindre.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>II - CHIMIE</Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Question de Cours :</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1-a) Décris l’action d’une solution d’hydroxyde de sodium sur l’aluminium.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Fais l’équation bilan de la réaction.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1-b) Écris le gaz qui se dégage.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2- Fais le compte rendu de l’expérience de la réaction d’oxydation du carbone par l’oxygène avec l’interprétation, équation, bilan et schéma, description de l’expérience.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Exercice : On titre 6 grammes d’aluminium contenu 10 % d’impuretés par une solution d’hydroxyde de sodium en excès.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Calcule le volume du gaz dégagé.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          On donne : [M(Al)] = 27 g/mol ; [M(Na)] = 23 g/mol ; [M(O)] = 16 g/mol ; [M(H)] = 1 g/mol ; volume molaire normal = 22.4 L/mol.
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

export default Physique2010;