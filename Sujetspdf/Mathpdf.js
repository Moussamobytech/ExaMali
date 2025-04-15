
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

const Math21 = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode state

  // Dynamic styles based on dark mode
  const dynamicStyles = {
    container: {
      backgroundColor: isDarkMode ? '#000' : '#fff',
    },
    text: {
      color: isDarkMode ? '#fff' : '#000',
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
    <View style={[styles.container, dynamicStyles.container]}>
      {/* Header */}
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
 <ScrollView vertical showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
      {/* Content */}
      <Text style={[styles.title, dynamicStyles.text]}>Sujet de Mathématiques DEF 2021</Text>
      <Text style={[styles.sectionTitle, dynamicStyles.text]}>Épreuve de : Mathématiques DEF 2021</Text>

      {/* Section I - ALGEBRE */}
      <Text style={[styles.subTitle, dynamicStyles.text]}>I- ALGÈBRE (10pts)</Text>

      <View style={styles.exerciseContainer}>
        <Text style={[styles.exerciseTitle, dynamicStyles.text]}>Exercice 1 : (5pts)</Text>
        <Text style={[styles.exerciseText, dynamicStyles.text]}>
        On considère l’expression F = (√7+1)2+(√7-1)
        . {"\n"}
          1°) Après avoir développé les carrés, montrer que F est un nombre
          entier. {"\n"}
          2°) En déduire la nature d'un triangle dont les côtés mesurent
          respectivement, en centimètres, √7 + 1 ; √7 − 1 et 4. Justifier votre
          réponse. {"\n"}
          3°) Donner la valeur du nombre M = 6√6 + (6 + √6) + (6 + √6) + √6 + 6√3
          + 3.
        </Text>
      </View>

      <View style={styles.exerciseContainer}>
        <Text style={[styles.exerciseTitle,dynamicStyles.text]}>Exercice 2 : (2pts)</Text>
        <Text style={[styles.exerciseText, dynamicStyles.text]}>
          On considère les polynômes : {"\n"}
          A(x) = (9x²−1) (2x+3) − (4x²−9) (3x+1) {"\n"}
          B(x) = (x²−4) (3x−1) − (9x²−1) (x+2) {"\n"}
          1°) Mettre A(x) et B(x) sous la forme de produit de polynômes du 1ᵉʳ
          degré.
        </Text>
      </View>

      <View style={styles.exerciseContainer}>
        <Text style={[styles.exerciseTitle,dynamicStyles.text]}>Problème : (3pts)</Text>
        <Text style={[styles.exerciseText, dynamicStyles.text]}>
          Un âne et un cheval chargés de sacs également pesants font chemin
          ensemble. {"\n"}
          L'âne se plaignant de sa charge, le cheval lui dit : « De quoi te
          plains-tu ! Si je prenais un de tes sacs, je serais chargé deux fois
          autant que toi, et si tu me prenais un des miens, je serais encore
          aussi chargé que toi ». {"\n"}
          Combien de sacs porte chaque animal ?
        </Text>
      </View>

      {/* Section II - GEOMETRIE */}
      <Text style={[styles.subTitle,dynamicStyles.text]}>II- GÉOMÉTRIE : (10pts)</Text>

      <View style={styles.exerciseContainer}>
        <Text style={[styles.exerciseText, dynamicStyles.text]}>
          1°) Dans un repère orthonormé (O; i ; j), tracer la droite (?): x −
          3y = −5. {"\n"}
          2°) Marquer sur cette droite le point A d'abscisse 1 et le point B
          d'ordonnée 3. Quelles sont l'ordonnée de A et l'abscisse de B ? {"\n"}
          3°) Soit C le point de coordonnées (5 ; 0). Calculer l'équation de la
          droite (BC). Montrer que (?) et (BC) sont orthogonales. {"\n"}
          4°) Calculer d(A,B) et d(B,C) et en déduire la nature du triangle ABC.
          {"\n"}
          5°) Quelles sont les coordonnées du centre M du cercle circonscrit au
          triangle ABC ? Montrer que (CM) et (BC) sont orthogonales, puis que
          (OM) passe par le milieu de [BC].
        </Text>
      </View>

      {/* Footer */}
      <Text style={[styles.footer, dynamicStyles.text]}>
        Sujets de maths DEF | Adama Traoré Professeur Lycée Technique Bamako |
        Page 38
      </Text>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  scrollContainer: {
    paddingBottom: 50,
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
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#0000FF',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  exerciseContainer: {
    marginBottom: 20,
  },
  exerciseTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  exerciseText: {
    fontSize: 14,
    lineHeight: 20,
  },
  footer: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
    color: '#555',
  },
});

export default Math21;
