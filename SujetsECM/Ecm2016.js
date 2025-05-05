import React, { useState, useMemo } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Ecm2016 = () => {
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
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2016</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>Sujet</Text>

        <Text style={[styles.question, dynamicStyles.text]}>
          1) Définis : le bien public et la conscience professionnelle. (5 pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          2) Cite les qualités d’un bon travailleur. (5 pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          3) Explique ce que symbolise chacune des couleurs du drapeau du Mali. (6 pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          4) Écris le premier couplet de l’hymne National du Mali. (4 pts)
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
  question: {
    fontSize: 16,
    marginVertical: 4,
  },
  scrollContainer: {
    paddingBottom: 40,
  },
});

export default Ecm2016;