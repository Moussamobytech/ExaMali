import React, { useState, useMemo } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Anglais2024 = () => {
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
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2024</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>
          Anglais - Durée : 2 heures - Coefficient : 2
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Text: War and Rebellion</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Nowadays many people are becoming more and more pitiless, looking for nothing but their own interests. Quietness disturbs some of them. So, those ones decide to use weapons to reach their goals. Dialogue which allows us to understand each other is less considered. The result of this awkward situation is that many areas in the world are blazing up, that is to say, are on fire. People are dying anyhow.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Some citizens run away from their countries to peaceful areas in other countries, and therefore become refugees. Others stay, but change localities. Our country has experienced these two situations since 2012. Everywhere, and all the time our dreams are troubled. Let's pray God to bring us peace.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Notes: a weapon = une arme ; awkward = délicat, fâcheux ; to blaze up = s'enflammer, s'embraser.
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>
          I. Comprehension Questions: (7 points)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          1) What does the author of this text talk about?
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          2) What are a lot of people becoming?
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          3) Do we all like peace?
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          4) What do we call rebels in this text?
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          5) What is a refugee?
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          6) How do we call people who change localities as a result of rebellion?
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          7) What does our country need now?
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>
          II. Grammar: (4 points)
        </Text>
        <Text style={[styles.instruction, dynamicStyles.text]}>
          A. Complete each of these sentences with the correct tag-question:
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          8) Rebels decide to use weapons to reach their goals, ? (0.5 pt)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          9) Many areas in the world are blazing up, ? (0.5 pt)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          10) Mali has experienced these two situations, ? (0.5 pt)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          11) Fatoumata visited Gao last year, ? (0.5 pt)
        </Text>
        <Text style={[styles.instruction, dynamicStyles.text]}>
          B. Complete each of these sentences either with since, for or ago:
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          12) Amadou left Mali 6 months ..... (0.5 pt)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          13) Her baby has been sleeping ... two hours. (0.5 pt)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          14) He has been with us ..... April 25th. (0.5 pt)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          15) He has become mad ...... he lost this job. (0.5 pt)
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>
          III. Translation: (4 points)
        </Text>
        <Text style={[styles.instruction, dynamicStyles.text]}>
          Translate the last two sentences of the text into French.
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>
          IV. Essay: (5 points)
        </Text>
        <Text style={[styles.instruction, dynamicStyles.text]}>
          Is war or rebellion a good thing? Why or why not? (not more than 10 lines)
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

export default Anglais2024;