import React, { useState, useMemo } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Anglais2022 = () => {
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
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2022</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>
          Text: <Text style={styles.bold}>Life in the city</Text>
        </Text>

        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Life in the city is full of activities. Early in the morning hundreds of people rush out their homes in the manner ants do when their nest is broken. Soon the streets are full of traffic. Shops and offices open. Students flock to their schools and the day’s work begins.
        </Text>

        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Towards the evening, the offices, day schools, and shops begin to close. There is now a rush for buses and other means of transport. Everyone is in a hurry to reach home. As a result of this rush, many accidents happen.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>I. Comprehension questions (5 points)</Text>
        {[
          'Are there many activities in the cities?',
          'How are the streets in the morning in city?',
          'When do offices and shops close?',
          'What happen at rush hours?',
          'Are there many people in the city?'
        ].map((q, i) => (
          <Text key={i} style={[styles.question, dynamicStyles.text]}>{i + 1}. {q}</Text>
        ))}

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>II. True/False statements (5 points)</Text>
        {[
          'There are a lot of activities in the city.',
          'In the morning people leave their homes like ants.',
          'Shops and offices begin to close in the morning.',
          'Many accidents happen because people are in a hurry.',
          'People are in a hurry to arrive home in the morning.'
        ].map((s, i) => (
          <Text key={i} style={[styles.question, dynamicStyles.text]}>{i + 1}. {s}</Text>
        ))}

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>III. Grammar (5 points)</Text>
        <Text style={[styles.instruction, dynamicStyles.text]}>
          Complete these sentences with since, for or ago:
        </Text>
        {[
          'She has been working with me .......... 2000.',
          'Her aunt has been in Bamako .......... 14 years.',
          'They have been waiting for you .......... thirty minutes.',
          'Two years .........., you left Kidal.',
          'We are in exam in .......... school three days ..........'
        ].map((g, i) => (
          <Text key={i} style={[styles.question, dynamicStyles.text]}>{i + 1}. {g}</Text>
        ))}

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>IV. Essay (5 points)</Text>
        <Text style={[styles.instruction, dynamicStyles.text]}>
          Do you prefer village life or city life? Why? (Not more than 10 lines).
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
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FF8C00',
        marginBottom: 10,
      },
      heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        color: isDarkMode ? '#fff' : '#000',
      },
      sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        color: isDarkMode ? '#FFD700' : '#00008B',
      },
      text: {
        fontSize: 16,
        color: isDarkMode ? '#fff' : '#000',
        marginBottom: 4,
      },
      note: {
        fontSize: 15,
        fontStyle: 'italic',
        marginTop: 8,
        marginBottom: 10,
        color: isDarkMode ? '#aaa' : '#333',
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

export default Anglais2022;