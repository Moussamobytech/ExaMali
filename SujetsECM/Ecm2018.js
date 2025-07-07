import React, { useState, useEffect, useMemo } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Ecm2018 = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const dynamicStyles = useMemo(() => getDynamicStyles(isDarkMode), [isDarkMode]);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading after 3 seconds
    }, 3000); // 3000ms = 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Show loading screen while isLoading is true
  if (isLoading) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
        <ActivityIndicator size="large" color={isDarkMode ? '#FFD700' : '#00008B'} />
        <Text style={[styles.loadingText, { color: isDarkMode ? '#fff' : '#000' }]}>
          Chargement du document...
        </Text>
      </View>
    );
  }

  // Main content after loading
  return (
    <View style={[styles.container, dynamicStyles.container]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Ecm')}
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
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2018</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>Sujet</Text>

        <Text style={[styles.question, dynamicStyles.text]}>
          1) Définit la morale, puis donne la nécessité de l’enseigner.
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          2) Après avoir défini le bien privé et le bien public, donne un exemple de chaque cas. (3 pts)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          3) Citez les institutions de la République du Mali.
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          4) Quel sont les éléments qui composent le drapeau du Mali ?
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          5) L’Armée malienne :{'\n'}   A. Quelles sont les missions qui lui sont assignées ?{'\n'}   B. De quoi a-t-elle besoin pour bien faire son travail ?
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    marginTop: 16,
  },
});

export default Ecm2018;