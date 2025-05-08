import React, { useState, useMemo } from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Anglais2017 = () => {
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

        <TouchableOpacity
          onPress={toggleDarkMode}
          style={styles.toggleContainer}
          accessibilityLabel={`Turn ${isDarkMode ? 'off' : 'on'} dark mode`}
          accessibilityRole="switch"
        >
          <View style={[styles.toggleSwitch, dynamicStyles.toggleSwitch]}>
            <Text style={[styles.toggleText, dynamicStyles.toggleText]}>
              {isDarkMode ? 'ON' : 'OFF'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2017</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>Text: A Market Day</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Yesterday, I went to the market to buy some food for my family. I saw many people buying and selling. Some women were selling fresh vegetables like tomatoes, cabbages, carrots, potatoes, and onions. Others were selling fish and meat. I bought some fish, beef, and vegetables. I also bought some fruits like oranges, bananas, and mangoes. There were some people selling clothes and shoes. The market was noisy, and everyone was busy. After shopping, I was very tired but happy. I returned home to cook a delicious meal for my family.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Notes: market = marché; beef = bœuf; fresh vegetables = légumes frais; noisy = bruyant.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>I - Comprehension questions: (7 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1) Where did the writer go yesterday?
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2) What did the writer buy at the market?
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          3) What were some women selling?
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          4) How did the writer feel after shopping?
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          5) Why did the writer return home?
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>II - True or False: (4 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1) The writer went to the market to buy clothes.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2) The market was quiet.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          3) The writer bought some fruits.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          4) The writer was tired after shopping.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>III - Grammar: Put the verbs in brackets into the past tense (preterit): (4 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1) I (go) to the market yesterday.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2) She (buy) some vegetables.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          3) We (see) many people at the market.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          4) He (return) home after shopping.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>IV - Translate into French: (5 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1) I went to the market to buy some food.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2) Some women were selling fresh vegetables.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          3) I also bought some fruits.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          4) The market was noisy.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          5) I returned home to cook a delicious meal.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>V - Essay: (5 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Describe a day you went to the market. What did you see and buy? (in 6 lines)
        </Text>

        <Text style={[styles.instruction, dynamicStyles.text]}>
          Adamou Traoré Professeur – Lycée Technique Bamako
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
  instruction: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 16,
    textAlign: 'center',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
});

export default Anglais2017;