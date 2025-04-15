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

const Politique = () => {
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
        <Text style={[styles.headerTitle, { color: dynamicTextColor }]}>Politique de confidentialité</Text>
        <TouchableOpacity onPress={toggleTheme} style={styles.toggleContainer}>
          <View style={[styles.toggleSwitch, isDarkMode ? styles.toggleOn : styles.toggleOff]}>
            <Text style={[styles.toggleText, isDarkMode ? styles.toggleTextOn : styles.toggleTextOff]}>
              {isDarkMode ? 'ON' : 'OFF'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text style={[styles.title, { color: dynamicTextColor }]}>Politique de Confidentialité de Examali</Text>

<Text style={[styles.paragraph, { color: dynamicTextColor }]}>
  La présente politique de confidentialité définit comment **Examali** collecte, utilise, protège et partage vos informations personnelles lorsque vous utilisez notre application.
</Text>

<Text style={[styles.title, { color: dynamicTextColor }]}>1. Collecte d'informations</Text>
<Text style={[styles.paragraph, { color: dynamicTextColor }]}>
  Nous collectons des informations lorsque vous vous inscrivez sur l'application, vous vous connectez ou interagissez avec notre contenu. Ces informations peuvent inclure votre nom, adresse e-mail, et d'autres informations pertinentes pour le service que nous vous fournissons.
</Text>

<Text style={[styles.title, { color: dynamicTextColor }]}>2. Utilisation des informations</Text>
<Text style={[styles.paragraph, { color: dynamicTextColor }]}>
  Les informations que nous collectons sont utilisées pour personnaliser votre expérience, améliorer nos services et vous fournir des contenus adaptés. Elles peuvent également être utilisées pour vous envoyer des notifications ou des mises à jour importantes concernant l'application.
</Text>

<Text style={[styles.title, { color: dynamicTextColor }]}>3. Protection des informations</Text>
<Text style={[styles.paragraph, { color: dynamicTextColor }]}>
  Nous mettons en place des mesures de sécurité pour protéger vos informations personnelles. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est complètement sécurisée, nous ne pouvons donc garantir une sécurité absolue.
</Text>

<Text style={[styles.title, { color: dynamicTextColor }]}>4. Partage des informations</Text>
<Text style={[styles.paragraph, { color: dynamicTextColor }]}>
  **Examali** ne vend ni ne partage vos informations personnelles avec des tiers sans votre consentement, sauf dans les cas où cela est requis par la loi.
</Text>

<Text style={[styles.title, { color: dynamicTextColor }]}>5. Cookies</Text>
<Text style={[styles.paragraph, { color: dynamicTextColor }]}>
  Nous pouvons utiliser des cookies pour améliorer l'expérience de l'utilisateur. Les cookies sont de petits fichiers qui sont stockés sur votre appareil et qui nous aident à vous fournir des services plus efficaces.
</Text>

<Text style={[styles.title, { color: dynamicTextColor }]}>6. Accès et modification de vos informations</Text>
<Text style={[styles.paragraph, { color: dynamicTextColor }]}>
  Vous avez le droit d'accéder, de corriger ou de supprimer vos informations personnelles. Vous pouvez également demander la suppression de votre compte à tout moment en contactant notre support.
</Text>

<Text style={[styles.title, { color: dynamicTextColor }]}>7. Modifications de la politique</Text>
<Text style={[styles.paragraph, { color: dynamicTextColor }]}>
  Nous nous réservons le droit de mettre à jour cette politique de confidentialité à tout moment. Toute modification sera publiée dans cette page et prendra effet immédiatement après sa publication.
</Text>

<Text style={[styles.title, { color: dynamicTextColor }]}>8. Contact</Text>
<Text style={[styles.paragraph, { color: dynamicTextColor }]}>
  Si vous avez des questions concernant cette politique de confidentialité, n'hésitez pas à nous contacter à l'adresse suivante : contact@examali.com.
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

export default Politique;
