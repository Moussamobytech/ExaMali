import React, { useState, useMemo } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Dicte2014 = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dynamicStyles = useMemo(() => getDynamicStyles(isDarkMode), [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <View style={dynamicStyles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Dictée')}
          accessibilityLabel="Go back"
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
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2014</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>DICTÉE : Le changement</Text>

        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Tu sais aussi bien que moi que les <Text style={styles.bold}>temps ont changé</Text>. De notre temps,
          l’homme n’avait qu’une parole ; aujourd’hui nous sommes en face de gens qui mettent tout leur génie à nourrir leurs semblables de fausses promesses.
        </Text>

        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Pour témoigner notre <Text style={styles.bold}>reconnaissance</Text> aux mille générations qui ont fait
          graduellement ce que nous sommes, il faut perfectionner la nature humaine en nous et autour de nous.
        </Text>

        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Pour remercier dignement les travailleurs innombrables <Text style={styles.bold}>qui</Text> ont rendu notre
          habitation si belle et si commode, il faut la livrer plus belle et plus commode encore aux générations futures.
        </Text>

        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Nous sommes meilleurs et plus heureux que nos devanciers, faisons que notre postérité soit meilleure et plus heureuse que nous.
        </Text>

        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Il n’est pas d’homme si pauvre et si mal doué qui ne puisse contribuer au progrès dans une certaine mesure.
        </Text>

        <Text style={[styles.author, dynamicStyles.text]}>E. About (Le progrès)</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>Questions :</Text>

        <Text style={[styles.question, dynamicStyles.text]}>
          1) Donne un titre à la dictée. (4 pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          2) Quel est le devoir de ceux qui vivent envers les générations futures ? (5 pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          3) Explique : héritiers, postérité et progrès. (3 pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          4) Analyse les mots soulignés dans la dictée. (3 pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          5) Analyse la dernière phrase de la dictée. (5 pts)
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
    textDecorationLine: 'underline',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 24,
    textAlign: 'justify',
  },
  question: {
    fontSize: 16,
    marginTop: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  author: {
    fontStyle: 'italic',
    marginTop: 15,
    textAlign: 'right',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
});

export default Dicte2014;
