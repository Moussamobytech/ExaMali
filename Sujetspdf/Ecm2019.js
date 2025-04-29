import React, { useState, useMemo } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ECM19 = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dynamicStyles = useMemo(() => getDynamicStyles(isDarkMode), [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Data for the table
  const tableData = [
    '01 - Les Députés élaborent les plans de développement des Communes. (1pt)',
    '02 - L’exercice abusif de la liberté ne peut aucunement conduire à sa privation. (1pt)',
    '03 - Le rouge du drapeau du Mali symbolise le sang versé pour la défense de la patrie. (1pt)',
    '04 - Les partis politiques représentent le cahier des charges recouvrant 3% du budget national ; ils les utilisent pour donner une formation Citoyenne à leurs militants. (2pts)',
    '05 - La prudence dans la circulation commande de perdre la priorité que la vie. (1pt)',
    '06 - À la montée du drapeau du Mali, un passant n’est pas obligé de s’arrêter. (1pt)',
    '07 - Le port de la ceinture et du casque est respecté par tous les usagers de la route au Mali. (1pt)',
    '08 - Les Maires doivent créer la richesse pour réaliser le développement de leur Commune. (1pt)',
    '09 - Notre Mali se développerait davantage en confiants les tâches à des Personnes loyales, qui ont la vocation et les compétences de leur travail. (2pts)',
    '10 - Tout parti politique cherche à conquérir le pouvoir pour l’exercer et le conserver à tout prix. (1pt)',
    '11 - La paix est l’absence de violence et de trouble dans les familles, dans la Société et dans les États. (1pt)',
    '12 - Le bon citoyen s’arreste au feu rouge même quand la circulation est libre. (1pt)',
    '13 - Le bon citoyen ne revendique ses droits qu’après avoir accompli ses devoirs. (1pt)',
    '14 - La sauvegarde et le maintien de la paix passent nécessairement par lutte contre les causes, qui engendrent les conflits. (2pts)',
    '15 - Dans une vraie démocratie, la liberté d’expression n’a pas de limite. (1pt)',
    '16 - Les enfants dits normaux et handicapés n’ont pas les mêmes droits. (2pts)',
  ];

  return (
    <View style={dynamicStyles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Ecm')}
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

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>Éducation Civique et Morale</Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Lis chaque des phrases ci-dessous et coche la bonne réponse :</Text>

        {/* Table representation */}
        <View style={styles.table}>
          {/* Header Row */}
          <View style={styles.tableHeaderRow}>
            <Text style={[styles.tableHeaderCell, styles.numberColumn, dynamicStyles.tableHeaderText]}>N°</Text>
            <Text style={[styles.tableHeaderCell, styles.phraseColumn, dynamicStyles.tableHeaderText]}>PHRASES</Text>
            <Text style={[styles.tableHeaderCell, styles.choiceColumn, dynamicStyles.tableHeaderText]}>VRAI</Text>
            <Text style={[styles.tableHeaderCell, styles.choiceColumn, dynamicStyles.tableHeaderText]}>FAUX</Text>
          </View>

          {/* Data Rows */}
          {tableData.map((item, index) => {
            const [number, phrase] = item.split(' - ');
            return (
              <View key={index} style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.numberColumn, dynamicStyles.text]}>{number}</Text>
                <Text style={[styles.tableCell, styles.phraseColumn, dynamicStyles.text, styles.justifiedText]}>{phrase}</Text>
                <Text style={[styles.tableCell, styles.choiceColumn, dynamicStyles.text]}>VRAI</Text>
                <Text style={[styles.tableCell, styles.choiceColumn, dynamicStyles.text]}>FAUX</Text>
              </View>
            );
          })}
        </View>
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
    sectionSubtitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 12,
      marginBottom: 8,
      color: isDarkMode ? '#fff' : '#000',
    },
    text: {
      fontSize: 14,
      color: isDarkMode ? '#fff' : '#000',
    },
    tableHeaderText: {
      color: isDarkMode ? '#FFD700' : '#000',
      fontWeight: 'bold',
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
  scrollContainer: {
    paddingBottom: 20,
  },
  table: {
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  tableHeaderRow: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 2,
    borderColor: '#999',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  tableHeaderCell: {
    padding: 8,
    fontSize: 14,
    textAlign: 'center',
  },
  tableCell: {
    padding: 8,
    fontSize: 14,
    textAlign: 'center',
  },
  numberColumn: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  phraseColumn: {
    flex: 4,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  choiceColumn: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  justifiedText: {
    textAlign: 'justify', 
  },
});

export default ECM19;