import React, { useState, useMemo } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Dicte2018 = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dynamicStyles = useMemo(() => getDynamicStyles(isDarkMode), [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <View style={dynamicStyles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Dicte')}
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
        <Text style={[styles.header, dynamicStyles.header]}>DEF 2018</Text>

        <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>Dictée : la bonne réputation. </Text>

        <Text style={[styles.paragraph, dynamicStyles.text]}>
          Comme nous vivons en perpétuel contact avec nos semblables, il est naturel qu’à chaque instant ils portent des jugements sur notre valeur. De là, vient que peu à peu notre réputation se forme autour de nous. Or il importe que cette réputation soit bonne : c’est assurément un bien qui a une large influence sur notre condition sociale, et qui peut même, dans certaines circonstances, nous ouvrir des portes. Qu’une mauvaise réputation soit un désavantage, on le comprend aisément : Qui n’a pas entendu dire que la médisance est un fléau qui ronge la société ? Une telle réputation nuit à notre prestige et nous expose à des jugements malveillants de la part de ceux qui nous entourent. C’est pourquoi il est utile de veiller à ce que notre réputation ne soit pas ternie, mais qu’elle reflète notre patrimoine d’honnêteté et de droiture. D’après E. Rayot
        </Text>

        <Text style={[styles.sectionSubtitle, dynamicStyles.text]}>Questions (45 mn après la dictée)</Text>
        <Text style={[styles.instruction, dynamicStyles.text]}>
          1. Relève dans le texte deux passages qui montrent l’utilité de la bonne réputation pour l’homme et la société. (4 pts)
        </Text>
        <Text style={[styles.instruction, dynamicStyles.text]}>
          2. Explique : vie quotidienne, communauté, nos peines, à nous convaincre nous-mêmes. (4 pts)
        </Text>
        <Text style={[styles.instruction, dynamicStyles.text]}>
          3. Nature et fonction des mots soulignés dans la dictée : quotidienne, s’instruise, nous, patrimoine. (4 pts)
        </Text>
        <Text style={[styles.instruction, dynamicStyles.text]}>
          4. a) Nombre et nature des propositions contenues dans la dernière phrase. (4 pts)
        </Text>
        <Text style={[styles.instruction, dynamicStyles.text]}>
          b) Construis une subordonnée avec : « comme » et donne une fonction. (4 pts)
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
    sectionSubtitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 12,
      marginBottom: 8,
      color: isDarkMode ? '#fff' : '#000',
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
});

export default Dicte2018;