import React, { useState, useMemo } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Biologie2020 = () => {
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

         <TouchableOpacity onPress={toggleDarkMode} style={styles.toggleContainer}>
                                     <View style={[styles.toggleSwitch, dynamicStyles.toggleSwitch]}>
                                       <Text style={[styles.toggleText, dynamicStyles.toggleText]}>
                                         {isDarkMode ? 'ON' : 'OFF'}
                                       </Text>
                                     </View>
                                   </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2020</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>Questions de cours :</Text>

        <Text style={[styles.question, dynamicStyles.text]}>
          1) Définis les mots suivants : l’articulation ; l’entorse ; la scoliose ; la fracture.
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          2) Énumère deux propriétés des muscles et les différents types de muscles.
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          3) Cite les éléments du tube digestif.
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          4) Cite les glandes digestives.
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>Exercice :</Text>

        <Text style={[styles.question, dynamicStyles.text]}>
          Trouve parmi les éléments suivants ce qu’un muscle en action consomme ou rejette :
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          l’oxygène, le glucose, l’eau, le gaz carbonique, la chaleur et les sels minéraux.
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

export default Biologie2020;