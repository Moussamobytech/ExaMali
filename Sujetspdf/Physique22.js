import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Physique22 = () => {
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

           <ScrollView vertical showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <Text style={dynamicStyles.title}>DEF 2022</Text>
        <Text style={dynamicStyles.heading}>ÉPREUVE DE PHYSIQUE - CHIMIE</Text>

        {/* PHYSIQUE */}
        <Text style={dynamicStyles.sectionTitle}>I/ PHYSIQUE</Text>

        <Text style={dynamicStyles.sectionTitle}>Questions de Cours :</Text>
        <Text style={dynamicStyles.text}>1°) Énoncer les lois qualitatives de l’électrolyse</Text>
        <Text style={dynamicStyles.text}>2°) Quels sont les quatre temps du cycle de fonctionnement d’un moteur à explosion ?</Text>
        <Text style={dynamicStyles.text}>3°) Définir l’intensité du courant électrique.</Text>

        <Text style={dynamicStyles.sectionTitle}>Exercice :</Text>
        <Text style={dynamicStyles.text}>
          Calculer en coulomb et en ampère heure la quantité, la quantité d’électricité qui traverse une lampe électrique pendant 2h45min, sachant que l’intensité du courant est 0,35 Ampère.
        </Text>

        {/* CHIMIE */}
        <Text style={dynamicStyles.sectionTitle}>II / CHIMIE</Text>

        <Text style={dynamicStyles.sectionTitle}>Questions de Cours :</Text>
        <Text style={dynamicStyles.text}>6°) Définir les propriétés mécaniques des métaux suivantes :</Text>
        <Text style={dynamicStyles.text}>Ténacité ; dureté ; malléabilité ; ductilité</Text>
        <Text style={dynamicStyles.text}>7°) Citer trois minerais du fer</Text>
        <Text style={dynamicStyles.text}>8°) Citer deux usages du cuivre</Text>

        <Text style={dynamicStyles.sectionTitle}>Exercice :</Text>
        <Text style={dynamicStyles.text}>1) On a fait agir de l’acide sulfurique sur 120 g de cuivre.</Text>
        <Text style={dynamicStyles.text}>1.1) Écrire l’équation chimique de la réaction</Text>
        <Text style={dynamicStyles.text}>1.2) Calculer la masse de sulfate de cuivre formé</Text>
        <Text style={dynamicStyles.text}>1.3) Calculer le volume d’eau formé.</Text>
        <Text style={dynamicStyles.text}>
          On donne : M(H) = 1g/mole ; M(Cu) = 64g/mole ; M(O) = 16g/mole ; M(S) = 32g/mole ; volume molaire normal = 22,4 L/mole.
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
       justifyContent: 'center',
    alignItems: 'center',
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

export default Physique22;
