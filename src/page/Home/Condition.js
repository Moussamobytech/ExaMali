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

const Condition = () => {
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
        <Text style={styles.headerTitle}>Conditions d'utilisation</Text>
        
        <TouchableOpacity onPress={toggleTheme} style={styles.themeButton}>
          <Icon 
            name={isDarkMode ? "brightness-3" : "wb-sunny"} 
            size={24} 
            color="#fff" 
          />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={[styles.title, { color: dynamicTitleColor }]}>Conditions d'utilisation de Examali</Text>

        <View style={[styles.section, { backgroundColor: dynamicSectionColor }]}>
          <Text style={[styles.paragraph, { color: dynamicTextColor }]}>
            Bienvenue sur **Examali**, l'application dédiée à la gestion des anciens sujets d'examen du Diplôme d'Études Fondamentales (DEF) et du Baccalauréat (Bac) au Mali.
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: dynamicSectionColor }]}>
          <Text style={[styles.sectionTitle, { color: dynamicTitleColor }]}>1. Acceptation des conditions</Text>
          <Text style={[styles.paragraph, { color: dynamicTextColor }]}>
            En utilisant cette application, vous acceptez de respecter les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser l'application.
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: dynamicSectionColor }]}>
          <Text style={[styles.sectionTitle, { color: dynamicTitleColor }]}>2. Utilisation autorisée</Text>
          <Text style={[styles.paragraph, { color: dynamicTextColor }]}>
            Vous êtes autorisé à utiliser l'application exclusivement pour des fins d'éducation et de préparation aux examens. Vous ne devez pas utiliser l'application pour des fins illégales ou non autorisées.
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: dynamicSectionColor }]}>
          <Text style={[styles.sectionTitle, { color: dynamicTitleColor }]}>3. Propriété intellectuelle</Text>
          <Text style={[styles.paragraph, { color: dynamicTextColor }]}>
            Les sujets d'examen, les corrigés et autres contenus disponibles dans l'application sont protégés par des droits d'auteur. Vous n'êtes pas autorisé à reproduire, distribuer, ou partager ces contenus sans l'autorisation préalable de l'administrateur de l'application.
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: dynamicSectionColor }]}>
          <Text style={[styles.sectionTitle, { color: dynamicTitleColor }]}>4. Responsabilité</Text>
          <Text style={[styles.paragraph, { color: dynamicTextColor }]}>
            L'application **Examali** s'efforce de fournir des informations exactes, mais ne garantit pas l'exactitude ou la complétude des contenus. Nous ne sommes pas responsables des erreurs ou omissions dans les sujets d'examen.
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: dynamicSectionColor }]}>
          <Text style={[styles.sectionTitle, { color: dynamicTitleColor }]}>5. Modifications des conditions</Text>
          <Text style={[styles.paragraph, { color: dynamicTextColor }]}>
            Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. Toute modification sera effective dès sa publication dans l'application.
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: dynamicSectionColor }]}>
          <Text style={[styles.sectionTitle, { color: dynamicTitleColor }]}>6. Collecte de données</Text>
          <Text style={[styles.paragraph, { color: dynamicTextColor }]}>
            En utilisant l'application, vous acceptez la collecte et l'utilisation de vos données personnelles conformément à notre politique de confidentialité. Nous nous engageons à protéger votre vie privée.
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: dynamicSectionColor }]}>
          <Text style={[styles.sectionTitle, { color: dynamicTitleColor }]}>7. Limitation de responsabilité</Text>
          <Text style={[styles.paragraph, { color: dynamicTextColor }]}>
            **Examali** ne sera pas responsable des dommages directs, indirects, accessoires ou consécutifs liés à l'utilisation de l'application, y compris, mais sans s'y limiter, la perte de données ou de profits.
          </Text>
        </View>

        <View style={[styles.contactSection, { backgroundColor: dynamicSectionColor }]}>
          <Text style={[styles.sectionTitle, { color: dynamicTitleColor }]}>8. Contact</Text>
          <Text style={[styles.paragraph, { color: dynamicTextColor }]}>
            Si vous avez des questions concernant ces conditions d'utilisation, veuillez nous contacter :
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

export default Condition;