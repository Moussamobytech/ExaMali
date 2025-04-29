import React, { useState, useMemo } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Redaction2022 = () => {
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
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2022</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>Français - Épreuve de Rédaction</Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>I</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          C’est la fin de l’année scolaire. Les maîtres ont régulièrement donné les cours suivis d’évaluations afin que les élèves aient les connaissances et compétences requises pour réussir à l’examen du diplôme d’études fondamentales. Parmi tes maîtres, il y a un qui t’a particulièrement marqué par sa façon d’enseigner.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Tu décides de lui adresser une lettre de remerciements.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>Rédige ta lettre.</Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>II</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          C’est le début de la saison des pluies ; un soir pendant que tu jouais au ballon, la première tornade longtemps attendue se déclenche enfin.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Décris-la, observe la nature et les êtres pendant et après cette tornade.
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>III</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          gouvernement des enfants de ton école.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Afin d’organiser des journées de sensibilisations sur ces droits, le bureau du gouvernement te charge d’adresser une demande d’aide financière à une ONG partenaire de votre école.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>Rédige la lettre</Text>
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

export default Redaction2022;