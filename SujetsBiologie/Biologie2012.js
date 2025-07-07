import React, { useState, useEffect, useMemo } from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Biologie2012 = () => {
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
    <View style={dynamicStyles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Biologie')}
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

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2012 - Biologie</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>Biologie</Text>

        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1- Définis les termes suivants : (5 pts)
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          - La respiration
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          - La photosynthèse
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          - Les enzymes
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          - La cellule
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          - La mitose
        </Text>

        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2- Coche la bonne réponse : (5 pts)
        </Text>
        <View style={[styles.table, dynamicStyles.table]}>
          <View style={[styles.tableRow, dynamicStyles.tableRow]}>
            <Text style={[styles.tableCell, dynamicStyles.text]}>Affirmations</Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}>Vrai</Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}>Faux</Text>
          </View>
          <View style={[styles.tableRow, dynamicStyles.tableRow]}>
            <Text style={[styles.tableCell, dynamicStyles.text]}>
              La photosynthèse se produit dans les mitochondries.
            </Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}></Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}></Text>
          </View>
          <View style={[styles.tableRow, dynamicStyles.tableRow]}>
            <Text style={[styles.tableCell, dynamicStyles.text]}>
              Les enzymes accélèrent les réactions chimiques.
            </Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}></Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}></Text>
          </View>
          <View style={[styles.tableRow, dynamicStyles.tableRow]}>
            <Text style={[styles.tableCell, dynamicStyles.text]}>
              La mitose produit des cellules génétiquement différentes.
            </Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}></Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}></Text>
          </View>
          <View style={[styles.tableRow, dynamicStyles.tableRow]}>
            <Text style={[styles.tableCell, dynamicStyles.text]}>
              La respiration cellulaire produit de l'énergie.
            </Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}></Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}></Text>
          </View>
          <View style={[styles.tableRow, dynamicStyles.tableRow]}>
            <Text style={[styles.tableCell, dynamicStyles.text]}>
              Les cellules végétales ont une paroi cellulaire.
            </Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}></Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}></Text>
          </View>
        </View>

        <Text style={[styles.paragraph, dynamicStyles.text]}>
          3- Complète les phrases suivantes : (5 pts)
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          a- Lors de la photosynthèse, les plantes utilisent ... et ... pour produire du glucose et de l’oxygène.
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          b- La respiration cellulaire se produit dans les ...
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          c- La mitose est un processus de division cellulaire qui produit ... cellules filles identiques.
        </Text>

        <Text style={[styles.paragraph, dynamicStyles.text]}>
          4- Dessine et légende un schéma d’une cellule végétale : (5 pts)
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
    table: {
      borderColor: isDarkMode ? '#FFD700' : '#000',
    },
    tableRow: {
      borderBottomColor: isDarkMode ? '#FFD700' : '#000',
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
  table: {
    borderWidth: 1,
    marginBottom: 12,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  tableCell: {
    flex: 1,
    padding: 8,
    borderRightWidth: 1,
    borderRightColor: '#000',
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

export default Biologie2012;