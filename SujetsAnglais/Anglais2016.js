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

const Anglais2016 = () => {
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
            <Text style={[takenstyles.toggleText, dynamicStyles.toggleText]}>
              {isDarkMode ? 'ON' : 'OFF'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2016</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>Text: War and Rebellion</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Nowadays many people are becoming more and more pitiless, looking for nothing but their own interests. Quietness disturbs some of them. So, those ones decide to use weapons to reach their goals. Dialogue which allows us to understand each other is less considered. The result of this awkward situation is that many areas in the world are blazing up, that is to say, are on fire. People are dying anyhow. Some citizens run away from their countries to peaceful areas in other countries, and therefore become refugees. Others stay, change localities. Our country has experienced these two situations since 2012. Everywhere, and all the time our dreams are troubled. Let’s pray God to bring peace ...
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Notes: nowadays = actuellement, de nos jours; weapons = des armes ; awkward = difficile; blaze up = s’enflammer, s’embraser ; refugees = des réfugiés.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>I - Comprehension questions: (7 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1) Is this text about peace?
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2) What are a lot of people becoming?
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          3) Do we like peace?
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          4) Who are those who take up arms to reach their goals?
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          5) What has our country experienced since 2012?
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          6) What does Mali need more now?
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>II - Complete each of these sentences with the correct "tag-question" (2 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1) We have been living in Mali, ________ ?
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2) Many people are becoming more and more pitiless, ________ ?
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>III - Translate into English: (5 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1) Many people are coming and more people ________ ?
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2) It is our case in Mali.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          3) Fanta does not love Karim, ________ ?
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          4) You have taken my pen, ________ ?
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>IV - Complete these sentences with “since”, “for” or “ago”: (2 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1) We have been living in Mali ________ five years.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2) Souleymane went to the USA a week ________.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          3) Mohamed left Abidjan ________ January, 22nd, 2008.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          4) She has been ill ________ last week.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>V - Translate into French: (5 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1) Souleymane avait plus de six ans.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2) La paix dérange certains d’entre eux.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          3) Les réfugiés s’enfuient vers les zones paisibles.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          4) Ousmane vient de partir au marché.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          5) Mon père ira à la Mecque l’année prochaine.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>VI - Essay: (4 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Is war or rebellion a good thing? Why or why not? (in 6 lines)
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

export default Anglais2016;