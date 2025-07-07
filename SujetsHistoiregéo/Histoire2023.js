import React, { useState, useMemo, useEffect } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Histoire2023 = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dynamicStyles = useMemo(() => getDynamicStyles(isDarkMode), [isDarkMode]);

  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

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
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2023</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>
          Épreuve d'Histoire-Géographie
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Histoire</Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          1) Décris les conséquences des progrès scientifiques et techniques pour l'Afrique, au moins en cinq lignes. (5 pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          2) Compare le système colonial français au système colonial anglais. (5 pts)
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Géographie</Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          1) Dessine la carte du Mali. (3 pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          q15. Y place tout autour les pays limitrophes.
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          2) Soit les villes A et B. (3 pts)
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Dans la ville A, la pluviométrie peut atteindre plus de 2000 mm/an ; Dans la ville B, la pluviométrie ne peut atteindre 200 mm/an.
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          Questions:
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          a) Précise la zone climatique dans laquelle se situe chaque ville.
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          b) Caractérise le type de végétation pour chaque zone.
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          3) Présente au moins en cinq lignes l'agriculture au Mali. (4 pts)
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

export default Histoire2023;
