import React, { useState, useEffect, useMemo } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Dicte2012 = () => {
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
          onPress={() => navigation.navigate('Dicte')}
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
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2012</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>DICTÉE :</Text>

        <Text style={[styles.paragraph, dynamicStyles.text]}>
          À <Text style={styles.bold}>trois ans</Text>, il se traînait encore à quatre pattes, tandis que les enfants de la même année que lui marchaient déjà ;
          il avait une tête si grosse qu’il semblait incapable de la supporter ; il avait de gros yeux qu’il ouvrait tout grand(s) quand <Text style={styles.bold}>quelqu’un</Text> entrait dans la case de sa mère.
          Peu bavard, l’enfant royal passait tout le jour assis au milieu de la case, son index en sa narine, et il se traînait à quatre pattes pour fureter dans les calebasses à la recherche de nourriture :
          il était très <Text style={styles.bold}>gourmand</Text>, il parlait peu.
        </Text>

        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Son visage sévère ne s’était jamais détendu par un sourire. Ce qui amusait les enfants de son âge l’ennuyait ; souvent Sogolon en faisait venir près de lui pour lui tenir compagnie.
          La mère espérait que Djala, en voyant ses camarades marcher, serait tenté d’en faire autant. Mais rien n’y fit.
        </Text>

        <Text style={[styles.paragraph, dynamicStyles.text]}>
          D’ailleurs, de ses bras vigoureux, he <Text style={styles.bold}>assommait</Text> plutôt les pauvres petits et ceux-ci ne voulaient plus l’approcher.
        </Text>

        <Text style={[styles.author, dynamicStyles.text]}>Djibril Tamsir Niane : (Soundiata)</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>Questions : (45 mn)</Text>

        <Text style={[styles.question, dynamicStyles.text]}>
          1) Donne un titre à la dictée en le justifiant. (4 pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          2) Explique : « il se traînait à quatre pattes » ; fureter ; tenir compagnie ; assommait ; (4 pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>3) Grammaire :</Text>
        <Text style={[styles.subQuestion, dynamicStyles.text]}>
          a) Analyse les mots soulignés dans le texte. (5 pts)
        </Text>
        <Text style={[styles.subQuestion, dynamicStyles.text]}>
          b) Relève dans le texte une phrase négative et transforme-la en phrase interrogative. (2 pts)
        </Text>
        <Text style={[styles.subQuestion, dynamicStyles.text]}>
          c) Analyse logique de la phrase : « il avait de gros yeux qu’il ouvrait tout grand quand…mère ». (5 pts)
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
    textDecorationLine: 'underline',
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
  subQuestion: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 5,
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

export default Dicte2012;