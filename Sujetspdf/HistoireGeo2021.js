import React, { useState, useMemo } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HistoireGeo2021 = () => {
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
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2021</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>HISTOIRE</Text>

        <Text style={[styles.question, dynamicStyles.text]}>
          1 - Quels sont les empires qui ont précédé l’actuel Mali ? Donne le nom du fondateur de chacun d’eux.
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          2 - Quels sont les systèmes coloniaux que tu as étudiés ? Quelles différences y a-t-il entre eux ?
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          3 - Quel a été l’impact du panafricanisme sur les luttes de décolonisation en Afrique ?
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>GÉOGRAPHIE</Text>

        <Text style={[styles.question, dynamicStyles.text]}>
          1 - Quels sont les affluents des fleuves Niger et Sénégal ?
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          2 - Quelles importances les fleuves africains jouent pour les pays qu’ils traversent ?
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          3 - Produit la carte du Mali et y place ses fleuves.
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
});

export default HistoireGeo2021;