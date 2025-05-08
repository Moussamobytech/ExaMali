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

const Anglais2012 = () => {
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
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2012</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>TEXT: How to reduce road accidents?</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          In Mali, the number of road accidents is getting more and more increasing yearly. That is why the authorities are investigating more and more about the behaviour in the traffic. What must we do to reduce accidents? Pedestrians must never run across the road and must cross it safely. As for drivers, they must not use old engines without brakes and good wheels. They must also get a traffic license before driving any engine.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>I - Comprehension questions (5 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1) What are the causes of accidents in the text?
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2) How must pedestrians cross the road?
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          3) What must a driver get before driving any engine?
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          4) What must a driver do before driving any engine?
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>II - True or False (4 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1) In Mali, there are a lot of accidents.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2) We are all responsible for road accidents.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          3) A driver need not a driving license to drive.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          4) Pedestrians must run across the road.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>III - Grammar : Complete with must or mustn’t (3 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1 - Pedestrians ________ cross our engine before using it.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2 - A pedestrian ________ cross a road at a bend.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          3 - Every driver ________ be careful.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>IV - Theme : Translate into English (4 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1 - Un enfant doit se tenir dans une file pour traverser la route.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2 - Un piéton doit regarder à droite puis à gauche avant de traverser la route.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          3 - Un enfant doit demander à un adulte avant de traverser la route.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>V - ESSAY (5 pts)</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          One day when going to school you saw a bad accident. Say in 6 lines what you saw and what you did.
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

export default Anglais2012;