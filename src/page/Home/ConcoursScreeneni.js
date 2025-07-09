


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Modal, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ConcoursScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  // Gestion robuste des paramètres
  const concoursName = route.params?.concoursName || 'ENI';
  
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [userData, setUserData] = useState(null);
  const [subscriptionData, setSubscriptionData] = useState(null);

  // Charger les données utilisateur au montage du composant
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('userData');
        if (storedUser) {
          const user = JSON.parse(storedUser);
          setUserData(user);
          
          // Vérifier si l'utilisateur est déjà abonné à ce concours
          const subscriptions = await AsyncStorage.getItem('subscriptions');
          if (subscriptions) {
            const allSubscriptions = JSON.parse(subscriptions);
            const userSubscription = allSubscriptions.find(
              sub => sub.userId === user.id && sub.concours === concoursName && sub.status === 'active'
            );
            setIsSubscribed(!!userSubscription);
          }
        }
      } catch (error) {
        console.error('Erreur lors du chargement des données utilisateur:', error);
      }
    };
    
    loadUserData();
  }, [concoursName]);

  const concoursInfo = {
    ENA: {
      title: "École Nationale d'Administration",
      description: "L'ENA forme les hauts fonctionnaires de l'État malien. Le concours est très sélectif et comprend des épreuves de culture générale, de droit, d'économie et de langues.",
      subjects: ["Culture Générale", "Droit Public", "Économie", "Langues (Français/Anglais)"],
      image: require('./../../../Asset/ena.png')
    },
    INTP: {
      title: "Institut National de la Poste et des Télécommunications",
      description: "L'INTP forme les cadres supérieurs dans les domaines des télécommunications et des technologies de l'information. Le concours comprend des épreuves scientifiques et techniques.",
      subjects: ["Mathématiques", "Physique", "Informatique", "Culture Générale"],
      image: require('./../../../Asset/concours.webp')
    },
    ENI: {
      title: "École Nationale d'Ingénieurs",
      description: "L'ENI forme des ingénieurs polyvalents dans divers domaines techniques. Le concours est axé sur les sciences fondamentales et les capacités d'analyse.",
      subjects: ["Mathématiques", "Physique-Chimie", "Sciences de l'Ingénieur", "Français"],
      image: require('./../../../Asset/concours.webp')
    },
    ISA: {
      title: "Institut Supérieur d'Agronomie",
      description: "L'ISA forme des ingénieurs agronomes spécialisés dans l'agriculture et l'élevage. Le concours teste les connaissances en sciences naturelles et biologiques.",
      subjects: ["Biologie", "Chimie", "Sciences de la Terre", "Culture Générale"],
      image: require('./../../../Asset/concours.webp')
    },
    BTS: {
      title: "Brevet de Technicien Supérieur",
      description: "Le BTS est un diplôme professionnel de niveau Bac+2. Les concours varient selon les spécialités et sont plus accessibles que les grandes écoles.",
      subjects: ["Spécialités techniques", "Français", "Mathématiques", "Langues"],
      image: require('./../../../Asset/concours.webp')
    }
  };

  // Sélection des informations du concours avec fallback
  const concoursData = concoursInfo[concoursName] || concoursInfo.ENA;

  const subscriptionPlans = [
    {
      id: 1,
      name: "Abonnement Mensuel",
      price: "5 000 FCFA",
      features: ["Accès illimité aux sujets", "Corrigés détaillés", "Mises à jour régulières"],
      duration: "1 mois",
      planType: "monthly"
    },
    {
      id: 2,
      name: "Abonnement Trimestriel",
      price: "12 000 FCFA",
      features: ["Économisez 20%", "Accès illimité", "Support prioritaire"],
      duration: "3 mois",
      planType: "quarterly"
    },
    {
      id: 3,
      name: "Abonnement Annuel",
      price: "40 000 FCFA",
      features: ["Économisez 33%", "Accès à tous les concours", "Tutoriels exclusifs"],
      duration: "1 an",
      planType: "yearly"
    }
  ];

  const paymentMethods = [
    {
      id: 'orange_money',
      name: 'Orange Money',
      icon: require('./../../../Asset/orange_money.png')
    },
    {
      id: 'moov_money',
      name: 'Moov Money',
      icon: require('./../../../Asset/moov_money.png')
    },
    {
      id: 'credit_card',
      name: 'Carte Bancaire',
      icon: require('./../../../Asset/credit_card.png')
    }
  ];

  const handleSubscription = (plan) => {
    setSelectedPlan(plan);
    setSelectedPaymentMethod(null); // Réinitialiser la sélection de paiement
    setModalVisible(true);
  };

  const confirmSubscription = async () => {
    if (!selectedPaymentMethod) {
      alert('Veuillez sélectionner un moyen de paiement');
      return;
    }

    setIsLoading(true);
    
    try {
      // Simuler un délai de traitement du paiement
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Créer un nouvel abonnement
      const newSubscription = {
        id: Date.now().toString(),
        userId: userData.id,
        concours: concoursName,
        plan: selectedPlan.planType,
        amount: parseInt(selectedPlan.price.replace(/\D/g, '')),
        paymentMethod: selectedPaymentMethod,
        startDate: new Date().toISOString(),
        endDate: calculateEndDate(selectedPlan.planType),
        status: 'active',
        transactionId: `TRX-${Date.now()}`
      };
      
      // Sauvegarder l'abonnement dans AsyncStorage
      const existingSubscriptions = await AsyncStorage.getItem('subscriptions');
      const subscriptions = existingSubscriptions ? JSON.parse(existingSubscriptions) : [];
      subscriptions.push(newSubscription);
      await AsyncStorage.setItem('subscriptions', JSON.stringify(subscriptions));
      
      // Mettre à jour l'état local
      setSubscriptionData(newSubscription);
      setIsSubscribed(true);
      setModalVisible(false);
    } catch (error) {
      console.error('Erreur lors de la création de l\'abonnement:', error);
      alert('Une erreur s\'est produite lors du traitement de votre abonnement');
    } finally {
      setIsLoading(false);
    }
  };

  const calculateEndDate = (planType) => {
    const endDate = new Date();
    
    switch (planType) {
      case 'monthly':
        endDate.setMonth(endDate.getMonth() + 1);
        break;
      case 'quarterly':
        endDate.setMonth(endDate.getMonth() + 3);
        break;
      case 'yearly':
        endDate.setFullYear(endDate.getFullYear() + 1);
        break;
      default:
        endDate.setMonth(endDate.getMonth() + 1);
    }
    
    return endDate.toISOString();
  };

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('./../../../Asset/return.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{concoursName}</Text>
        <View style={{ width: 30 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Section d'information sur le concours */}
        <View style={styles.infoCard}>
          <Image source={concoursData.image} style={styles.concoursLogo} />
          <Text style={styles.title}>{concoursData.title}</Text>
          <Text style={styles.description}>{concoursData.description}</Text>
          
          <View style={styles.subjectsContainer}>
            <Text style={styles.sectionTitle}>Épreuves du concours</Text>
            {concoursData.subjects.map((subject, index) => (
              <View key={index} style={styles.subjectItem}>
                <View style={styles.bulletPoint} />
                <Text style={styles.subjectText}>{subject}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Section d'abonnement */}
        {isSubscribed ? (
          <View style={styles.subscribedContainer}>
            <Image source={require('./../../../Asset/success.png')} style={styles.successIcon} />
            <Text style={styles.subscribedTitle}>Félicitations !</Text>
            <Text style={styles.subscribedText}>Vous êtes abonné à ce concours</Text>
            
            {subscriptionData && (
              <View style={styles.subscriptionDetails}>
                <Text style={styles.detailText}>
                  <Text style={styles.detailLabel}>Formule: </Text> 
                  {subscriptionData.plan === 'monthly' ? 'Mensuel' : 
                   subscriptionData.plan === 'quarterly' ? 'Trimestriel' : 'Annuel'}
                </Text>
                <Text style={styles.detailText}>
                  <Text style={styles.detailLabel}>Prix: </Text> 
                  {subscriptionData.amount.toLocaleString('fr-FR')} FCFA
                </Text>
                <Text style={styles.detailText}>
                  <Text style={styles.detailLabel}>Expire le: </Text> 
                  {formatDate(subscriptionData.endDate)}
                </Text>
              </View>
            )}
            
            <TouchableOpacity 
              style={styles.accessButton}
              onPress={() => navigation.navigate('SujetsConcours', { concoursName })}
            >
              <Text style={styles.accessButtonText}>Accéder aux sujets</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <Text style={styles.sectionTitle}>Choisissez votre formule d'abonnement</Text>
            
            <View style={styles.plansContainer}>
              {subscriptionPlans.map(plan => (
                <View key={plan.id} style={styles.planCard}>
                  <View style={styles.planHeader}>
                    <Text style={styles.planName}>{plan.name}</Text>
                    <Text style={styles.planDuration}>{plan.duration}</Text>
                  </View>
                  
                  <Text style={styles.planPrice}>{plan.price}</Text>
                  
                  <View style={styles.featuresContainer}>
                    {plan.features.map((feature, index) => (
                      <View key={index} style={styles.featureItem}>
                        <Image source={require('./../../../Asset/check.png')} style={styles.checkIcon} />
                        <Text style={styles.featureText}>{feature}</Text>
                      </View>
                    ))}
                  </View>
                  
                  <TouchableOpacity 
                    style={styles.subscribeButton}
                    onPress={() => handleSubscription(plan)}
                  >
                    <Text style={styles.subscribeButtonText}>S'abonner</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
            
            <Text style={styles.note}>
              * L'abonnement donne accès à tous les sujets et corrigés des 10 dernières années
            </Text>
          </>
        )}
      </ScrollView>

      {/* Modal de confirmation */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Confirmer votre abonnement</Text>
            
            <View style={styles.planDetails}>
              <Text style={styles.planNameModal}>{selectedPlan?.name}</Text>
              <Text style={styles.planPriceModal}>{selectedPlan?.price}</Text>
              <Text style={styles.planDurationModal}>Durée: {selectedPlan?.duration}</Text>
            </View>
            
            <View style={styles.paymentOptions}>
              <Text style={styles.paymentTitle}>Moyen de paiement</Text>
              {paymentMethods.map(method => (
                <TouchableOpacity 
                  key={method.id}
                  style={[
                    styles.paymentOption, 
                    selectedPaymentMethod === method.id && styles.selectedPaymentOption
                  ]}
                  onPress={() => setSelectedPaymentMethod(method.id)}
                >
                  <Image source={method.icon} style={styles.paymentIcon} />
                  <Text style={styles.paymentText}>{method.name}</Text>
                  {selectedPaymentMethod === method.id && (
                    <Image 
                      source={require('./../../../Asset/check.png')} 
                      style={styles.paymentCheckIcon} 
                    />
                  )}
                </TouchableOpacity>
              ))}
            </View>
            
            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Annuler</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.confirmButton}
                onPress={confirmSubscription}
                disabled={isLoading}
              >
                {isLoading ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text style={styles.confirmButtonText}>Payer et s'abonner</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#000',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 50,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  backIcon: {
    width: 25,
    height: 25,

  },
  content: {
    padding: 20,
    paddingBottom: 30,
  },
  infoCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    alignItems: 'center',
  },
  concoursLogo: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E0094',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 20,
  },
  subjectsContainer: {
    alignSelf: 'stretch',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  subjectItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingLeft: 10,
  },
  bulletPoint: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1E0094',
    marginRight: 10,
  },
  subjectText: {
    fontSize: 16,
    color: '#444',
  },
  plansContainer: {
    marginBottom: 20,
  },
  planCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#eaeaea',
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  planName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E0094',
  },
  planDuration: {
    fontSize: 14,
    color: '#666',
    backgroundColor: '#f0f4ff',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
  planPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B00',
    textAlign: 'center',
    marginVertical: 10,
  },
  featuresContainer: {
    marginVertical: 15,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkIcon: {
    width: 18,
    height: 18,
    tintColor: '#37B926',
    marginRight: 10,
  },
  featureText: {
    fontSize: 15,
    color: '#444',
  },
  subscribeButton: {
    backgroundColor: '#1E0094',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  subscribeButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  note: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 10,
  },
  subscribedContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  subscriptionDetails: {
    width: '100%',
    marginVertical: 15,
    padding: 15,
    backgroundColor: '#f0f4ff',
    borderRadius: 10,
  },
  detailLabel: {
    fontWeight: 'bold',
    color: '#1E0094',
  },
  detailText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#444',
  },
  successIcon: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  subscribedTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#37B926',
    marginBottom: 10,
  },
  subscribedText: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 25,
  },
  accessButton: {
    backgroundColor: '#1E0094',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  accessButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 20,
    padding: 25,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E0094',
    textAlign: 'center',
    marginBottom: 20,
  },
  planDetails: {
    backgroundColor: '#f0f4ff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  planNameModal: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  planPriceModal: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B00',
    marginBottom: 5,
  },
  planDurationModal: {
    fontSize: 16,
    color: '#666',
  },
  paymentOptions: {
    marginBottom: 25,
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
    position: 'relative',
  },
  selectedPaymentOption: {
    borderColor: '#1E0094',
    backgroundColor: '#f0f4ff',
  },
  paymentIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  paymentCheckIcon: {
    width: 20,
    height: 20,
    tintColor: '#37B926',
    position: 'absolute',
    right: 15,
  },
  paymentText: {
    fontSize: 16,
    color: '#333',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
  },
  cancelButtonText: {
    color: '#555',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: '#1E0094',
    paddingVertical: 15,
    borderRadius: 10,
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ConcoursScreen;