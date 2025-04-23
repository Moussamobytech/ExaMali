import React, { useState, useMemo } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SVT19 = () => {
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
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2019</Text>

      <Text style={styles.sectionTitle}>Épreuve de : Biologie DEF 2019</Text>
        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>Questions</Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>A.</Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          1) Définis les termes suivants : Cellule, Absorption intestinale, Toxémie, Organe, Infection microbienne, asepsie, antisepsie. (3pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          2) Citer les différents types de muscles que vous connaissez. (3pts)
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>B.</Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          L’analyse de l’urine d’un élève révèle la présence de sels minéraux, de glucose, d’urée, d’albumine, d’acide urique.
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          1) Indique les constituants anormaux de cette urine. (3pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          2) Cet élève est-il malade ? Si oui précise et donne les causes. (3pts)
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>C.</Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          1) Cite ces trois phases de fonctionnement cardiaque et dit ce qui se passe à chaque phase. (3pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          2) Comment nomme-t-on l’ensemble de ces phases. (3pts)
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>D.</Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          Schéma annoté de l’appareil urinaire de l’homme. (3pts)
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#0000FF',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
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

export default SVT19;