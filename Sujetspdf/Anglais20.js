import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Anglais20 = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const dynamicStyles = getDynamicStyles(isDarkMode);

  return (
    <View style={dynamicStyles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('AccueilMaitre')}>
          <Image
            source={require('./../Asset/return.png')}
            style={styles.returnImage}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleDarkMode} style={styles.toggleContainer}>
          <View style={[styles.toggleSwitch, dynamicStyles.toggleSwitch]}>
            <Text style={[styles.toggleText, dynamicStyles.toggleText]}>
              {isDarkMode ? 'ON' : 'OFF'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      
      <ScrollView vertical showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
      <Text style={[styles.header, { color: isDarkMode ? '#FFD700' : '#800000' }]}>DEF 2020</Text>

      <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>
        Text: <Text style={styles.bold}>The family</Text>
      </Text>

      <Text style={[styles.paragraph, dynamicStyles.text]}>
        For African people, the family is a larger circle of members than in European or American context...
      </Text>

      <Text style={[styles.paragraph, dynamicStyles.text]}>
        The typical Malian family is a large one where the father may have two, three or four wives...
      </Text>

      <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>I. Comprehension questions (5 points)</Text>
      {[
        'What is the traditional family generally composed of?',
        'Compare the African family to the European one.',
        'How many children may a wife have?',
        'How long may our children live with our relatives?',
        'How are our children treated in our relatives’ families?'
      ].map((q, i) => (
        <Text key={i} style={[styles.question, dynamicStyles.text]}>{i + 1}. {q}</Text>
      ))}

      <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>II. Grammar (5 points)</Text>
      <Text style={[styles.instruction, dynamicStyles.text]}>
        Identify the verbs in these sentences and put them into the preterit:
      </Text>
      {[
        'This man speaks too much, and also lies a lot.',
        'They tell the truth at our meeting and leave immediately.',
        'Her friend sells clothes.'
      ].map((s, i) => (
        <Text key={i} style={[styles.question, dynamicStyles.text]}>{i + 1}. {s}</Text>
      ))}

      <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>III. Translation (5 points)</Text>
      {[
        'Ousmane a travaillé dans cette société pendant 25 ans.',
        'Fanta n’est pas arrivée il y a 8 minutes.',
        'On est en train de construire un pont sur leur route.',
        'Ne faites pas de bruit, mon bébé dort.'
      ].map((t, i) => (
        <Text key={i} style={[styles.question, dynamicStyles.text]}>{i + 1}. {t}</Text>
      ))}

      <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>IV. Essay (5 points)</Text>
      <Text style={[styles.instruction, dynamicStyles.text]}>
        Do you prefer living in a large family or in a nuclear one?{"\n"}Give your reasons.
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
  toggleContainer: {
    marginLeft: 'auto',
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
  toggleText: {
    fontSize: 12,
  }
});

export default Anglais20;
