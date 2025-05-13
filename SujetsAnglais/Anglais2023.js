import React, { useState, useMemo } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Anglais2023 = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dynamicStyles = useMemo(() => getDynamicStyles(isDarkMode), [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <View style={dynamicStyles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Anglais')}
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
          Épreuve d'Anglais - Durée : 2 heures - Coefficient : 2
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Text: Grandfather Comes Back Home</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Grandfather stayed in Lagos for a long time. After three weeks he decided to go back to his village. Bola went to see him off at the lorry-park.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Grandfather got into the lorry and saw an old friend from his village. When the lorry was full, the driver got in and they left the lorry-park. The old lorry went very slowly and noisily along the main road towards Oshogbo. Soon, most of the passengers stopped talking and some of them went to sleep. Suddenly there was a loud bang and the lorry stopped at the side of the road. The driver jumped out and opened the bonnet. The engine was broken down. He tried to repair it, but he couldn't. He looked for a mechanic in the village...
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>
          I. q15. Comprehension Questions: (7 points)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          1) How long did Grandfather stay in Lagos?
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          2) Who went to see him off at the lorry-park?
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          3) Whom did Grandfather see when he got into the lorry?
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          4) When did they start their journey?
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          5) What happened to the engine after the loud bang?
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          6) Could the driver repair his engine?
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          7) What did he do to fix his engine?
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>
          II. q16. Translate into English: (8 points)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          1) La sœur de Karim MAIGA est allée à Lagos il y a 16 jours. (2 pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          2) La plupart des passagers se sont endormis, n'est-ce pas ? (2 pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          3) Qui est prêt à m'accompagner à l'aéroport demain matin ? (1 pt)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          4) Cet Ex-Premier Ministre habite dans ce quartier il y a 9 ans. (2 pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          5) Ma moto est tombée en panne hier soir vers minuit. (1 pt)
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>
          III. Essay: (5 points)
        </Text>
        <Text style={[styles.instruction, dynamicStyles.text]}>
          What means of transport do you prefer? Give your reasons.
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

export default Anglais2023;