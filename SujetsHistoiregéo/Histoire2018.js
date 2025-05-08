import React, { useState, useMemo } from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Histoire2018 = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dynamicStyles = useMemo(() => getDynamicStyles(isDarkMode), [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <View style={dynamicStyles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Historique')}
          accessibilityLabel="Go back to home"
          accessibilityRole="button"
        >
          <Image source={require('./../Asset/return.png')} style={styles.returnImage} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={toggleDarkMode}
          style={styles.toggleContainer}
          accessibilityLabel={`Turn ${isDarkMode ? 'off' : 'on'} dark mode`}
          accessibilityRole="switch"
        >
          <View style={[styles.toggleSwitch, dynamicStyles.toggleSwitch]}>
            <Text style={[styles.toggleText, dynamicStyles.toggleText]}>
              {isDarkMode ? 'ON' : 'OFF'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2017</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>Histoire</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1- Reconnais les affirmations suivantes et coche la bonne réponse (9 pts) :
        </Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, dynamicStyles.text]}>Affirmations</Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}>Vrai</Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}>Faux</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, dynamicStyles.text]}>
              L’Angleterre n’a jamais eu de colonies en Afrique.
            </Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}></Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}></Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, dynamicStyles.text]}>
              L’O.N.U succède à l’O.L.L.A en 1945.
            </Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}></Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}></Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, dynamicStyles.text]}>
              La volonté revancharde d’Hitler a conduit à la 2ème guerre mondiale.
            </Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}></Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}></Text>
          </View>
        </View>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2- Que marqua dans l’histoire du monde la date du 28 Juin 1919 ? (1 pt)
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          3- Donne le nom de l’inventeur de chacune de ces découvertes : (4 pts)
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          - Le vaccin anti-charbonneau...
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          - La dynamo...
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          - L’électricité anti-charbonneau...
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          - La théorie de la relativité...
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          4- Définit l’effort de guerre et régime de Vichy (2 pts)
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>Géographie</Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          1- Calcule la densité de ce pays dont la population est de 17 994 837 habitants et la superficie est de 1 248 574 km² : (2 pts)
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          2- Définit les termes suivants : (3 pts)
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          - Le taux de natalité,
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          - L’émigration,
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          - La balance commerciale...
        </Text>
        <Text style={[styles.paragraph, dynamicStyles.text]}>
          3- Écris en toutes lettres les sigles des regroupements suivants et précise la date et le lieu de création : (4 pts)
        </Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, dynamicStyles.text]}>Sigles</Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}>Écrit en toutes lettres</Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}>Date et lieu de création</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, dynamicStyles.text]}>UEMOA</Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}></Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}></Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, dynamicStyles.text]}>CEDEAO</Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}></Text>
            <Text style={[styles.tableCell, dynamicStyles.text]}></Text>
          </View>
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
    borderColor: '#000',
    marginBottom: 12,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  tableCell: {
    flex: 1,
    padding: 8,
    borderRightWidth: 1,
    borderRightColor: '#000',
  },
});

export default Histoire2018;