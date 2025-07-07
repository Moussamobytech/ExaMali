import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput,
  Share,
  Platform,
  Alert,
  FlatList,
  PermissionsAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Contacts from 'react-native-contacts';
import LinearGradient from 'react-native-linear-gradient';

const Invite = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [contacts, setContacts] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState([]);

  const theme = {
    background: '#f8f9fa',
    card: '#ffffff',
    text: '#000000',
    subText: '#666666',
    border: '#e0e0e0',
    primary: '#5d894e',
    secondary: '#00D3EB',
    accent: '#ff6b6b',
    icon: '#555555',
  };

  useEffect(() => {
    requestContactsPermission();
  }, []);

  const requestContactsPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: 'Permission des contacts',
            message: 'Nous avons besoin d\'accéder à vos contacts pour vous permettre de les inviter.',
            buttonPositive: 'Accepter',
          }
        );
        
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          loadContacts();
        } else {
          Alert.alert(
            'Permission refusée',
            'Nous ne pouvons pas accéder à vos contacts sans permission.'
          );
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      // iOS gère les permissions différemment
      loadContacts();
    }
  };

  const loadContacts = () => {
    Contacts.getAll()
      .then(contacts => {
        const formattedContacts = contacts
          .filter(c => c.givenName && (c.phoneNumbers?.length > 0))
          .map(c => ({
            id: c.recordID,
            name: `${c.givenName} ${c.familyName || ''}`.trim(),
            phones: c.phoneNumbers?.map(p => p.number) || [],
            selected: false,
          }));
        
        setContacts(formattedContacts);
      })
      .catch(error => {
        console.log('Error loading contacts:', error);
        Alert.alert('Erreur', 'Impossible de charger les contacts');
      });
  };

  const toggleContactSelection = (contactId) => {
    setContacts(prevContacts => 
      prevContacts.map(contact => 
        contact.id === contactId 
          ? { ...contact, selected: !contact.selected } 
          : contact
      )
    );

    setSelectedContacts(prevSelected => {
      if (prevSelected.includes(contactId)) {
        return prevSelected.filter(id => id !== contactId);
      } else {
        return [...prevSelected, contactId];
      }
    });
  };

  const shareInvite = async () => {
    if (selectedContacts.length === 0) {
      Alert.alert('Sélectionnez des contacts', 'Veuillez sélectionner au moins un contact à inviter.');
      return;
    }

    const selected = contacts.filter(c => selectedContacts.includes(c.id));
    
    try {
      const message = `Rejoins-moi sur EXAMALI ! 🚀\n\nTélécharge l'application pour accéder à des cours exceptionnels et améliorer tes connaissances.\n\nUtilise mon code de parrainage: EXAMALI123\n\nLien de téléchargement: https://examali.com/download`;
      
      const result = await Share.share({
        message,
        title: 'Invite à rejoindre EXAMALI',
      });
      
      if (result.action === Share.sharedAction) {
        Alert.alert('Invitations envoyées', `Vos invitations ont été envoyées avec succès à ${selected.length} contact(s)!`);
        setSelectedContacts([]);
      }
    } catch (error) {
      Alert.alert('Erreur', 'Une erreur est survenue lors du partage: ' + error.message);
    }
  };

  const copyReferralCode = () => {
    Alert.alert('Code copié', 'Votre code de parrainage a été copié dans le presse-papiers!');
  };

  const renderContactItem = ({ item }) => (
    <TouchableOpacity 
      style={[
        styles.contactItem, 
        { 
          backgroundColor: theme.card,
          borderColor: theme.border,
        }
      ]}
      onPress={() => toggleContactSelection(item.id)}
    >
      <View style={styles.contactInfo}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {item.name.charAt(0).toUpperCase()}
          </Text>
        </View>
        <View style={styles.contactDetails}>
          <Text style={[styles.contactName, { color: theme.text }]}>{item.name}</Text>
          {item.phones.length > 0 && (
            <Text style={[styles.contactPhone, { color: theme.subText }]}>
              {item.phones[0]}
            </Text>
          )}
        </View>
      </View>
      <View style={styles.checkboxContainer}>
        {item.selected ? (
          <Icon name="check-circle" size={24} color={theme.primary} />
        ) : (
          <Icon name="radio-button-unchecked" size={24} color={theme.icon} />
        )}
      </View>
    </TouchableOpacity>
  );

  const renderEmptyContacts = () => (
    <View style={styles.emptyContainer}>
      <Icon name="people-outline" size={60} color={theme.icon} />
      <Text style={[styles.emptyText, { color: theme.text }]}>
        Aucun contact trouvé
      </Text>
      <Text style={[styles.emptySubText, { color: theme.subText }]}>
        Nous n'avons trouvé aucun contact dans votre répertoire
      </Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* En-tête */}
      <LinearGradient
        colors={[theme.primary, '#4a7c3d']}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Inviter des amis</Text>
        <View style={styles.headerRight} />
      </LinearGradient>

      {/* Section de code de parrainage */}
      {/* <View style={[styles.referralContainer, { backgroundColor: theme.card }]}>
        <Text style={[styles.referralTitle, { color: theme.text }]}>
          Votre code de parrainage
        </Text>
        <TouchableOpacity 
          style={styles.codeContainer}
          onPress={copyReferralCode}
        >
          <Text style={styles.codeText}>EXAMALI123</Text>
          <Icon name="content-copy" size={20} color={theme.primary} />
        </TouchableOpacity>
        <Text style={[styles.referralSubtitle, { color: theme.subText }]}>
          Partagez ce code avec vos amis et obtenez des avantages quand ils s'inscrivent!
        </Text>
      </View> */}

      {/* Barre de recherche */}
      <View style={[styles.searchContainer, { backgroundColor: theme.card }]}>
        <Icon name="search" size={24} color={theme.icon} style={styles.searchIcon} />
        <TextInput
          style={[styles.searchInput, { color: theme.text }]}
          placeholder="Rechercher des contacts..."
          placeholderTextColor={theme.subText}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Liste des contacts */}
      <FlatList
        data={contacts.filter(contact => 
          contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          contact.phones.some(phone => phone.includes(searchQuery))
        )}
        renderItem={renderContactItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={renderEmptyContacts}
        contentContainerStyle={styles.contactsList}
      />

      {/* Bouton d'invitation */}
      <TouchableOpacity 
        style={[styles.inviteButton, { backgroundColor: theme.primary }]}
        onPress={shareInvite}
      >
        <LinearGradient
          colors={[theme.primary, '#4a7c3d']}
          style={styles.inviteButtonGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text style={styles.inviteButtonText}>
            Inviter {selectedContacts.length > 0 ? `(${selectedContacts.length})` : ''}
          </Text>
          <Icon name="send" size={20} color="#fff" style={styles.inviteIcon} />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  headerRight: {
    width: 24,
  },
  referralContainer: {
    padding: 20,
    margin: 15,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  referralTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#5d894e',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  codeText: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: '#5d894e',
  },
  referralSubtitle: {
    fontSize: 14,
    marginTop: 10,
    lineHeight: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  contactsList: {
    paddingBottom: 80,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e0f7fa',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00acc1',
  },
  contactDetails: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 3,
  },
  contactPhone: {
    fontSize: 14,
  },
  checkboxContainer: {
    marginLeft: 10,
  },
  inviteButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  inviteButtonGradient: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  inviteButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  inviteIcon: {
    transform: [{ translateY: -1 }],
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    marginTop: 50,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  emptySubText: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Invite;