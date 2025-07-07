import React, { useState, useEffect, useMemo } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Dicte2023 = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const dynamicStyles = useMemo(() => getDynamicStyles(isDarkMode), [isDarkMode]);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading after 3 seconds
    }, 3000); // 3000ms = 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Show loading screen while isLoading is true
  if (isLoading) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
        <ActivityIndicator size="large" color={isDarkMode ? '#FFD700' : '#00008B'} />
        <Text style={[styles.loadingText, { color: isDarkMode ? '#fff' : '#000' }]}>
          Chargement du document...
        </Text>
      </View>
    );
  }

  // Main content after loading
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
          accessibilityLabel={`Toggle dark mode ${isDarkMode ? 'off' : 'on'}`}
          accessibilityRole="switch"
          accessibilityState={{ checked: isDarkMode }}
        >
          <View style={[styles.toggleSwitch, dynamicStyles.toggleSwitch]}>
            <Text style={[styles.toggleText, dynamicStyles.toggleText]}>
              {isDarkMode ? 'ON' : 'OFF'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2023</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>
          Épreuve de Dictée et Questions
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Dictée</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          L'un des éléments de base de la personnalité africaine, c'est l'esprit collectiviste. Tout se tient et tous se tiennent. Même aujourd'hui, des employés africains qui gagnent bien leur vie en ville, loin du village d'origine, considèrent plus ou moins leurs revenus comme une part du bien commun familial et en font profiter largement les membres du groupe.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Un propriétaire de troupeau n'osera pas mobiliser ce capital en vendant quelques têtes de bétail, car ce serait porter atteinte au capital de prestige que ce troupeau représente pour la famille. Un autre n'hésitera pas à se dépouiller d'une bonne partie de sa fortune au profit d'un griot éloquent qui aura exalté en public les hauts faits de ses descendants.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Couramment, des inconnus qui se rencontrent, s'appellent frères et sœurs.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Joseph Ki Zerbo
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Questions</Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          1) Donne un titre à la dictée. (4 pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          2) Explique les expressions : esprit collectiviste, les hauts faits de ses descendants. (4 pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          3) Analyse grammaticalement les mots soulignés dans le texte. (4 pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          4) Analyse la 5ème phrase du texte. (4 pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          5) Mets la dernière phrase du texte au futur simple de l'indicatif. (4 pts)
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    marginTop: 16,
  },
});

export default Dicte2023;