import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Politique = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const dynamicTextColor = isDarkMode ? '#e0e0e0' : '#333';
  const dynamicBackgroundColor = isDarkMode ? '#121212' : '#fff';
  const dynamicSectionColor = isDarkMode ? '#1e1e1e' : '#f9f9f9';
  const dynamicTitleColor = isDarkMode ? '#5d894e' : '#5d894e';

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const openEmail = () => {
    Linking.openURL('mailto:contact@examali.com');
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: dynamicBackgroundColor }]}>
      {/* En-tête */}
      <View style={[styles.header, { backgroundColor: isDarkMode ? '#0d0d0d' : '#5d894e' }]}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Politique de confidentialité</Text>
        
        <TouchableOpacity onPress={toggleTheme} style={styles.themeButton}>
          <Icon 
            name={isDarkMode ? "brightness-3" : "wb-sunny"} 
            size={24} 
            color="#fff" 
          />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={[styles.title, { color: dynamicTitleColor }]}>Politique de Confidentialité de Examali</Text>

        <View style={[styles.section, { backgroundColor: dynamicSectionColor }]}>
          <Text style={[styles.paragraph, { color: dynamicTextColor }]}>
            La présente politique de confidentialité définit comment **Examali** collecte, utilise, protège et partage vos informations personnelles lorsque vous utilisez notre application.
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: dynamicSectionColor }]}>
          <Text style={[styles.sectionTitle, { color: dynamicTitleColor }]}>1. Collecte d'informations</Text>
          <Text style={[styles.paragraph, { color: dynamicTextColor }]}>
            Nous collectons des informations lorsque vous vous inscrivez sur l'application, vous vous connectez ou interagissez avec notre contenu. Ces informations peuvent inclure votre nom, adresse e-mail, et d'autres informations pertinentes pour le service que nous vous fournissons.
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: dynamicSectionColor }]}>
          <Text style={[styles.sectionTitle, { color: dynamicTitleColor }]}>2. Utilisation des informations</Text>
          <Text style={[styles.paragraph, { color: dynamicTextColor }]}>
            Les informations que nous collectons sont utilisées pour personnaliser votre expérience, améliorer nos services et vous fournir des contenus adaptés. Elles peuvent également être utilisées pour vous envoyer des notifications ou des mises à jour importantes concernant l'application.
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: dynamicSectionColor }]}>
          <Text style={[styles.sectionTitle, { color: dynamicTitleColor }]}>3. Protection des informations</Text>
          <Text style={[styles.paragraph, { color: dynamicTextColor }]}>
            Nous mettons en place des mesures de sécurité pour protéger vos informations personnelles. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est complètement sécurisée, nous ne pouvons donc garantir une sécurité absolue.
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: dynamicSectionColor }]}>
          <Text style={[styles.sectionTitle, { color: dynamicTitleColor }]}>4. Partage des informations</Text>
          <Text style={[styles.paragraph, { color: dynamicTextColor }]}>
            **Examali** ne vend ni ne partage vos informations personnelles avec des tiers sans votre consentement, sauf dans les cas où cela est requis par la loi.
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: dynamicSectionColor }]}>
          <Text style={[styles.sectionTitle, { color: dynamicTitleColor }]}>5. Cookies</Text>
          <Text style={[styles.paragraph, { color: dynamicTextColor }]}>
            Nous pouvons utiliser des cookies pour améliorer l'expérience de l'utilisateur. Les cookies sont de petits fichiers qui sont stockés sur votre appareil et qui nous aident à vous fournir des services plus efficaces.
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: dynamicSectionColor }]}>
          <Text style={[styles.sectionTitle, { color: dynamicTitleColor }]}>6. Accès et modification</Text>
          <Text style={[styles.paragraph, { color: dynamicTextColor }]}>
            Vous avez le droit d'accéder, de corriger ou de supprimer vos informations personnelles. Vous pouvez également demander la suppression de votre compte à tout moment en contactant notre support.
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: dynamicSectionColor }]}>
          <Text style={[styles.sectionTitle, { color: dynamicTitleColor }]}>7. Modifications de la politique</Text>
          <Text style={[styles.paragraph, { color: dynamicTextColor }]}>
            Nous nous réservons le droit de mettre à jour cette politique à tout moment. Toute modification sera publiée dans cette page et prendra effet immédiatement après sa publication.
          </Text>
        </View>

        <View style={[styles.contactSection, { backgroundColor: dynamicSectionColor }]}>
          <Text style={[styles.sectionTitle, { color: dynamicTitleColor }]}>8. Contact</Text>
          <Text style={[styles.paragraph, { color: dynamicTextColor }]}>
            Si vous avez des questions concernant cette politique de confidentialité, n'hésitez pas à nous contacter :
          </Text>
          
          <TouchableOpacity 
            style={styles.contactButton} 
            onPress={openEmail}
          >
            <Text style={styles.contactButtonText}>contact@examali.com</Text>
            <Icon name="email" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Image 
            source={require('./../../../Asset/profileexamali.jpg')} 
            style={styles.logo} 
          />
          <Text style={[styles.footerText, { color: dynamicTextColor }]}>
            © {new Date().getFullYear()} EXAMALI. Tous droits réservés.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    flex: 1,
  },
  themeButton: {
    padding: 5,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  section: {
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },
  contactSection: {
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5d894e',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginTop: 15,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  footerText: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default Politique;