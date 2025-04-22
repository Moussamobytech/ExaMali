import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, Switch, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Physique21 = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const dynamicStyles = getDynamicStyles(isDarkMode);

  return (
    <View style={dynamicStyles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Physiquechimie')}>
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
        <Text style={dynamicStyles.title}>DEF 2021</Text>
        <Text style={dynamicStyles.heading}>ÉPREUVE DE PHYSIQUE - CHIMIE</Text>

        {/* PHYSIQUE */}
        <Text style={dynamicStyles.sectionTitle}>A/ PHYSIQUE</Text>

        <Text style={dynamicStyles.sectionTitle}>I - Question de Cours : (6 points)</Text>
        <Text style={dynamicStyles.text}>1. Donne l’énoncé du principe des actions réciproques</Text>
        <Text style={dynamicStyles.text}>2. Donne le principe de fonctionnement et la condition d’équilibre d’un treuil</Text>

        <Text style={dynamicStyles.sectionTitle}>II - Exercice : (4 pts)</Text>
        <Text style={dynamicStyles.text}>
          Une lampe d’une puissance de 20 watts fonctionne sous une tension de 15 volts.
        </Text>
        <Text style={dynamicStyles.text}>Calcule :</Text>
        <Text style={dynamicStyles.text}>1. L’intensité du courant qui traverse la lampe.</Text>
        <Text style={dynamicStyles.text}>2. La résistance de la lampe.</Text>
        <Text style={dynamicStyles.text}>3. L’énergie consommée en 12 heures de fonctionnement.</Text>

        {/* CHIMIE */}
        <Text style={dynamicStyles.sectionTitle}>B/ CHIMIE</Text>

        <Text style={dynamicStyles.sectionTitle}>I - Question de Cours : (6 points)</Text>
        <Text style={dynamicStyles.text}>1. Définis une oxydation ; une réduction.</Text>
        <Text style={dynamicStyles.text}>2. Décris l’expérience de la réduction de la vapeur d’eau par l’aluminium (croquis du dispositif expérimental).</Text>

        <Text style={dynamicStyles.sectionTitle}>II - Exercice : (4 pts)</Text>
        <Text style={dynamicStyles.text}>1°) Calculer la masse d’aluminium pour réduire 90g de vapeur d’eau ;</Text>
        <Text style={dynamicStyles.text}>2°) Calculer alors le volume de dihydrogène qui se dégage</Text>
        <Text style={dynamicStyles.text}>
          On donne : M(Al) = 27g/mol ; M(H) = 1g/mol ; M(O) = 16g/mol ; Volume molaire normal : V₀ = 22,4 L/mol.
        </Text>
      </ScrollView>
    </View>
  );
};

// 🔧 Styles dynamiques
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
      marginTop: 8,
      color: isDarkMode ? '#FFD700' : '#00008B',
    },
    text: {
      fontSize: 16,
      color: isDarkMode ? '#fff' : '#000',
      marginBottom: 4,
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

// 🎨 Styles fixes
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

export default Physique21;
