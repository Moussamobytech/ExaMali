import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Physique19 = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const navigation = useNavigation();

  const dynamicStyles = {
    container: {
      backgroundColor: isDarkMode ? '#000' : '#fff',
      flex: 1,
      padding: 16,
    },
    text: {
      color: isDarkMode ? '#fff' : '#000',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      color: isDarkMode ? '#00f' : '#0000FF',
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
      color: isDarkMode ? '#fff' : '#000',
    },
    exerciseText: {
      fontSize: 14,
      marginBottom: 10,
      color: isDarkMode ? '#ddd' : '#333',
    },
    toggleSwitch: {
      backgroundColor: isDarkMode ? '#4CAF50' : '#f44336',
    },
    toggleText: {
      color: isDarkMode ? '#fff' : '#000',
    },
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ScrollView style={dynamicStyles.container} contentContainerStyle={styles.scrollContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('AccueilMaitre')}>
          <Image
            source={require('./../Asset/return.png')}
            style={styles.returnImage}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleTheme} style={styles.toggleContainer}>
          <View style={[styles.toggleSwitch, dynamicStyles.toggleSwitch]}>
            <Text style={[styles.toggleText, dynamicStyles.toggleText]}>
              {isDarkMode ? 'ON' : 'OFF'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={dynamicStyles.title}>DEF 2019</Text>

      <Text style={dynamicStyles.sectionTitle}>1°) Questions de Cours :</Text>
      <Text style={dynamicStyles.exerciseText}>
        a) Lors du fonctionnement d’un moteur à explosion à quatre temps, quels
        sont les deux temps au cours desquels l’une des soupapes est ouverte ?
      </Text>

      <Text style={dynamicStyles.exerciseText}>
        b) Recopie puis relie chaque grandeur physique au symbole de son unité :
      </Text>

      <View style={[styles.table, { borderColor: isDarkMode ? '#fff' : '#000' }]}>
        <View style={[styles.tableRow, styles.tableHeader, { borderColor: isDarkMode ? '#fff' : '#000' }]}>
          <Text style={[styles.tableHeaderText, dynamicStyles.text]}>Grandeur Physique</Text>
          <Text style={[styles.tableHeaderText, dynamicStyles.text]}>Unité</Text>
        </View>
        <View style={[styles.tableRow, { borderColor: isDarkMode ? '#fff' : '#000' }]}>
          <Text style={[styles.tableCell, dynamicStyles.text]}>Masse Volumique</Text>
          <Text style={[styles.tableCell, dynamicStyles.text]}>Kg/m³</Text>
        </View>
        <View style={[styles.tableRow, { borderColor: isDarkMode ? '#fff' : '#000' }]}>
          <Text style={[styles.tableCell, dynamicStyles.text]}>Force</Text>
          <Text style={[styles.tableCell, dynamicStyles.text]}>N</Text>
        </View>
        <View style={[styles.tableRow, { borderColor: isDarkMode ? '#fff' : '#000' }]}>
          <Text style={[styles.tableCell, dynamicStyles.text]}>Volume</Text>
          <Text style={[styles.tableCell, dynamicStyles.text]}>dm³</Text>
        </View>
        <View style={[styles.tableRow, { borderColor: isDarkMode ? '#fff' : '#000' }]}>
          <Text style={[styles.tableCell, dynamicStyles.text]}>Travail Mécanique</Text>
          <Text style={[styles.tableCell, dynamicStyles.text]}>J</Text>
        </View>
      </View>

      <Text style={dynamicStyles.exerciseText}>c) Énonce la loi de Joule.</Text>

      <Text style={dynamicStyles.sectionTitle}>2°) Exercice :</Text>
      <Text style={dynamicStyles.exerciseText}>
        Deux résistances R₁ et R₂ montées dans un circuit électrique sont
        parcourues par un même courant d’une intensité est 0,2 A. La tension aux
        bornes de R₁ est 8,4 V et celle aux bornes de R₂ est 3,6 V.{"\n\n"}a) R₁
        et R₂ sont-elles montées en série ou en parallèle ? Justifiez votre
        réponse.{"\n"}b) Calculer la valeur de chacune de ces résistances ;
        {"\n"}c) Quelle est la tension aux bornes du générateur ?{"\n"}d)
        Calculer la valeur de la résistance équivalente de deux façons.
      </Text>

      <Text style={dynamicStyles.sectionTitle}>II/ CHIMIE</Text>
      <Text style={dynamicStyles.sectionTitle}>1// Questions de Cours :</Text>
      <Text style={dynamicStyles.exerciseText}>
        1) Complète puis équilibre s’il y a lieu les équations bilan{"\n"}Des
        réactions suivantes et nomme les corps formés :{"\n"}a) Fe + O₂ → … +
        …{"\n"}b) Al + Cl₂ → … + …{"\n"}c) Zn + H₂SO₄ → … + …{"\n"}d) Cu + H₂O →
        … + …{"\n\n"}2) Quel est le principal minerai de cuivre ?{"\n"}3) Citer
        deux usages du Zinc.
      </Text>

      <Text style={dynamicStyles.sectionTitle}>II// Exercice :</Text>
      <Text style={dynamicStyles.exerciseText}>
        On donne des corps simples suivants : dioxygène ; carbone ; Soufre ;
        Zinc ; dihydrogène ; diiode.{"\n"}1) Dans les conditions normales de
        température et de pression cite :{"\n"}a) Ceux qui sont à l’état solide
        ;{"\n"}b) Ceux qui sont à l’état gazeux.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    marginVertical: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  tableHeader: {
    backgroundColor: '#ddd',
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: 'bold',
    padding: 8,
    textAlign: 'center',
  },
  tableCell: {
    flex: 1,
    padding: 8,
    textAlign: 'center',
  },
  scrollContainer: {
    paddingBottom: 50,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  returnImage: {
    width: 30,
    height: 30,
  },
  toggleContainer: {
    padding: 10,
  },
  toggleSwitch: {
    width: 60,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleText: {
    fontSize: 14,
  },
});

export default Physique19;
