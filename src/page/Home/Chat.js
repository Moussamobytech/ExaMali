

// import React, { useEffect, useState, useRef } from 'react';
// import {
//   View, Text, FlatList, TextInput, TouchableOpacity,
//   Image, StyleSheet, KeyboardAvoidingView, Platform, ActivityIndicator
// } from 'react-native';
// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const Chat = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [chatId, setChatId] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [messageText, setMessageText] = useState('');
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const unsubscribeMessagesRef = useRef(null);
//   const unsubscribeUsersRef = useRef(null);

//   const currentUser = auth().currentUser;
//   const dynamicTextColor = isDarkMode ? '#fff' : '#000';

//   const toggleTheme = () => setIsDarkMode(!isDarkMode);

//   // Récupération des utilisateurs (nom seulement)
//   useEffect(() => {
//     if (!currentUser) return;

//     setLoading(true);
//     const unsubscribe = firestore()
//       .collection('users')
//       .where('uid', '!=', currentUser.uid)
//       .onSnapshot(
//         snapshot => {
//           const fetchedUsers = snapshot.docs.map(doc => ({
//             id: doc.id,
//             uid: doc.data().uid,
//             name: doc.data().username || 'Utilisateur'
//           }));
//           setUsers(fetchedUsers);
//           setLoading(false);
//         },
//         error => {
//           console.error('Error fetching users:', error);
//           setLoading(false);
//         }
//       );

//     unsubscribeUsersRef.current = unsubscribe;

//     return () => {
//       unsubscribeUsersRef.current?.();
//       unsubscribeMessagesRef.current?.();
//     };
//   }, [currentUser]);

//   // Démarrer une conversation
//   const startChat = async (user) => {
//     if (!currentUser?.uid) return;

//     setLoading(true);
//     const newChatId = [currentUser.uid, user.uid].sort().join('_');

//     if (unsubscribeMessagesRef.current) {
//       unsubscribeMessagesRef.current();
//     }

//     try {
//       const chatRef = firestore().collection('chats').doc(newChatId);
//       const chatDoc = await chatRef.get();

//       if (!chatDoc.exists) {
//         await chatRef.set({
//           participants: [currentUser.uid, user.uid],
//           participantNames: {
//             [currentUser.uid]: currentUser.displayName || 'Vous',
//             [user.uid]: user.name
//           },
//           createdAt: firestore.FieldValue.serverTimestamp()
//         });
//       }

//       setSelectedUser(user);
//       setChatId(newChatId);
//       setMessages([]);

//       const unsubscribe = chatRef
//         .collection('messages')
//         .orderBy('createdAt', 'asc')
//         .onSnapshot(
//           snapshot => {
//             const msgs = snapshot.docs.map(doc => ({
//               id: doc.id,
//               ...doc.data(),
//               createdAt: doc.data().createdAt?.toDate()
//             }));
//             setMessages(msgs);
//             setLoading(false);
//           },
//           error => {
//             console.error('Error fetching messages:', error);
//             setLoading(false);
//           }
//         );

//       unsubscribeMessagesRef.current = unsubscribe;
//     } catch (error) {
//       console.error('Error starting chat:', error);
//       setLoading(false);
//     }
//   };

//   // Envoi de message
//   const sendMessage = async () => {
//     if (!messageText.trim() || !chatId || !selectedUser || !currentUser) return;

//     try {
//       await firestore()
//         .collection('chats')
//         .doc(chatId)
//         .collection('messages')
//         .add({
//           text: messageText,
//           senderId: currentUser.uid,
//           createdAt: firestore.FieldValue.serverTimestamp(),
//           read: false
//         });

//       setMessageText('');
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   };

//   const renderMessage = ({ item }) => {
//     const isMyMessage = item.senderId === currentUser?.uid;
//     return (
//       <View style={[
//         styles.messageContainer,
//         isMyMessage ? styles.myMessage : styles.otherMessage,
//         isMyMessage ? { backgroundColor: '#007AFF' } : { backgroundColor: isDarkMode ? '#333' : '#e5e5e5' }
//       ]}>
//         <Text style={[
//           styles.messageText,
//           isMyMessage ? { color: '#fff' } : { color: dynamicTextColor }
//         ]}>
//           {item.text}
//         </Text>
//       </View>
//     );
//   };

//   const renderUserItem = ({ item }) => (
//     <TouchableOpacity 
//       style={styles.userItem}
//       onPress={() => startChat(item)}
//     >
//       <View style={[
//         styles.profileIconContainer,
//         isDarkMode ? styles.profileIconDark : styles.profileIconLight
//       ]}>
//         <Icon 
//           name="person" 
//           size={30} 
//           color={isDarkMode ? '#121212' : '#fff'} 
//         />
//       </View>
//       <Text style={[styles.userName, { color: dynamicTextColor }]}>
//         {item.name}
//       </Text>
//     </TouchableOpacity>
//   );

//   if (loading && users.length === 0) {
//     return (
//       <View style={[styles.loadingContainer, isDarkMode && { backgroundColor: '#121212' }]}>
//         <ActivityIndicator size="large" color="#007AFF" />
//       </View>
//     );
//   }

//   return (
//     <View style={[styles.container, isDarkMode ? darkStyles.container : lightStyles.container]}>
//       {/* En-tête */}
//       <View style={styles.headerContainer}>
//         {selectedUser ? (
//           <TouchableOpacity onPress={() => {
//             setSelectedUser(null);
//             if (unsubscribeMessagesRef.current) {
//               unsubscribeMessagesRef.current();
//               unsubscribeMessagesRef.current = null;
//             }
//           }}>
//             <Image 
//               source={require('./../../../Asset/return.png')} 
//               style={[styles.backIcon, { tintColor: dynamicTextColor }]} 
//             />
//           </TouchableOpacity>
//         ) : <View style={{ width: 24 }} />}

//         <Text style={[styles.headerTitle, { color: dynamicTextColor }]}>
//           {selectedUser ? selectedUser.name : "Contacts"}
//         </Text>

//         <TouchableOpacity onPress={toggleTheme} style={styles.toggleContainer}>
//           <View style={[styles.toggleSwitch, isDarkMode ? styles.toggleOn : styles.toggleOff]}>
//             <Text style={[styles.toggleText, isDarkMode ? styles.toggleTextOn : styles.toggleTextOff]}>
//               {isDarkMode ? '☀️' : '🌙'}
//             </Text>
//           </View>
//         </TouchableOpacity>
//       </View>

//       {/* Liste des contacts ou chat */}
//       {!selectedUser ? (
//         <FlatList
//           data={users}
//           keyExtractor={item => item.uid}
//           renderItem={renderUserItem}
//           ListEmptyComponent={
//             <View style={styles.emptyContainer}>
//               <Text style={{ color: dynamicTextColor }}>Aucun contact trouvé</Text>
//             </View>
//           }
//         />
//       ) : (
//         <>
//           <FlatList
//             data={messages}
//             keyExtractor={item => item.id}
//             renderItem={renderMessage}
//             contentContainerStyle={styles.messagesContainer}
//             inverted={false}
//             ListEmptyComponent={
//               <View style={styles.emptyContainer}>
//                 <Text style={{ color: dynamicTextColor }}>Envoyez votre premier message</Text>
//               </View>
//             }
//           />
//           <KeyboardAvoidingView
//             behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//             keyboardVerticalOffset={Platform.select({ ios: 80, android: 0 })}
//           >
//             <View style={[styles.inputContainer, { 
//               backgroundColor: isDarkMode ? '#1e1e1e' : '#fff',
//               borderTopColor: isDarkMode ? '#333' : '#ccc'
//             }]}>
//               <TextInput
//                 style={[
//                   styles.input,
//                   { 
//                     backgroundColor: isDarkMode ? '#333' : '#f9f9f9', 
//                     color: dynamicTextColor,
//                     borderColor: isDarkMode ? '#444' : '#ccc'
//                   }
//                 ]}
//                 placeholder="Écrivez un message..."
//                 placeholderTextColor="#999"
//                 value={messageText}
//                 onChangeText={setMessageText}
//                 multiline
//               />
//               <TouchableOpacity 
//                 onPress={sendMessage} 
//                 style={[
//                   styles.sendButton,
//                   messageText.trim() === '' && styles.sendButtonDisabled
//                 ]}
//                 disabled={messageText.trim() === ''}
//               >
//                 <Text style={styles.sendText}>Envoyer</Text>
//               </TouchableOpacity>
//             </View>
//           </KeyboardAvoidingView>
//         </>
//       )}
//     </View>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   backIcon: {
//     width: 24,
//     height: 24
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     flex: 1,
//     textAlign: 'center',
//     marginHorizontal: 10
//   },
//   userItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   profileIconContainer: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   profileIconLight: {
//     backgroundColor: '#007AFF',
//   },
//   profileIconDark: {
//     backgroundColor: '#BB86FC',
//   },
//   userName: {
//     fontSize: 18,
//     fontWeight: '500',
//   },
//   messageContainer: {
//     padding: 10,
//     borderRadius: 10,
//     marginVertical: 5,
//     maxWidth: '80%',
//   },
//   myMessage: {
//     alignSelf: 'flex-end',
//     marginRight: 10,
//   },
//   otherMessage: {
//     alignSelf: 'flex-start',
//     marginLeft: 10,
//   },
//   messageText: {
//     fontSize: 16,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     padding: 10,
//     borderTopWidth: 1,
//     alignItems: 'center',
//   },
//   input: {
//     flex: 1,
//     padding: 10,
//     borderWidth: 1,
//     borderRadius: 20,
//     maxHeight: 100,
//     fontSize: 16,
//   },
//   sendButton: {
//     marginLeft: 10,
//     backgroundColor: '#007AFF',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//   },
//   sendButtonDisabled: {
//     opacity: 0.5,
//   },
//   sendText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   emptyContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20
//   },
//   toggleContainer: {
//     padding: 5
//   },
//   toggleSwitch: {
//     width: 50,
//     height: 25,
//     borderRadius: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   toggleOn: {
//     backgroundColor: '#4caf50'
//   },
//   toggleOff: {
//     backgroundColor: '#f44336'
//   },
//   toggleText: {
//     fontSize: 12,
//     fontWeight: 'bold'
//   },
//   toggleTextOn: {
//     color: '#fff'
//   },
//   toggleTextOff: {
//     color: '#fff'
//   },
// });

// // Thèmes
// const darkStyles = StyleSheet.create({
//   container: {
//     backgroundColor: '#121212',
//   }
// });

// const lightStyles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//   }
// });

// export default Chat;







import React, { useEffect, useState } from 'react';
import {
  View, Text, FlatList, TextInput, TouchableOpacity,
  Image, StyleSheet, KeyboardAvoidingView, Platform, ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'http://192.168.1.6:3000'; 


const Chat = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [chatId, setChatId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');  
  const [currentUser, setCurrentUser] = useState(null); // Loaded from AsyncStorage
  const [authToken, setAuthToken] = useState(null); // Loaded from AsyncStorage
  const dynamicTextColor = isDarkMode ? '#fff' : '#000';

  // Initialize Axios with auth token
  const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // Load current user and token from AsyncStorage
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        const userDataString = await AsyncStorage.getItem('userData');
        if (token && userDataString) {
          const userData = JSON.parse(userDataString);
          setAuthToken(token);
          setCurrentUser({
            uid: userData.email, // Use email as unique identifier
            displayName: userData.username,
            id: userData.email // Will be replaced with userId from token
          });
          // Update axios headers with token
          axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`;
        } else {
          setError('Utilisateur non authentifié. Veuillez vous connecter.');
        }
        setLoading(false);
      } catch (err) {
        console.error('Error loading user data:', err);
        setError('Erreur lors du chargement des données utilisateur.');
        setLoading(false);
      }
    };
    loadUserData();
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Fetch users
  useEffect(() => {
    if (!currentUser || !authToken) return;

    setLoading(true);
    setError('');
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get('/api/users');
        const fetchedUsers = response.data.map(user => ({
          id: user.id,
          uid: user.id.toString(),
          name: user.username || 'Utilisateur'
        }));
        setUsers(fetchedUsers);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error.message, error.code);
        setError('Impossible de charger les utilisateurs. Vérifiez votre connexion.');
        setLoading(false);
      }
    };

    fetchUsers();
  }, [currentUser, authToken]);

  // Start a conversation
  const startChat = async (user) => {
    if (!currentUser?.uid || !authToken) return;

    setLoading(true);
    setError('');
    
    try {
      const response = await axiosInstance.post('/api/chats', {
        userId: user.id
      });

      const chatId = response.data.chatId;
      
      setSelectedUser(user);
      setChatId(chatId);
      
      const messagesResponse = await axiosInstance.get(`/api/chats/${chatId}/messages`);
      setMessages(messagesResponse.data.map(msg => ({
        ...msg,
        id: msg.id.toString(),
        senderId: msg.sender_id.toString(),
        createdAt: new Date(msg.created_at)
      })));

      setLoading(false);
    } catch (error) {
      console.error('Error starting chat:', error.message, error.code);
      setError('Impossible de démarrer la conversation. Réessayez.');
      setLoading(false);
    }
  };

  // Send a message
  const sendMessage = async () => {
    if (!messageText.trim() || !chatId || !selectedUser || !currentUser || !authToken) return;

    try {
      const newMessage = {
        text: messageText,
        chatId: chatId
      };

      const response = await axiosInstance.post(`/api/chats/${chatId}/messages`, newMessage);
      
      setMessages(prev => [...prev, {
        ...response.data,
        id: response.data.id.toString(),
        senderId: response.data.sender_id.toString(),
        createdAt: new Date(response.data.created_at)
      }]);
      
      setMessageText('');
    } catch (error) {
      console.error('Error sending message:', error.message, error.code);
      setError('Erreur lors de l\'envoi du message. Réessayez.');
    }
  };

  // Poll for new messages
  useEffect(() => {
    if (!chatId || !authToken) return;

    const interval = setInterval(async () => {
      try {
        const lastMessageId = messages.length > 0 ? messages[messages.length - 1].id : null;
        const response = await axiosInstance.get(`/api/chats/${chatId}/messages`, {
          params: { lastMessageId }
        });
        
        if (response.data.length > 0) {
          const newMessages = response.data
            .filter(msg => !messages.some(m => m.id === msg.id.toString())) // Avoid duplicates
            .map(msg => ({
              ...msg,
              id: msg.id.toString(),
              senderId: msg.sender_id.toString(),
              createdAt: new Date(msg.created_at)
            }));
          setMessages(prev => [...prev, ...newMessages]);
        }
      } catch (error) {
        console.error('Error polling messages:', error.message, error.code);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [chatId, messages, authToken]);

  const renderMessage = ({ item }) => {
    const isMyMessage = item.senderId === currentUser?.id;
    return (
      <View style={[
        styles.messageContainer,
        isMyMessage ? styles.myMessage : styles.otherMessage,
        isMyMessage ? { backgroundColor: '#007AFF' } : { backgroundColor: isDarkMode ? '#333' : '#e5e5e5' }
      ]}>
        <Text style={[
          styles.messageText,
          isMyMessage ? { color: '#fff' } : { color: dynamicTextColor }
        ]}>
          {item.text}
        </Text>
      </View>
    );
  };

  const renderUserItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.userItem}
      onPress={() => startChat(item)}
    >
      <View style={[
        styles.profileIconContainer,
        isDarkMode ? styles.profileIconDark : styles.profileIconLight
      ]}>
        <Icon 
          name="person" 
          size={30} 
          color={isDarkMode ? '#121212' : '#fff'} 
        />
      </View>
      <Text style={[styles.userName, { color: dynamicTextColor }]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  if (loading && users.length === 0) {
    return (
      <View style={[styles.loadingContainer, isDarkMode && { backgroundColor: '#121212' }]}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View style={[styles.container, isDarkMode ? darkStyles.container : lightStyles.container]}>
      {/* En-tête */}
      <View style={styles.headerContainer}>
        {selectedUser ? (
          <TouchableOpacity onPress={() => {
            setSelectedUser(null);
            setChatId(null);
            setMessages([]);
            setError('');
          }}>
            <Image 
              source={require('./../../../Asset/return.png')} 
              style={[styles.backIcon, { tintColor: dynamicTextColor }]} 
            />
          </TouchableOpacity>
        ) : <View style={{ width: 24 }} />}

        <Text style={[styles.headerTitle, { color: dynamicTextColor }]}>
          {selectedUser ? selectedUser.name : "Contacts"}
        </Text>

        <TouchableOpacity onPress={toggleTheme} style={styles.toggleContainer}>
          <View style={[styles.toggleSwitch, isDarkMode ? styles.toggleOn : styles.toggleOff]}>
            <Text style={[styles.toggleText, isDarkMode ? styles.toggleTextOn : styles.toggleTextOff]}>
              {isDarkMode ? 'ON' : 'OFF'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Message d'erreur */}
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}

      {/* Liste des contacts ou chat */}
      {!selectedUser ? (
        <FlatList
          data={users}
          keyExtractor={item => item.uid}
          renderItem={renderUserItem}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={{ color: dynamicTextColor }}>Aucun contact trouvé</Text>
            </View>
          }
        />
      ) : (
        <>
          <FlatList
            data={messages}
            keyExtractor={item => item.id}
            renderItem={renderMessage}
            contentContainerStyle={styles.messagesContainer}
            inverted={false}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={{ color: dynamicTextColor }}>Envoyez votre premier message</Text>
              </View>
            }
          />
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.select({ ios: 80, android: 0 })}
          >
            <View style={[styles.inputContainer, { 
              backgroundColor: isDarkMode ? '#1e1e1e' : '#fff',
              borderTopColor: isDarkMode ? '#333' : '#ccc'
            }]}>
              <TextInput
                style={[
                  styles.input,
                  { 
                    backgroundColor: isDarkMode ? '#333' : '#f9f9f9', 
                    color: dynamicTextColor,
                    borderColor: isDarkMode ? '#444' : '#ccc'
                  }
                ]}
                placeholder="Écrivez un message..."
                placeholderTextColor="#999"
                value={messageText}
                onChangeText={setMessageText}
                multiline
              />
              <TouchableOpacity 
                onPress={sendMessage} 
                style={[
                  styles.sendButton,
                  messageText.trim() === '' && styles.sendButtonDisabled
                ]}
                disabled={messageText.trim() === ''}
              >
                <Text style={styles.sendText}>Envoyer</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  backIcon: {
    width: 24,
    height: 24
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 10
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  profileIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  profileIconLight: {
    backgroundColor: '#007AFF',
  },
  profileIconDark: {
    backgroundColor: '#BB86FC',
  },
  userName: {
    fontSize: 18,
    fontWeight: '500',
  },
  messageContainer: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  myMessage: {
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  otherMessage: {
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    maxHeight: 100,
    fontSize: 16,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
  sendText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  toggleContainer: {
    padding: 5
  },
  toggleSwitch: {
    width: 50,
    height: 25,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleOn: {
    backgroundColor: '#4caf50'
  },
  toggleOff: {
    backgroundColor: '#f44336'
  },
  toggleText: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  toggleTextOn: {
    color: '#fff'
  },
  toggleTextOff: {
    color: '#fff'
  },
  messagesContainer: {
    padding: 10
  },
  errorContainer: {
    backgroundColor: '#fdecea',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  errorText: {
    color: '#e74c3c',
    fontSize: 14,
    textAlign: 'center',
  }
});

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
  }
});

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  }
});

export default Chat;