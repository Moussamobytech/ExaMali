import React, { useState, useMemo } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HistoireGeo2020 = () => {
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
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2020</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>I - HISTOIRE: 10 points</Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>a - Réponds aux questions suivantes: (8 points)</Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          a.1 - Au XIXe siècle, l’application de deux découvertes ont permis de révolutionner la médecine. Il s’agit de quelles découvertes et quels avantages elles ont apporté ? (1pt)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          a.2 - Les luttes ouvrières du XIXe siècle ont abouti à des réformes majeures, cite au moins deux ? (1pt)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          a.3 - Décris l’itinéraire d’un (1) explorateur allemand du XIXe siècle en Afrique de ton choix ? (1pt)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          a.4 - Définis au moins deux principales clauses de la conférence de Berlin de 1884-1885 ? (1pt)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          a.5 - Citez au moins quatre (4) anciennes colonies de l’Allemagne en Afrique ? (1pt)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          a.6 - La “tactique de la terre brûlée” dans la résistance africaine à la conquête coloniale, en quoi consiste-t-elle ? Elle a été utilisée par quel résistant africain ? (2pt)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          a.7 - Militairement, l’Afrique n’était pas prête à résister contre la pénétration coloniale. Donne une explication qui justifie cela ? (1pt)
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>b - Définis les termes suivants: (2 points)</Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          b.1 - Une colonie de peuplement, donne un (1) exemple ? (1pt)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          b.2 - La politique d’assimilation ? (1pt)
        </Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>II - GÉOGRAPHIE: 10 points</Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>c - Réponds aux questions suivantes: (8 points)</Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          c.1 - L’Afrique est un continent très compact. Seule une petite bande de terre le lie au continent asiatique. L’Afrique est entourée d’océans et de mers de presque tous les côtés : - Cite les océans et les mers qui entourent l’Afrique ? (2pt)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          c.2 - Certains pays africains pris le nom du cours d’eau qui les traverse, cite quatre (4) exemples de pays de ton choix, en mettant aussi le nom du cours d’eau entre parenthèses devant chaque pays ? (2pt)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          c.3 - Quel est le plus long et navigable du fleuve Niger au Mali ? (1pt)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          c.4 - En Afrique de l’Ouest, un (1) seul pays n’est pas membre de la CEDEAO, lequel ? (1pt)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          c.5 - Dessine la carte du Mali en y insérant les pays limitrophes ? (2pt)
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>d - Définis les termes suivants: (2 points)</Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          d.1 - L’embouchure d’un fleuve ? (1pt)
        </Text>
        <Text style={[styles.question, dynamicStyles.text]}>
          d.2 - La densité de la population ? (1pt)
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
});

export default HistoireGeo2020;