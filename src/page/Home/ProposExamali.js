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

const ProposExamali = () => {
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
        <Text style={[styles.headerTitle, { color: dynamicTextColor }]}>À propos de Examali</Text>
        <TouchableOpacity onPress={toggleTheme} style={styles.toggleContainer}>
          <View style={[styles.toggleSwitch, isDarkMode ? styles.toggleOn : styles.toggleOff]}>
            <Text style={[styles.toggleText, isDarkMode ? styles.toggleTextOn : styles.toggleTextOff]}>
              {isDarkMode ? 'ON' : 'OFF'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={[styles.descriptionText, { color: dynamicTextColor }]}>
          **Examali** est une application de gestion des anciens sujets d'examen du Diplôme d'Études Fondamentales (DEF) et du Baccalauréat (Bac) au Mali. Elle permet aux étudiants et aux enseignants d'accéder facilement à une bibliothèque de sujets d'examen des années précédentes pour mieux se préparer aux examens futurs.
        </Text>

        <Text style={[styles.sectionTitle, { color: dynamicTextColor }]}>Fonctionnalités principales :</Text>
        <Text style={[styles.bulletPoint, { color: dynamicTextColor }]}>- Accès à une collection complète de sujets d'examen des années précédentes</Text>
        <Text style={[styles.bulletPoint, { color: dynamicTextColor }]}>- Filtrage par matière, année et niveau d'examen</Text>
        <Text style={[styles.bulletPoint, { color: dynamicTextColor }]}>- Consultation des corrigés pour chaque sujet</Text>
        <Text style={[styles.bulletPoint, { color: dynamicTextColor }]}>- Recherche rapide par mots-clés</Text>
        <Text style={[styles.bulletPoint, { color: dynamicTextColor }]}>- Possibilité de télécharger les sujets et corrigés</Text>

        <Text style={[styles.sectionTitle, { color: dynamicTextColor }]}>Interface intuitive :</Text>
        <Text style={[styles.descriptionText, { color: dynamicTextColor }]}>
          L'application propose une interface simple et conviviale qui permet une navigation fluide entre les différentes catégories de sujets d'examen. Les utilisateurs peuvent facilement trouver les sujets par matière, niveau d'examen et année.
        </Text>

        <Text style={[styles.sectionTitle, { color: dynamicTextColor }]}>Sécurité et confidentialité :</Text>
        <Text style={[styles.descriptionText, { color: dynamicTextColor }]}>
          Examali respecte la confidentialité des utilisateurs et garantit la sécurité des données partagées via l'application. Aucun sujet n'est partagé sans permission explicite, et toutes les informations sont traitées avec la plus grande sécurité.
        </Text>

        <Text style={[styles.descriptionText, { color: dynamicTextColor }]}>
          Grâce à **Examali**, vous avez à portée de main tous les anciens sujets d'examen nécessaires pour réussir le DEF et le Bac au Mali. Que vous soyez un étudiant en pleine préparation ou un enseignant cherchant des ressources pédagogiques, Examali est la solution idéale.
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

export default ProposExamali;
