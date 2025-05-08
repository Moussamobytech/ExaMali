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

const Anglais2015 = () => {
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

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2015</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>I - Text: Buying food</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          My mother went to the store to buy food for family. She preferred to go on Tuesday and Saturday. She tried to go early morning. Usually, there were not many people at the store then. She had to buy a lot of food. Our family ate a lot, so, she bought canned fish and chicken, tomato-paste, fresh meat, sugar, tea, liquid and powder-milk, wheat flour, salt. She did not forget vegetables such as cabbages, carrots, green peas, onions, garlic, and spices like pepper, ginger, peas and chilies. Sometimes, she asked my brother to go with her. He helped her to carry groceries, magazines, and asked my brother to help her. He helped her to carry groceries.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          NB: a store = un magasin; canned-fish = une boîte de sardine; freshmeat = de la viande fraîche; whereflour = de la farine de blé; vegetables = des légumes; spices = des épices.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>II - Comprehension questions (7 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          A) Answer these questions based on the text:
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1) Where did the writer's mother buy food?
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2) What days did she go to the store?
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          3) Who went with her sometimes?
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          4) True statement: Put "T" before true sentences and "F" before the false ones according to the text.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          a) Mother preferred to go to the store every day.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          b) Mother went with her.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          c) She had to buy a little food?
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          d) There were many persons in the store on Tuesday and Saturday.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>III - Grammar : (4 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Put the verbs in brackets into the past (preterit)
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1) She (come) to buy food every week.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2) Last week Hélène (send) me a new car.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>IV - Translate the first four sentences of the text into French : (5 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          "My mother went to the store to buy food for family. She preferred to go on Tuesday and Saturday. She tried to go early morning. Usually, there were not many people at the store then."
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>V - Essay: One day, you went shopping to market. Tell about what you bought (not more than ten lines) (5 pts)</Text>

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

export default Anglais2015;