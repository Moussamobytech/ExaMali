import React, { useState, useMemo } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HistoireGeo2022 = () => {
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

        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: '#f44336', true: '#4CAF50' }}
          thumbColor="#fff"
          accessibilityLabel={`Turn ${isDarkMode ? 'off' : 'on'} dark mode`}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2022</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>Histoire</Text>

        <Text style={[styles.question, dynamicStyles.text]}>
          1 - Donne deux principales caractéristiques de l’administration coloniale française. (5pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          2 - Après avoir nommé quatre (4) résistants à la pénétration coloniale française au Soudan, donne les raisons de leurs échecs. (5pts)
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>Géographie</Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>1. Parmi les cultures industrielles du Mali, il y a une qui a donné au Mali une renommée internationale.</Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          a. Quelle cette culture ? (1pt)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          b. Quelles sont ses produits dérivés ? (2pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          c. Quelles sont ses principales zones de production et de transformation. (3pts)
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>2. C’est la période des vacances scolaires, un élève quitte Sikasso pour se rendre à Kidal par voie terrestre. Il traverse : Ségou, Mopti et Gao avant d’atteindre sa destination.</Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          a. Quelles sont les zones climatiques qu’il connaît désormais ? (2pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          b. Dis les caractéristiques pluviométriques et végétales de ces zones. (2pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          c. Quels sont les sommets qu’il pourrait découvrir ? (1pt)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          d. Quelle est le fleuve qu’il a traversé ?
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          e. Quelles sont les activités économiques que ce fleuve permet de mener ?
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
    text: {
      color: isDarkMode ? '#fff' : '#000',
    },
    sectionTitle: {
      color: isDarkMode ? '#FFD700' : '#00008B',
    },
    header: {
      color: isDarkMode ? '#FFD700' : '#800000',
    },
    sectionSubtitle: {
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
});

export default HistoireGeo2022;