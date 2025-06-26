import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Switch 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Notification = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Nouveau cours disponible",
      message: "Le cours de mathématiques avancées est maintenant disponible dans votre catalogue",
      time: "Il y a 2 heures",
      read: false,
      icon: 'event-available'
    },
    {
      id: 2,
      title: "Paiement confirmé",
      message: "Votre paiement pour le cours de physique a été confirmé",
      time: "Hier, 14:30",
      read: true,
      icon: 'payment'
    },
    {
      id: 3,
      title: "Rappel de cours",
      message: "Votre cours de chimie commence dans 30 minutes",
      time: "Aujourd'hui, 09:00",
      read: false,
      icon: 'alarm'
    },
    {
      id: 4,
      title: "Promotion spéciale",
      message: "Profitez de -20% sur tous les cours ce week-end",
      time: "Il y a 3 jours",
      read: true,
      icon: 'local-offer'
    },
    {
      id: 5,
      title: "Commentaire sur votre cours",
      message: "Un étudiant a laissé un commentaire sur votre cours de biologie",
      time: "Il y a 4 jours",
      read: true,
      icon: 'comment'
    },
  ]);

  const theme = {
    background: isDarkMode ? '#121212' : '#f3f3f3',
    card: isDarkMode ? '#1e1e1e' : '#fff',
    text: isDarkMode ? '#fff' : '#000',
    subText: isDarkMode ? '#ccc' : '#555',
    border: isDarkMode ? '#333' : '#ddd',
    icon: isDarkMode ? '#ccc' : '#555',
    unread: isDarkMode ? '#2e7d32' : '#4caf50',
  };

  const toggleNotification = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id 
        ? { ...notification, read: !notification.read } 
        : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      read: true
    })));
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* En-tête */}
      <View style={[styles.header, { backgroundColor: theme.card }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={theme.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.text }]}>Notifications</Text>
        <TouchableOpacity onPress={markAllAsRead}>
          <Text style={[styles.markAll, { color: theme.unread }]}>Tout marquer</Text>
        </TouchableOpacity>
      </View>

      {/* Contrôle du mode sombre */}
      <View style={[styles.darkModeContainer, { backgroundColor: theme.card }]}>
        <Text style={[styles.darkModeLabel, { color: theme.text }]}>Mode Sombre</Text>
        <Switch
          value={isDarkMode}
          onValueChange={setIsDarkMode}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>

      {/* Liste des notifications */}
      {notifications.map((notification) => (
        <TouchableOpacity 
          key={notification.id}
          style={[
            styles.notificationCard, 
            { 
              backgroundColor: theme.card,
              borderLeftWidth: notification.read ? 0 : 4,
              borderLeftColor: notification.read ? 'transparent' : theme.unread,
            }
          ]}
          onPress={() => toggleNotification(notification.id)}
        >
          <View style={styles.notificationHeader}>
            <Icon 
              name={notification.icon} 
              size={24} 
              color={notification.read ? theme.icon : theme.unread} 
              style={styles.notificationIcon}
            />
            <Text style={[styles.notificationTitle, { color: theme.text }]}>
              {notification.title}
            </Text>
            {!notification.read && (
              <View style={[styles.unreadBadge, { backgroundColor: theme.unread }]} />
            )}
          </View>
          
          <Text style={[styles.notificationMessage, { color: theme.subText }]}>
            {notification.message}
          </Text>
          
          <View style={styles.notificationFooter}>
            <Text style={[styles.notificationTime, { color: theme.subText }]}>
              {notification.time}
            </Text>
            <Icon 
              name={notification.read ? 'markunread' : 'done-all'} 
              size={20} 
              color={notification.read ? theme.icon : theme.unread} 
            />
          </View>
        </TouchableOpacity>
      ))}

      {/* Aucune notification */}
      {notifications.length === 0 && (
        <View style={styles.emptyContainer}>
          <Icon name="notifications-off" size={60} color={theme.icon} />
          <Text style={[styles.emptyText, { color: theme.text }]}>
            Aucune notification
          </Text>
          <Text style={[styles.emptySubText, { color: theme.subText }]}>
            Vous n'avez aucune notification pour le moment
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    paddingTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  markAll: {
    fontSize: 16,
    fontWeight: '500',
  },
  darkModeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    marginTop: 15,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  darkModeLabel: {
    fontSize: 16,
  },
  notificationCard: {
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  notificationIcon: {
    marginRight: 10,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  unreadBadge: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  notificationMessage: {
    fontSize: 14,
    marginBottom: 10,
    lineHeight: 20,
  },
  notificationFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  notificationTime: {
    fontSize: 12,
    fontStyle: 'italic',
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

export default Notification;