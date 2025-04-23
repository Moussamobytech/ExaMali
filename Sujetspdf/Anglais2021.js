import React, { useState, useMemo } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Anglais2021 = () => {
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
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2021</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>
          Text: <Text style={styles.bold}>School nowadays</Text>
        </Text>

        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Most of the men believe in school, but some of them are becoming less and less interested in it. What can we plan for our children’s future? Time has come to know that education is not the work of the only teacher, many parents think that it is sufficient to write the child’s name at school and dress him up. Some students believe that going to school is just going to theater. In class they talk, laugh, and tease each other. Outside the classroom, they spend most of their time listening to music, dancing, drinking tea, smoking cigarettes or manipulating their cellular telephones. They never do well at school.
        </Text>

        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Parents, teachers and pupils must join their forces with a clear conscience to make our school efficient and noble.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>I. Comprehension questions (7 points)</Text>
        {[
          'Is school important to many parents today?',
          'What do some of them think is sufficient?',
          'What do some pupils do when the teacher is giving his lesson?',
          'Choose the best answer:\n   a) Parents and teachers must join their efforts.\n   b) Teachers and pupils must work together.\n   c) We must join our efforts.'
        ].map((q, i) => (
          <Text key={i} style={[styles.question, dynamicStyles.text]}>{i + 1}. {q}</Text>
        ))}

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>II. Translate into English (8 points)</Text>
        {[
          'Beaucoup de gens pensent que l’éducation est l’affaire des enseignants seulement.',
          'Tu n’aimes pas l’école, n’est-ce pas ?',
          'Notre pays cherche la paix depuis 2012.',
          'L’élève que tu vois là-bas est le plus intelligent de notre classe.'
        ].map((t, i) => (
          <Text key={i} style={[styles.question, dynamicStyles.text]}>{i + 1}. {t}</Text>
        ))}

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>III. Essay (5 points)</Text>
        <Text style={[styles.instruction, dynamicStyles.text]}>
          Do you like school? Why or why not? (Not more than 8 lines)
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

export default Anglais2021;