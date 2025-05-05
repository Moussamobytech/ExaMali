import React, { useState, useMemo } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Mathematique2010 = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dynamicStyles = useMemo(() => getDynamicStyles(isDarkMode), [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <View style={[styles.container, dynamicStyles.container]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AccueilMaitre')}
          accessibilityLabel="Go back to home"
          accessibilityRole="button"
        >
          <Image source={require('./../Asset/return.png')} style={styles.returnImage} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={toggleDarkMode}
          style={styles.toggleContainer}
          accessibilityLabel={`Toggle dark mode ${isDarkMode ? 'off' : 'on'}`}
          accessibilityRole="switch"
          accessibilityState={{ checked: isDarkMode }}
        >
          <View style={[styles.toggleSwitch, dynamicStyles.toggleSwitch]}>
            <Text style={[styles.toggleText, dynamicStyles.toggleText]}>
              {isDarkMode ? 'ON' : 'OFF'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2010 - Algèbre</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>Sujet de Mathématiques</Text>

        <Text style={[styles.subHeader, dynamicStyles.text]}>Exercice 1 :</Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          On considère le segment AB, rectangle A, soit l’unité de l’hypoténuse BC. Construis l’image de 1 par la translation de vecteur R et l’image de 1 de I par la rotation du vecteur C.{'\n'}- Trace les points I, A, et son aligné.{'\n'}- Monte une figure.
        </Text>

        <Text style={[styles.subHeader, dynamicStyles.text]}>Exercice 2 :</Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          On considère un cercle de centre A et rayon 5 cm. Soit IEFJ un des diamètres M un point du cercle tel que AM = 4 cm et P un point du cercle tel que MP = 3 cm.{'\n'}a) Représente la figure.{'\n'}b) Montre que les segments MA et MP sont perpendiculaires.{'\n'}c) Démontrer que les droites (IF) et (MJ) sont parallèles.{'\n'}d) Calcule la longueur AT.
        </Text>
      </ScrollView>
    </View>
  );
};

const getDynamicStyles = (isDarkMode) =>
  StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? '#000' : '#fff',
    },
    header: {
      color: isDarkMode ? '#FFD700' : '#800000',
    },
    sectionTitle: {
      color: isDarkMode ? '#FFD700' : '#00008B',
    },
    text: {
      color: isDarkMode ? '#fff' : '#000',
    },
    toggleSwitch: {
      backgroundColor: isDarkMode ? '#4CAF50' : '#f44336',
    },
    toggleText: {
      color: isDarkMode ? '#fff' : '#000',
    },
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 50,
  },
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
  toggleSwitch: {
    padding: 5,
    borderRadius: 15,
    width: 60,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleText: {
    fontSize: 12,
    fontWeight: 'bold',
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
  subHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
  },
  question: {
    fontSize: 16,
    marginVertical: 4,
  },
  scrollContainer: {
    paddingBottom: 40,
  },
});

export default Mathematique2010;