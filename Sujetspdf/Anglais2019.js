import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Anglais2019 = () => {
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

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={dynamicStyles.title}>DEF 2019</Text>
        <Text style={dynamicStyles.heading}>ENGLISH EXAM</Text>

        <Text style={dynamicStyles.sectionTitle}>Text:</Text>
        <Text style={dynamicStyles.text}>
          Hafesatou is a particular housewife. She is married and has two children: Soulé and Sitan. Her husband, Mister Ousmane DIARRA, is a farmer. Mr. and Mrs. DIARRA live peacefully in a small village, Koloni, near Mopti. Their son Soulé is five years old. Their daughter Sitan is three.{"\n\n"}
          She always gets up early in the morning. In rainy season after breakfast, Ousmane takes his hoe and goes to the field. His wife does the housework. She washes the dishes, sweeps the floor, pounds millet and cooks for the family. She carries the food in a large calabash on her head to the field. While her husband eats and takes a small rest there, Hafesatou helps her husband for an hour or two, then carries home some firewood. After the evening meal, she washes again the dishes, does other useful work before going to bed.
        </Text>

        <Text style={dynamicStyles.note}><Text style={{ fontWeight: 'bold' }}>Notes:</Text> housework = travaux ménagers; rest = repos; firewood = bois de chauffage</Text>

        <Text style={dynamicStyles.sectionTitle}>I. Comprehension questions: (6 points)</Text>
        <Text style={dynamicStyles.text}>1) Give a title to the text.</Text>
        <Text style={dynamicStyles.text}>2) What is Mr DIARRA?</Text>
        <Text style={dynamicStyles.text}>3) Who is he?</Text>
        <Text style={dynamicStyles.text}>4) Where do Mr and Mrs DIARRA live?</Text>
        <Text style={dynamicStyles.text}>5) How do they live in Koloni?</Text>
        <Text style={dynamicStyles.text}>6) When does Mrs DIARRA get up?</Text>

        <Text style={dynamicStyles.sectionTitle}>II. Grammar: (3 points)</Text>
        <Text style={dynamicStyles.text}>Write this passage in the simple past:</Text>
        <Text style={dynamicStyles.text}>“Mr and Mrs DIARRA live in a small village. Hafesatou does the housework. She washes the dishes, sweeps the floor, pounds millet and cooks for the family.”</Text>

        <Text style={dynamicStyles.sectionTitle}>III. Translation: (6 points)</Text>
        <Text style={dynamicStyles.text}>1) Soulé est plus âgé que Sitan.</Text>
        <Text style={dynamicStyles.text}>2) Hafesatou est plus courageuse que Fatim.</Text>
        <Text style={dynamicStyles.text}>3) Elle travaille aussi dur que son mari.</Text>
        <Text style={dynamicStyles.text}>4) Ils habitent près de Mopti depuis 2002.</Text>
        <Text style={dynamicStyles.text}>5) Ousmane a acheté son champ il y a 15 ans.</Text>
        <Text style={dynamicStyles.text}>6) Je me lève tôt le matin.</Text>

        <Text style={dynamicStyles.sectionTitle}>IV. Composition: (5 points)</Text>
        <Text style={dynamicStyles.text}>What do you do at home when you are free?</Text>
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
    marginBottom: 20,
  },
  returnImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  toggleContainer: {
    padding: 8,
  },
});

export default Anglais2019;
