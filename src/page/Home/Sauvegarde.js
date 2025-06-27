import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  TextInput,
  ScrollView,
  RefreshControl
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Sauvegarde = () => {
  const navigation = useNavigation();
  const [savedSubjects, setSavedSubjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('tous');
  const [refreshing, setRefreshing] = useState(false);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [sortOrder, setSortOrder] = useState('recent');

  // Charger les sujets sauvegardés depuis AsyncStorage
  useEffect(() => {
    loadSavedSubjects();
  }, []);

  const loadSavedSubjects = async () => {
    setRefreshing(true);
    try {
      const savedSubjectsData = await AsyncStorage.getItem('savedSubjects');
      if (savedSubjectsData) {
        setSavedSubjects(JSON.parse(savedSubjectsData));
      }
    } catch (error) {
      console.error('Erreur lors du chargement des sujets sauvegardés:', error);
    } finally {
      setRefreshing(false);
    }
  };

  // Supprimer un sujet sauvegardé
  const removeSavedSubject = async (id) => {
    try {
      const updatedSubjects = savedSubjects.filter(subject => subject.id !== id);
      setSavedSubjects(updatedSubjects);
      await AsyncStorage.setItem('savedSubjects', JSON.stringify(updatedSubjects));
    } catch (error) {
      console.error('Erreur lors de la suppression du sujet:', error);
    }
  };

  // Filtrer et trier les sujets
  const filteredSubjects = savedSubjects.filter(subject => {
    const matchesSearch = subject.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          subject.subject.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (filter === 'tous') return matchesSearch;
    return matchesSearch && subject.type === filter;
  });

  const sortedSubjects = [...filteredSubjects].sort((a, b) => {
    if (sortOrder === 'recent') {
      return new Date(b.dateSaved) - new Date(a.dateSaved);
    } else if (sortOrder === 'ancien') {
      return new Date(a.dateSaved) - new Date(b.dateSaved);
    } else if (sortOrder === 'matiere') {
      return a.subject.localeCompare(b.subject);
    }
    return 0;
  });

  // Rendu d'un sujet sauvegardé
  const renderSubjectItem = ({ item }) => (
    <View style={styles.subjectCard}>
      <View style={styles.subjectHeader}>
        <View style={styles.subjectTypeBadge}>
          <Text style={styles.subjectTypeText}>{item.type}</Text>
        </View>
        <Text style={styles.subjectDate}>
          Sauvegardé le {new Date(item.dateSaved).toLocaleDateString()}
        </Text>
      </View>
      
      <Text style={styles.subjectTitle}>{item.title}</Text>
      <View style={styles.subjectDetails}>
        <Text style={styles.subjectDetail}>Matière: <Text style={styles.detailValue}>{item.subject}</Text></Text>
        <Text style={styles.subjectDetail}>Année: <Text style={styles.detailValue}>{item.year}</Text></Text>
        {item.series && <Text style={styles.subjectDetail}>Série: <Text style={styles.detailValue}>{item.series}</Text></Text>}
      </View>
      
      <View style={styles.actionsContainer}>
        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={() => navigation.navigate('SujetDetail', { subjectId: item.id })}
        >
          <Icon name="visibility" size={20} color="#5d894e" />
          <Text style={styles.actionText}>Voir</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={() => removeSavedSubject(item.id)}
        >
          <Icon name="delete" size={20} color="#e74c3c" />
          <Text style={styles.actionText}>Supprimer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sujets Sauvegardés</Text>
        <View style={{ width: 28 }} />
      </View>

      {/* Barre de recherche et filtres */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Icon name="search" size={24} color="#777" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Rechercher un sujet..."
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Icon name="close" size={20} color="#777" />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.filterContainer}>
          <TouchableOpacity 
            style={styles.filterButton}
            onPress={() => setFilterModalVisible(true)}
          >
            <Icon name="filter-list" size={24} color="#5d894e" />
            <Text style={styles.filterText}>Filtrer</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Statistiques */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{savedSubjects.length}</Text>
          <Text style={styles.statLabel}>Sujets sauvegardés</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            {savedSubjects.filter(s => s.type === 'DEF').length}
          </Text>
          <Text style={styles.statLabel}>Sujets DEF</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            {savedSubjects.filter(s => s.type === 'BAC').length}
          </Text>
          <Text style={styles.statLabel}>Sujets BAC</Text>
        </View>
      </View>

      {/* Liste des sujets */}
      {sortedSubjects.length > 0 ? (
        <FlatList
          data={sortedSubjects}
          renderItem={renderSubjectItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContent}
          refreshControl={
            <RefreshControl 
              refreshing={refreshing} 
              onRefresh={loadSavedSubjects} 
              colors={['#5d894e']}
            />
          }
          ListFooterComponent={<View style={{ height: 30 }} />}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Icon name="bookmark-border" size={80} color="#ccc" />
          <Text style={styles.emptyTitle}>Aucun sujet sauvegardé</Text>
          <Text style={styles.emptyText}>
            Vous n'avez encore sauvegardé aucun sujet. Parcourez les sujets DEF et BAC et ajoutez vos préférés ici.
          </Text>
          <TouchableOpacity 
            style={styles.exploreButton}
            onPress={() => navigation.navigate('SujetsDEF')}
          >
            <Text style={styles.exploreButtonText}>Explorer les sujets</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Modal de filtrage */}
      <Modal
        visible={filterModalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setFilterModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Filtrer et Trier</Text>
            
            <Text style={styles.filterSectionTitle}>Type de sujet</Text>
            <View style={styles.filterOptions}>
              {['tous', 'DEF', 'BAC'].map(type => (
                <TouchableOpacity
                  key={type}
                  style={[
                    styles.filterOption, 
                    filter === type && styles.filterOptionSelected
                  ]}
                  onPress={() => setFilter(type)}
                >
                  <Text style={filter === type ? styles.filterOptionTextSelected : styles.filterOptionText}>
                    {type === 'tous' ? 'Tous' : type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            
            <Text style={styles.filterSectionTitle}>Trier par</Text>
            <View style={styles.sortOptions}>
              {[
                { value: 'recent', label: 'Plus récent' },
                { value: 'ancien', label: 'Plus ancien' },
                { value: 'matiere', label: 'Matière' }
              ].map(option => (
                <TouchableOpacity
                  key={option.value}
                  style={styles.sortOption}
                  onPress={() => setSortOrder(option.value)}
                >
                  <Icon 
                    name={sortOrder === option.value ? "radio-button-checked" : "radio-button-unchecked"} 
                    size={24} 
                    color={sortOrder === option.value ? "#5d894e" : "#777"} 
                  />
                  <Text style={[
                    styles.sortOptionText,
                    sortOrder === option.value && styles.sortOptionTextSelected
                  ]}>
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            
            <TouchableOpacity 
              style={styles.applyButton}
              onPress={() => setFilterModalVisible(false)}
            >
              <Text style={styles.applyButtonText}>Appliquer</Text>
            </TouchableOpacity>
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
    backgroundColor: '#5d894e',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  searchContainer: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 45,
    marginRight: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    height: '100%',
    color: '#333',
  },
  filterContainer: {
    flexDirection: 'row',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  filterText: {
    marginLeft: 5,
    color: '#5d894e',
    fontWeight: '500',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  statCard: {
    alignItems: 'center',
    backgroundColor: '#f0f7ee',
    padding: 15,
    borderRadius: 10,
    width: '30%',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5d894e',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
  },
  listContent: {
    padding: 15,
  },
  subjectCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  subjectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  subjectTypeBadge: {
    backgroundColor: '#e9f5e3',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  subjectTypeText: {
    color: '#5d894e',
    fontWeight: 'bold',
    fontSize: 12,
  },
  subjectDate: {
    fontSize: 12,
    color: '#777',
  },
  subjectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subjectDetails: {
    marginBottom: 15,
  },
  subjectDetail: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  detailValue: {
    fontWeight: '500',
    color: '#333',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 15,
    marginTop: 5,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  actionText: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '500',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  exploreButton: {
    backgroundColor: '#5d894e',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
  },
  exploreButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  filterSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#555',
  },
  filterOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  filterOption: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: '#f0f2f5',
    borderRadius: 8,
    alignItems: 'center',
  },
  filterOptionSelected: {
    backgroundColor: '#e9f5e3',
    borderWidth: 1,
    borderColor: '#5d894e',
  },
  filterOptionText: {
    color: '#555',
    fontWeight: '500',
  },
  filterOptionTextSelected: {
    color: '#5d894e',
    fontWeight: 'bold',
  },
  sortOptions: {
    marginBottom: 20,
  },
  sortOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sortOptionText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#555',
  },
  sortOptionTextSelected: {
    color: '#5d894e',
    fontWeight: 'bold',
  },
  applyButton: {
    backgroundColor: '#5d894e',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Sauvegarde;