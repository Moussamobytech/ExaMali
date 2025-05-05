import React, { useState, useMemo } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Redaction2018 = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dynamicStyles = useMemo(() => getDynamicStyles(isDarkMode), [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <View style={dynamicStyles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Rédaction')}
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
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2018</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>Français - Sujets au Choix</Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Sujet I</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          En t’inspirant de l’actualité des différentes sources d’informations traitant des conditions des migrants clandestins (esclavage, mort en mer ou dans le désert, expulsion, rapatriement etc.), rédige une lettre pour décourager un de tes grands frères tentés par cette aventure.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Explique-lui d’une part les risques auxquels il s’expose et d’autre part les avantages qu’il a à chercher du travail dans son pays.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>Rédige.</Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Sujet II</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Tu as effectué un voyage qui t’a laissé de bons souvenirs.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>Raconte.</Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Sujet III</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          En vue d’organiser une compétition sportive, votre comité scolaire dont tu es membre te charge d’adresser une demande d’aide à une ONG de votre localité.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>Rédige.</Text>
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

export default Redaction2018;