import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  TouchableOpacity,
  Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const AboutExamaliScreen = () => {
  const navigation = useNavigation();
  
  const teamMembers = [
    { id: 1, name: "Abdoulaye Traoré", role: "Fondateur & CEO", avatar: require('./../../../Asset/profileexamali.jpg') },
    { id: 2, name: "Aminata Diallo", role: "Responsable Pédagogique", avatar: require('./../../../Asset/profileexamali.jpg') },
    { id: 3, name: "Moussa Keita", role: "Développeur Principal", avatar: require('./../../../Asset/profileexamali.jpg') },
    { id: 4, name: "Fatoumata Bamba", role: "Designer UX/UI", avatar: require('./../../../Asset/profileexamali.jpg') },
  ];

  const features = [
    { icon: "school", title: "Cours de qualité", description: "Des cours conçus par des experts dans chaque domaine" },
    { icon: "access-time", title: "Apprentissage flexible", description: "Apprenez à votre rythme, quand vous voulez" },
    { icon: "star", title: "Certifications", description: "Obtenez des certifications valorisantes" },
    { icon: "group", title: "Communauté", description: "Rejoignez une communauté d'apprenants motivés" },
  ];

  const openWebsite = () => {
    Linking.openURL('https://www.examali.com');
  };

  const openContact = () => {
    navigation.navigate('Contact');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* En-tête avec image de fond */}
      <View style={styles.header}>
        <Image 
          source={require('./../../../Asset/mli1.webp')} 
          style={styles.headerImage} 
          blurRadius={1}
        />
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>À propos de EXAMALI</Text>
      </View>

      {/* Section de bienvenue */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeTitle}>Bienvenue sur EXAMALI</Text>
        <Text style={styles.welcomeText}>
         **Examali** est une application de gestion des anciens sujets d'examen du Diplôme d'Études Fondamentales (DEF) et du Baccalauréat (Bac) au Mali. Elle permet aux étudiants et aux enseignants d'accéder facilement à une bibliothèque de sujets d'examen des années précédentes pour mieux se préparer aux examens futurs.
        </Text>
      </View>

      {/* Section Notre Mission */}
      <View style={styles.missionSection}>
        <Text style={styles.sectionTitle}>Notre Mission</Text>
        <View style={styles.missionCard}>
          <Icon name="flag" size={40} color="#5d894e" style={styles.missionIcon} />
          <Text style={styles.missionText}>
            Briser les barrières de l'éducation traditionnelle en offrant des cours de haute qualité, 
            accessibles sur mobile, adaptés aux réalités africaines et disponibles dans les langues locales.
          </Text>
        </View>
      </View>

      {/* Section Valeurs */}
      <View style={styles.valuesSection}>
        <Text style={styles.sectionTitle}>Nos Valeurs</Text>
        <View style={styles.valuesGrid}>
          <View style={styles.valueCard}>
            <Icon name="accessibility" size={30} color="#5d894e" />
            <Text style={styles.valueTitle}>Accessibilité</Text>
            <Text style={styles.valueText}>
              Des cours accessibles à tous, quel que soit le niveau de revenu ou la localisation
            </Text>
          </View>
          <View style={styles.valueCard}>
            <Icon name="auto-awesome" size={30} color="#5d894e" />
            <Text style={styles.valueTitle}>Qualité</Text>
            <Text style={styles.valueText}>
              Un contenu pédagogique de haute qualité conçu par des experts
            </Text>
          </View>
          <View style={styles.valueCard}>
            <Icon name="groups" size={30} color="#5d894e" />
            <Text style={styles.valueTitle}>Communauté</Text>
            <Text style={styles.valueText}>
              Une communauté solidaire qui s'entraide pour progresser ensemble
            </Text>
          </View>
          <View style={styles.valueCard}>
            <Icon name="update" size={30} color="#5d894e" />
            <Text style={styles.valueTitle}>Innovation</Text>
            <Text style={styles.valueText}>
              Des méthodes d'apprentissage innovantes adaptées au contexte africain
            </Text>
          </View>
        </View>
      </View>

      {/* Section Chiffres clés */}
      <View style={styles.statsSection}>
        <Text style={styles.sectionTitle}>EXAMALI en Chiffres</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>50 000+</Text>
            <Text style={styles.statLabel}>Apprenants</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>300+</Text>
            <Text style={styles.statLabel}>Cours Disponibles</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>15+</Text>
            <Text style={styles.statLabel}>Pays Africains</Text>
          </View>
        </View>
      </View>

      {/* Section Fonctionnalités */}
      <View style={styles.featuresSection}>
        <Text style={styles.sectionTitle}>Ce qui nous différencie</Text>
        <View style={styles.featuresList}>
          {features.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <Icon name={feature.icon} size={28} color="#5d894e" style={styles.featureIcon} />
              <View style={styles.featureText}>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Section Notre Équipe */}
      <View style={styles.teamSection}>
        <Text style={styles.sectionTitle}>Notre Équipe</Text>
        <Text style={styles.teamDescription}>
          Une équipe passionnée d'enseignants, de développeurs et de pédagogues dédiée à transformer l'éducation en Afrique.
        </Text>
        <View style={styles.teamGrid}>
          {teamMembers.map(member => (
            <View key={member.id} style={styles.memberCard}>
              <Image source={member.avatar} style={styles.memberAvatar} />
              <Text style={styles.memberName}>{member.name}</Text>
              <Text style={styles.memberRole}>{member.role}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Section Contact */}
      <View style={styles.contactSection}>
        <Text style={styles.sectionTitle}>Restons en contact</Text>
        <Text style={styles.contactText}>
          Vous avez des questions, des suggestions ou souhaitez collaborer avec nous ?
        </Text>
        
        <TouchableOpacity style={styles.contactButton} onPress={openContact}>
          <Text style={styles.contactButtonText}>Nous contacter</Text>
          <Icon name="arrow-forward" size={20} color="#fff" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.websiteButton} onPress={openWebsite}>
          <Text style={styles.websiteButtonText}>Visitez notre site web</Text>
          <Icon name="language" size={20} color="#5d894e" />
        </TouchableOpacity>
      </View>

      {/* Pied de page */}
      <View style={styles.footer}>
        <Image 
          source={require('./../../../Asset/profileexamali.jpg')} 
          style={styles.logo} 
        />
        <Text style={styles.footerText}>
          © 2023 EXAMALI. Tous droits réservés.
          {"\n"}Transformons l'éducation ensemble.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingBottom: 40,
  },
  header: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 20,
    left: 20,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 20,
    padding: 5,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    marginTop: Platform.OS === 'ios' ? 50 : 20,
  },
  welcomeSection: {
    padding: 25,
    backgroundColor: '#f9f9f9',
    margin: 20,
    borderRadius: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  welcomeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  missionSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  missionCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  missionIcon: {
    marginBottom: 15,
  },
  missionText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    textAlign: 'center',
  },
  valuesSection: {
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  valuesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  valueCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  valueTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginVertical: 10,
    textAlign: 'center',
  },
  valueText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  statsSection: {
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    width: '30%',
    backgroundColor: '#5d894e',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  featuresSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  featuresList: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  featureIcon: {
    marginRight: 15,
    marginTop: 3,
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
  },
  teamSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  teamDescription: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 25,
    paddingHorizontal: 20,
    lineHeight: 24,
  },
  teamGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  memberCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  memberAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#5d894e',
  },
  memberName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  memberRole: {
    fontSize: 14,
    color: '#5d894e',
    textAlign: 'center',
    marginTop: 5,
  },
  contactSection: {
    padding: 25,
    backgroundColor: '#f0f7ee',
    marginHorizontal: 20,
    marginBottom: 30,
    borderRadius: 15,
    alignItems: 'center',
  },
  contactText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5d894e',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 15,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  websiteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  websiteButtonText: {
    color: '#5d894e',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  footerText: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default AboutExamaliScreen;