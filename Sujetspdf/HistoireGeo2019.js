import React, { useState, useMemo } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HistoireGeo2019 = () => {
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

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>A - HISTOIRE: (10 points)</Text>

        <Text style={[styles.question, dynamicStyles.text]}>
          1 - Définis les termes suivants: Colonie d’exploitation et Protectorat ? (2 points)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          2 - À la fin du partage de l’Afrique en 1900, seuls deux pays étaient indépendants, lesquels ? (2 points)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          3 - Citez les noms de trois (3) résistants africains à la conquête coloniale ? (3 points)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          4 - Pour ou contre: (3 points)
        </Text>
        <Text style={[styles.instruction, dynamicStyles.text]}>
          Récois les phrases suivantes et coche la bonne réponse ?
        </Text>

        {/* Table representation using View and Text */}
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, dynamicStyles.text]}>a - L’A.O.F est une fédération de colonies d’exploitation de la France en Afrique.</Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}>VRAI</Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}>FAUX</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, dynamicStyles.text]}>b - La SDN fut créée pour remplacer l’ONU.</Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}>VRAI</Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}>FAUX</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, dynamicStyles.text]}>c - Le Tsar était le terme utilisé pour désigner le roi en Russie.</Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}>VRAI</Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}>FAUX</Text>
          </View>
        </View>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>B - GÉOGRAPHIE: (10 points)</Text>

        <Text style={[styles.question, dynamicStyles.text]}>
          1 - Cite les pays limitrophes du Mali et leur capitale ? (3.5 points)
        </Text>
        <Text style={[styles.instruction, dynamicStyles.text]}>
          Tu connais le groupement économique des pays membres de l’UEMOA, répartis ces pays entre les deux zones suivantes:
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>L’Afrique occidentale</Text>
        <Text style={[styles.question, dynamicStyles.text]}>L’Afrique occidentale sahélo-sahélienne et</Text>
        <Text style={[styles.question, dynamicStyles.text]}>L’Afrique occidentale humide et côtière ? (3 points)</Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          3 - Quelle est l’organisation qui s’occupe de l’amélioration de la gestion du fleuve Sénégal ? Quels sont les pays membres de cette organisation ? (2 points)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          4 - Cite les pays de l’Afrique occidentale qui n’ont pas de débouché sur la mer ? (1.5 points)
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
  table: {
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  tableCell: {
    flex: 1,
    padding: 8,
    fontSize: 14,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
});

export default HistoireGeo2019;