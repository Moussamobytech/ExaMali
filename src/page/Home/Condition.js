import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Profil from '../../../Screen/Tabs/Corriges';

const Condition = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const dynamicTextColor = isDarkMode ? '#fff' : '#000';
  const dynamicBackgroundColor = isDarkMode ? '#000' : '#fff';
  const dynamicImageTintColor = isDarkMode ? '#fff' : '#000';

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={[styles.container, isDarkMode ? darkStyles.container : lightStyles.container]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack(Profil)}>
          <Image source={require('./../../../Asset/return.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: dynamicTextColor }]}>Condition d'utilisation</Text>
        <TouchableOpacity onPress={toggleTheme} style={styles.toggleContainer}>
          <View style={[styles.toggleSwitch, isDarkMode ? styles.toggleOn : styles.toggleOff]}>
            <Text style={[styles.toggleText, isDarkMode ? styles.toggleTextOn : styles.toggleTextOff]}>
              {isDarkMode ? 'ON' : 'OFF'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text style={[styles.title, { color: dynamicTextColor }]}>Conditions d'utilisation de Examali</Text>

<Text style={[styles.paragraph, { color: dynamicTextColor }]}>
  Bienvenue sur **Examali**, l'application dédiée à la gestion des anciens sujets d'examen du Diplôme d'Études Fondamentales (DEF) et du Baccalauréat (Bac) au Mali.
</Text>

<Text style={[styles.title, { color: dynamicTextColor }]}>1. Acceptation des conditions</Text>
<Text style={[styles.paragraph, { color: dynamicTextColor }]}>
  En utilisant cette application, vous acceptez de respecter les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser l'application.
</Text>

<Text style={[styles.title, { color: dynamicTextColor }]}>2. Utilisation autorisée</Text>
<Text style={[styles.paragraph, { color: dynamicTextColor }]}>
  Vous êtes autorisé à utiliser l'application exclusivement pour des fins d'éducation et de préparation aux examens. Vous ne devez pas utiliser l'application pour des fins illégales ou non autorisées.
</Text>

<Text style={[styles.title, { color: dynamicTextColor }]}>3. Propriété intellectuelle</Text>
<Text style={[styles.paragraph, { color: dynamicTextColor }]}>
  Les sujets d'examen, les corrigés et autres contenus disponibles dans l'application sont protégés par des droits d'auteur. Vous n'êtes pas autorisé à reproduire, distribuer, ou partager ces contenus sans l'autorisation préalable de l'administrateur de l'application.
</Text>

<Text style={[styles.title, { color: dynamicTextColor }]}>4. Responsabilité</Text>
<Text style={[styles.paragraph, { color: dynamicTextColor }]}>
  L'application **Examali** s'efforce de fournir des informations exactes, mais ne garantit pas l'exactitude ou la complétude des contenus. Nous ne sommes pas responsables des erreurs ou omissions dans les sujets d'examen.
</Text>

<Text style={[styles.title, { color: dynamicTextColor }]}>5. Modifications des conditions</Text>
<Text style={[styles.paragraph, { color: dynamicTextColor }]}>
  Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. Toute modification sera effective dès sa publication dans l'application.
</Text>

<Text style={[styles.title, { color: dynamicTextColor }]}>6. Collecte de données</Text>
<Text style={[styles.paragraph, { color: dynamicTextColor }]}>
  En utilisant l'application, vous acceptez la collecte et l'utilisation de vos données personnelles conformément à notre politique de confidentialité. Nous nous engageons à protéger votre vie privée.
</Text>

<Text style={[styles.title, { color: dynamicTextColor }]}>7. Limitation de responsabilité</Text>
<Text style={[styles.paragraph, { color: dynamicTextColor }]}>
  **Examali** ne sera pas responsable des dommages directs, indirects, accessoires ou consécutifs liés à l'utilisation de l'application, y compris, mais sans s'y limiter, la perte de données ou de profits.
</Text>

<Text style={[styles.title, { color: dynamicTextColor }]}>8. Contact</Text>
<Text style={[styles.paragraph, { color: dynamicTextColor }]}>
  Si vous avez des questions concernant ces conditions d'utilisation, veuillez nous contacter à l'adresse suivante : contact@examali.com.
</Text>
      </ScrollView>
    </View>
  );
};

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
  },
  text: {
    color: '#fff',
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
});

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
  },
  input: {
    backgroundColor: '#ddd',
    color: '#000',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  toggleContainer: {
    padding: 5,
  },
  toggleSwitch: {
    width: 50,
    height: 25,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleOn: {
    backgroundColor: '#4caf50',
  },
  toggleOff: {
    backgroundColor: 'red',
  },
  toggleText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  toggleTextOn: {
    color: '#fff',
  },
  toggleTextOff: {
    color: '#000',
  },
  contentContainer: {
    alignItems: 'center',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  descriptionText: {
    fontSize: 16,
    marginTop: 10,
    lineHeight: 24,
  },
  bulletPoint: {
    fontSize: 16,
    marginTop: 5,
    lineHeight: 24,
  },
});

export default Condition;
