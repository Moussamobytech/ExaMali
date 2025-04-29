import React, { useState, useMemo } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Redaction2020 = () => {
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
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2020</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>Français - Sujets au Choix</Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Sujet I</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Tu as décidé de l’embrasser un métier pour lequel tu sens se développer en toi une attirance presque irrésistible.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Ton père te propose un choix différent du tien.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Pour le convaincre à te laisser sur la voie que tu as choisie, tu lui adresses une lettre dans laquelle tu lui expliques les raisons et les avantages de ton choix.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>Fais-nous lire ta lettre.</Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Sujet II</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Au cours d’un voyage ou d’une promenade, tu as découvert un paysage où, les chants d’oiseaux, les couleurs et odeurs agréables des fleurs, le bruit de l’écoulement de l’eau sur les rochers, la diversité des animaux qui paissent dans une végétation luxuriante et le vent léger qui souffle sous un ciel clair, offrent un bel univers très animé.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>Décris-le.</Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Sujet III</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Tu es déclaré définitivement admis à l’examen du Diplôme d’Études Fondamentales (DEF). Pour l’obtention de ton attestation de diplôme, tu adresses une demande au Directeur du Centre d’Animation Pédagogique dont relève ton école.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>Rédige ta demande.</Text>
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

export default Redaction2020;