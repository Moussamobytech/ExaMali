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

const Anglais2018 = () => {
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
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2018</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>Text: A Letter to a Friend</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Dear Aminata, I hope you are doing well. I am writing to tell you about my recent trip to Bamako. Last week, I visited the capital city with my family. We stayed there for three days. Bamako is a big and busy city with many markets, shops, and restaurants. We visited the Grand Market and bought some traditional clothes and souvenirs. We also ate delicious Malian food like rice with peanut sauce and grilled fish. On the second day, we went to the National Museum to learn about Malian history and culture. I enjoyed the trip so much, and I wish you could have been there with us. I hope to see you soon. Take care! Your friend, Fatoumata.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Notes: trip = voyage; capital city = capitale; souvenirs = souvenirs; museum = musée; culture = culture.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>I - Comprehension questions: (7 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1) Who is the letter addressed to?
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2) Where did Fatoumata go last week?
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          3) How long did Fatoumata and her family stay in Bamako?
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          4) What did they buy at the Grand Market?
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          5) What did they eat in Bamako?
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          6) What did they do on the second day?
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>II - True or False: (4 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1) Fatoumata went to Bamako alone.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2) Bamako is a quiet city.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          3) Fatoumata visited the National Museum.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          4) Fatoumata did not enjoy the trip.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>III - Grammar: Put the verbs in brackets into the past tense (preterit): (4 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1) I (visit) Bamako last week.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2) We (stay) in Bamako for three days.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          3) They (buy) some traditional clothes.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          4) She (write) a letter to her friend.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>IV - Translate into French: (5 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1) I am writing to tell you about my recent trip.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2) Bamako is a big and busy city.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          3) We bought some traditional clothes and souvenirs.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          4) We went to the National Museum.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          5) I enjoyed the trip so much.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>V - Essay: (5 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Write a short letter to a friend about a trip you recently took. (in 6 lines)
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

export default Anglais2018;