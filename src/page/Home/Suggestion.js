import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TextInput, 
  TouchableOpacity, 
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Suggestion = () => {
  const navigation = useNavigation();
  const [suggestion, setSuggestion] = useState('');
  const [email, setEmail] = useState('');
  const [suggestionsList, setSuggestionsList] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);
  const maxCharacters = 500;

  const loadUserEmail = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        const { email } = JSON.parse(userData);
        setEmail(email);
      }
    } catch (error) {
      console.error('Error loading user email:', error);
    }
  };

  useEffect(() => {
    loadUserEmail();
    loadSuggestions();
  }, []);

  const loadSuggestions = async () => {
    try {
      const savedSuggestions = await AsyncStorage.getItem('userSuggestions');
      if (savedSuggestions) {
        setSuggestionsList(JSON.parse(savedSuggestions));
      }
    } catch (error) {
      console.error('Error loading suggestions:', error);
    }
  };

  const saveSuggestion = async () => {
    if (suggestion.trim() === '') {
      Alert.alert('Suggestion vide', 'Veuillez écrire votre suggestion avant de soumettre.');
      return;
    }
    
    if (suggestion.length < 10) {
      Alert.alert('Suggestion trop courte', 'Votre suggestion doit contenir au moins 10 caractères.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const newSuggestion = {
        id: Date.now().toString(),
        text: suggestion,
        date: new Date().toLocaleDateString('fr-FR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        }),
        status: 'En attente'
      };

      const updatedList = [newSuggestion, ...suggestionsList];
      setSuggestionsList(updatedList);
      
      await AsyncStorage.setItem('userSuggestions', JSON.stringify(updatedList));
      
      setSuggestion('');
      setCharacterCount(0);
      
      Alert.alert(
        'Merci !', 
        'Votre suggestion a été soumise avec succès. Notre équipe va l\'examiner.',
        [
          { text: 'OK', onPress: () => navigation.goBack() }
        ]
      );
    } catch (error) {
      console.error('Error saving suggestion:', error);
      Alert.alert('Erreur', 'Une erreur est survenue lors de l\'enregistrement de votre suggestion.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTextChange = (text) => {
    if (text.length <= maxCharacters) {
      setSuggestion(text);
      setCharacterCount(text.length);
    }
  };

  const renderSuggestionItem = (item) => (
    <View style={styles.suggestionCard} key={item.id}>
      <View style={styles.suggestionHeader}>
        <Text style={styles.suggestionDate}>{item.date}</Text>
        <View style={[
          styles.statusBadge,
          item.status === 'Acceptée' && styles.statusAccepted,
          item.status === 'Rejetée' && styles.statusRejected
        ]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>
      <Text style={styles.suggestionText}>{item.text}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Suggestions & Améliorations</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Hero Section */}
        <View style={styles.heroContainer}>
          <Image 
            source={require('./../../../Asset/suggestion.png')} 
            style={styles.heroImage} 
          />
          <Text style={styles.heroTitle}>Vos idées comptent !</Text>
          <Text style={styles.heroText}>
            Participez à l'amélioration de l'application en partageant vos idées, suggestions ou en signalant des problèmes.
          </Text>
        </View>

        {/* Form Section */}
        <View style={styles.formContainer}>
          <Text style={styles.sectionTitle}>Proposer une amélioration</Text>
          
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Décrivez votre suggestion en détail..."
              placeholderTextColor="#aaa"
              multiline
              numberOfLines={5}
              value={suggestion}
              onChangeText={handleTextChange}
              textAlignVertical="top"
            />
            <Text style={styles.charCounter}>
              {characterCount}/{maxCharacters} caractères
            </Text>
          </View>

          <TouchableOpacity 
            style={styles.submitButton}
            onPress={saveSuggestion}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <>
                <Text style={styles.submitButtonText}>Soumettre ma suggestion</Text>
                <Icon name="send" size={20} color="#fff" style={{ marginLeft: 10 }} />
              </>
            )}
          </TouchableOpacity>
        </View>

        {/* Previous Suggestions */}
        {suggestionsList.length > 0 && (
          <View style={styles.previousContainer}>
            <Text style={styles.sectionTitle}>Vos suggestions précédentes</Text>
            {suggestionsList.map(renderSuggestionItem)}
          </View>
        )}

        {/* Empty State */}
        {suggestionsList.length === 0 && (
          <View style={styles.emptyContainer}>
            <Icon name="lightbulb-outline" size={60} color="#ddd" />
            <Text style={styles.emptyTitle}>Aucune suggestion soumise</Text>
            <Text style={styles.emptyText}>
              Vous n'avez pas encore soumis de suggestions. Vos idées nous aident à améliorer l'application !
            </Text>
          </View>
        )}

        {/* Tips Section */}
        <View style={styles.tipsContainer}>
          <Text style={styles.tipsTitle}>Conseils pour une bonne suggestion :</Text>
          <View style={styles.tipItem}>
            <Icon name="check-circle" size={20} color="#5d894e" />
            <Text style={styles.tipText}>Soyez précis et détaillé</Text>
          </View>
          <View style={styles.tipItem}>
            <Icon name="check-circle" size={20} color="#5d894e" />
            <Text style={styles.tipText}>Expliquez le problème ou l'amélioration</Text>
          </View>
          <View style={styles.tipItem}>
            <Icon name="check-circle" size={20} color="#5d894e" />
            <Text style={styles.tipText}>Proposez une solution si possible</Text>
          </View>
          <View style={styles.tipItem}>
            <Icon name="check-circle" size={20} color="#5d894e" />
            <Text style={styles.tipText}>Soyez constructif et poli</Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContainer: {
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#5d894e',
    paddingVertical: 15,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
  },
  heroContainer: {
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  heroImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  heroText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  formContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 15,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  inputContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  input: {
    minHeight: 150,
    padding: 15,
    fontSize: 16,
    color: '#333',
    textAlignVertical: 'top',
  },
  charCounter: {
    textAlign: 'right',
    padding: 10,
    color: '#888',
    fontSize: 14,
    backgroundColor: '#f9f9f9',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  submitButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 2,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  previousContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 15,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  suggestionCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#5d894e',
  },
  suggestionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  suggestionDate: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 15,
    backgroundColor: '#e0e0e0',
  },
  statusAccepted: {
    backgroundColor: '#e8f5e9',
  },
  statusRejected: {
    backgroundColor: '#ffebee',
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  suggestionText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },
  emptyContainer: {
    alignItems: 'center',
    padding: 30,
    margin: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 15,
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  tipsContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    borderRadius: 15,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  tipText: {
    fontSize: 15,
    color: '#555',
    marginLeft: 10,
  },
});

export default Suggestion;