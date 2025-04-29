import React, { useState, useMemo } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Dicte2019 = () => {
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

        <TouchableOpacity onPress={toggleDarkMode} style={styles.toggleContainer}>
          <View style={[styles.toggleSwitch, dynamicStyles.toggleSwitch]}>
            <Text style={[styles.toggleText, dynamicStyles.toggleText]}>
              {isDarkMode ? 'ON' : 'OFF'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2019</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>Français - Dictée</Text>

        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Il faut avoir habité le pays de la soif pour comprendre les délices de cette première pluie. OH ! La première tornade ! Dans un ciel immobile, plombé, une sorte de dôme sombre, un étrange signe du ciel monte de l’horizon … De grands arcs se dessinent dans le ciel, montent toujours, se superposent avec des contours nets, des masses opaques et lourdes. Puis tout à coup une grande rafale terrible, un coup de fouet formidable couche les arbres, les herbes, les oiseaux, fait tourbillonner les vautours affolés, renverse tout sur son passage. C’est la tornade qui se déchaîne ; tout tremble et s’ébranle, la nature se tord sous la puissance effroyable du météore qui passe.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text, styles.bold]}>Pierre Loti</Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Questions :</Text>

        <Text style={[styles.question, dynamicStyles.text]}>
          I - Donne un titre au texte. (2pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          II - Donne le sens des mots et expressions : le pays de la soif, délices, une rafale terrible, puissance effroyable. (4pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          III - Relève des détails du texte qui montrent la puissance de la tornade. (4pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          IV - Transforme la première phrase du texte en phrase interrogative. (4pts)
        </Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>
          V - Dans chacune des phrases suivantes relève la subordonnée et analyse-la. (6pts) :
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          - La grenouille s’enfla si fort qu’elle éclata.
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          - Qui voyage loin ménage sa monture.
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

export default Dicte2019;