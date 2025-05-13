import React, { useState, useMemo } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Histoire2024 = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dynamicStyles = useMemo(() => getDynamicStyles(isDarkMode), [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <View style={dynamicStyles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Historique')}
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
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2024</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>
          Histoire Géographie - République du Mali - Un Peuple - Un But - Une Foi
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>
          I. 89 Histoire
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          1) Quelle était la politique utilisée par le colonisateur pour faire échouer les résistants africains à la colonisation? (2 pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          2) Pourquoi dit-on que la 2ème guerre mondiale a été favorable à l'éveil de conscience des peuples colonisés? (2 pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          3) Présente au moins en cinq (5) lignes les facteurs qui ont été favorables aux progrès scientifiques et techniques du 19ème siècle. (6 pts)
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>
          II. 90 Géographie
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          A. Le Mali est arrosé par deux fleuves. Ces fleuves jouent un rôle très important dans le développement économique et social du pays à travers l'agriculture, la pêche, la navigation et la production d'électricité.
        </Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>
          889 - Questions
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          1) Donne : la longueur, la source et l'embouchure de chacun de ces fleuves. (1.50 pt)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          2) Nomme le(s) barrage(s) implanté(s) sur chaque fleuve. (1.50 pt)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          3) Écris en cinq (5) lignes les activités économiques que permettent ces barrages. (2 pts)
        </Text>

        <Text style={[styles.paragraph, dynamicStyles.text]}>
          B. Le Mali regorge de beaucoup de ressources minières qui font le convoitise des occidentaux. Parmi ces ressources, il y a une qui occupe une grande place dans le commerce extérieur du pays. Cependant, l'extraction de cette ressource a des conséquences néfastes sur l'environnement et la fréquentation scolaire.
        </Text>
        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>
          90 - Questions
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          1) Nomme cette ressource minière. (1 pt)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          2) Quelles sont les régions dans lesquelles son extraction est faite par des sociétés industrielles? (2 pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          3) Quelles sont les conséquences de son extraction:
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          a) sur l'environnement? (2 pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          b) sur la fréquentation scolaire? (2 pts)
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

export default Histoire2024;