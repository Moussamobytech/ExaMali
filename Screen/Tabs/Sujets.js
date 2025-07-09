
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Modal,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Sujets = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeSubject, setActiveSubject] = useState('Mathématiques'); // Default active subject
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode state

  const images = [
    { title: 'Mathématiques', source: require('./../../Asset/MATH1.png'), route: 'Mathématique' },
    { title: 'Rédaction', source: require('./../../Asset/REDAC1.png'), route: 'Rédaction' },
    { title: 'Anglais', source: require('./../../Asset/ANGLAIS1.png'), route: 'Anglais' },
    { title: 'Physique', source: require('./../../Asset/PHY.png'), route: 'Physiquechimie' },
    { title: 'Éducation Civique et Morale', source: require('./../../Asset/ECM.png'), route: 'Ecm' },
    { title: 'Histoire', source: require('./../../Asset/HIST.png'), route: 'Histoire' },
    { title: 'Biologie', source: require('./../../Asset/BIOS.png'), route: 'Biologie' },
    { title: 'Dictée', source: require('./../../Asset/DICTE.png'), route: 'Dicte' },
  ];


  const subjectContent = {
    Mathématiques: (
    <View style={styles.imagecontainer}>
        <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Examalichoix')}
                    >
                      <Image source={require('./../../Asset/testing.png')} style={styles.iconImage} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Mathématiques</Text>
                        <Text style={styles.title}>Mathématiques du DEF 2024</Text>
                      </View>
                      <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Examalichoix')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
             <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Examalichoix')}
                    >
                      <Image source={require('./../../Asset/testing.png')} style={styles.iconImage} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Mathématiques</Text>
                        <Text style={styles.title}>Mathématiques du DEF 2023</Text>
                      </View>
                      <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Examalichoix')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
            <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Examalichoix')}
                    >
                      <Image source={require('./../../Asset/testing.png')} style={styles.iconImage} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Mathématiques</Text>
                        <Text style={styles.title}>Mathématiques du DEF 2022</Text>
                      </View>
                      <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Examalichoix')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
            <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Examalichoix')}
                    >
                      <Image source={require('./../../Asset/testing.png')} style={styles.iconImage} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Mathématiques</Text>
                        <Text style={styles.title}>Mathématiques du DEF 2021</Text>
                      </View>
                      <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Examalichoix')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
              <Image source={require('./../../Asset/mathdef5.png')} style={styles.image} />
                <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Examalichoix')}
                    >
                      <Image source={require('./../../Asset/testing.png')} style={styles.iconImage} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Mathématiques</Text>
                        <Text style={styles.title}>Mathématiques du DEF 2018</Text>
                      </View>
                      <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Examalichoix')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
              <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Examalichoix')}
                    >
                      <Image source={require('./../../Asset/testing.png')} style={styles.iconImage} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Mathématiques</Text>
                        <Text style={styles.title}>Mathématiques du DEF 2020</Text>
                      </View>
                      <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Examalichoix')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
              <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Examalichoix')}
                    >
                      <Image source={require('./../../Asset/testing.png')} style={styles.iconImage} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Mathématiques</Text>
                        <Text style={styles.title}>Mathématiques du DEF 2019</Text>
                      </View>
                      <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Examalichoix')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
            </TouchableOpacity>
                      <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Examalichoix')}
                    >
                      <Image source={require('./../../Asset/testing.png')} style={styles.iconImage} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Mathématiques</Text>
                        <Text style={styles.title}>Mathématiques du DEF 2018</Text>
                      </View>
                      <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Examalichoix')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Examalichoix')}
                    >
                      <Image source={require('./../../Asset/testing.png')} style={styles.iconImage} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Mathématiques</Text>
                        <Text style={styles.title}>Mathématiques du DEF 2017</Text>
                      </View>
                      <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Examalichoix')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Examalichoix')}
                    >
                      <Image source={require('./../../Asset/testing.png')} style={styles.iconImage} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Mathématiques</Text>
                        <Text style={styles.title}>Mathématiques du DEF 2016</Text>
                      </View>
                      <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Examalichoix')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Examalichoix')}
                    >
                      <Image source={require('./../../Asset/testing.png')} style={styles.iconImage} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Mathématiques</Text>
                        <Text style={styles.title}>Mathématiques du DEF 2015</Text>
                      </View>
                      <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Examalichoix')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Examalichoix')}
                    >
                      <Image source={require('./../../Asset/testing.png')} style={styles.iconImage} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Mathématiques</Text>
                        <Text style={styles.title}>Mathématiques du DEF 2014</Text>
                      </View>
                      <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Examalichoix')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Examalichoix')}
                    >
                      <Image source={require('./../../Asset/testing.png')} style={styles.iconImage} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Mathématiques</Text>
                        <Text style={styles.title}>Mathématiques du DEF 2013</Text>
                      </View>
                      <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Examalichoix')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Examalichoix')}
                    >
                      <Image source={require('./../../Asset/testing.png')} style={styles.iconImage} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Mathématiques</Text>
                        <Text style={styles.title}>Mathématiques du DEF 2012</Text>
                      </View>
                      <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Examalichoix')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Examalichoix')}
                    >
                      <Image source={require('./../../Asset/testing.png')} style={styles.iconImage} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Mathématiques</Text>
                        <Text style={styles.title}>Mathématiques du DEF 2011</Text>
                      </View>
                      <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Examalichoix')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Examalichoix')}
                    >
                      <Image source={require('./../../Asset/testing.png')} style={styles.iconImage} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Mathématiques</Text>
                        <Text style={styles.title}>Mathématiques du DEF 2010</Text>
                      </View>
                      <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Examalichoix')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
          </View>
    ),
    Rédaction: (
      <View style={styles.imagecontainer}>
               <TouchableOpacity onPress={() => navigation.navigate('Redaction2024')}>
                 <Image source={require('./../../Asset/reddef.png')} style={styles.image} />
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('Redaction2023')}>
                 <Image source={require('./../../Asset/reddef2.png')} style={styles.image} />
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('Redaction2022')}>
                 <Image source={require('./../../Asset/reddef3.png')} style={styles.image} />
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('Redaction2021')}>
                 <Image source={require('./../../Asset/reddef4.png')} style={styles.image} />
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('Redaction2020')}>
                 <Image source={require('./../../Asset/reddef5.png')} style={styles.image} />
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('Redaction2019')}>
                 <Image source={require('./../../Asset/reddef6.png')} style={styles.image} />
               </TouchableOpacity>

               <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Redaction2018')}
                    >
                      <Image source={require('./../../Asset/VectorR.png')} style={styles.iconImageR} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Rédaction</Text>
                        <Text style={styles.title}>Rédaction du DEF 2018</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonR}
            onPress={() => navigation.navigate('Redaction2017')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Redaction217')}
                    >
                      <Image source={require('./../../Asset/VectorR.png')} style={styles.iconImageR} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Rédaction</Text>
                        <Text style={styles.title}>Rédaction du DEF 2017</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonR}
            onPress={() => navigation.navigate('Redaction2017')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Redaction2016')}
                    >
                      <Image source={require('./../../Asset/VectorR.png')} style={styles.iconImageR} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Rédaction</Text>
                        <Text style={styles.title}>Rédaction du DEF 2016</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonR}
            onPress={() => navigation.navigate('Redaction2016')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('#')}
                    >
                      <Image source={require('./../../Asset/VectorR.png')} style={styles.iconImageR} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Rédaction</Text>
                        <Text style={styles.title}>Rédaction du DEF 2015</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonR}
            onPress={() => navigation.navigate('#')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Redaction2014')}
                    >
                      <Image source={require('./../../Asset/VectorR.png')} style={styles.iconImageR} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Rédaction</Text>
                        <Text style={styles.title}>Rédaction du DEF 2013</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonR}
            onPress={() => navigation.navigate('Redaction2014')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('#')}
                    >
                      <Image source={require('./../../Asset/VectorR.png')} style={styles.iconImageR} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Rédaction</Text>
                        <Text style={styles.title}>Rédaction du DEF 2012</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonR}
            onPress={() => navigation.navigate('#')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('#')}
                    >
                      <Image source={require('./../../Asset/VectorR.png')} style={styles.iconImageR} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Rédaction</Text>
                        <Text style={styles.title}>Rédaction du DEF 2011</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonR}
            onPress={() => navigation.navigate('#')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('#')}
                    >
                      <Image source={require('./../../Asset/VectorR.png')} style={styles.iconImageR} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Rédaction</Text>
                        <Text style={styles.title}>Rédaction du DEF 2010</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonR}
            onPress={() => navigation.navigate('#')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
             </View>
    ),
    Anglais: (
    
            <View style={styles.imagecontainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Anglais2024')}>
                <Image source={require('./../../Asset/angdef1.png')} style={styles.image} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Anglais2023')}>
                <Image source={require('./../../Asset/angdef2.png')} style={styles.image} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Anglais2022')}>
                <Image source={require('./../../Asset/angdef3.png')} style={styles.image} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Anglais2021')}>
                <Image source={require('./../../Asset/angdef4.png')} style={styles.image} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Anglais20')}>
                <Image source={require('./../../Asset/angdef5.png')} style={styles.image} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Anglais2019')}>
                <Image source={require('./../../Asset/angdef6.png')} style={styles.image} />
              </TouchableOpacity>
              <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Examalichoix')}
                    >
                      <Image source={require('./../../Asset/VectorA.png')} style={styles.iconImageA} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Anglais</Text>
                        <Text style={styles.title}>Anglais du DEF 2018</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonA}
            onPress={() => navigation.navigate('Examalichoix')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Anglais2017')}
                    >
                      <Image source={require('./../../Asset/VectorA.png')} style={styles.iconImageA} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Anglais</Text>
                        <Text style={styles.title}>Anglais du DEF 2017</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonA}
            onPress={() => navigation.navigate('Anglais2017')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Anglais2016')}
                    >
                      <Image source={require('./../../Asset/VectorA.png')} style={styles.iconImageA} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Anglais</Text>
                        <Text style={styles.title}>Anglais du DEF 2016</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonA}
            onPress={() => navigation.navigate('Anglais2016')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Anglais2015')}
                    >
                      <Image source={require('./../../Asset/VectorA.png')} style={styles.iconImageA} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Anglais</Text>
                        <Text style={styles.title}>Anglais du DEF 2015</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonA}
            onPress={() => navigation.navigate('Anglais2015')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('#')}
                    >
                      <Image source={require('./../../Asset/VectorA.png')} style={styles.iconImageA} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Anglais</Text>
                        <Text style={styles.title}>Anglais du DEF 2014</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonA}
            onPress={() => navigation.navigate('#')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('#')}
                    >
                      <Image source={require('./../../Asset/VectorA.png')} style={styles.iconImageA} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Anglais</Text>
                        <Text style={styles.title}>Anglais du DEF 2013</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonA}
            onPress={() => navigation.navigate('#')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Anglais2012')}
                    >
                      <Image source={require('./../../Asset/VectorA.png')} style={styles.iconImageA} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Anglais</Text>
                        <Text style={styles.title}>Anglais du DEF 2012</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonA}
            onPress={() => navigation.navigate('Anglais2012')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('#')}
                    >
                      <Image source={require('./../../Asset/VectorA.png')} style={styles.iconImageA} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Anglais</Text>
                        <Text style={styles.title}>Anglais du DEF 2011</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonA}
            onPress={() => navigation.navigate('#')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('#')}
                    >
                      <Image source={require('./../../Asset/VectorA.png')} style={styles.iconImageA} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Anglais</Text>
                        <Text style={styles.title}>Anglais du DEF 2010</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonA}
            onPress={() => navigation.navigate('#')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
          
            </View>
    ),
    Physique: (
        <View style={styles.imagecontainer}>
               <TouchableOpacity onPress={() => navigation.navigate('Physique2024')}>
                 <Image source={require('./../../Asset/phydef1.png')} style={styles.image} />
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('Physique2023')}>
                 <Image source={require('./../../Asset/phydef2.png')} style={styles.image} />
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('Physique22')}>
                 <Image source={require('./../../Asset/phydef3.png')} style={styles.image} />
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('Physique21')}>
                 <Image source={require('./../../Asset/phydef4.png')} style={styles.image} />
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('Physique20')}>
                 <Image source={require('./../../Asset/phydef5.png')} style={styles.image} />
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('Physique19')}>
                 <Image source={require('./../../Asset/phydef6.png')} style={styles.image} />
               </TouchableOpacity>
               <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Physique2018')}
                    >
                      <Image source={require('./../../Asset/VectorP.png')} style={styles.iconImageP} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Physique & Chimie</Text>
                        <Text style={styles.title}>Physique & Chimie du DEF 2018</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonP}
            onPress={() => navigation.navigate('Physique2018')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Physique2017')}
                    >
                      <Image source={require('./../../Asset/VectorP.png')} style={styles.iconImageP} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Physique & Chimie</Text>
                        <Text style={styles.title}>Physique & Chimie du DEF 2017</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonP}
            onPress={() => navigation.navigate('Physique2017')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Physique2016')}
                    >
                      <Image source={require('./../../Asset/VectorP.png')} style={styles.iconImageP} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Physique & Chimie</Text>
                        <Text style={styles.title}>Physique & Chimie du DEF 2016</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonP}
            onPress={() => navigation.navigate('Physique2016')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Physique2015')}
                    >
                      <Image source={require('./../../Asset/VectorP.png')} style={styles.iconImageP} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Physique & Chimie</Text>
                        <Text style={styles.title}>Physique & Chimie du DEF 2015</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonP}
            onPress={() => navigation.navigate('Physique2015')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Physique2014')}
                    >
                      <Image source={require('./../../Asset/VectorP.png')} style={styles.iconImageP} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Physique & Chimie</Text>
                        <Text style={styles.title}>Physique & Chimie du DEF 2014</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonP}
            onPress={() => navigation.navigate('Physique2014')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Physique2013')}
                    >
                      <Image source={require('./../../Asset/VectorP.png')} style={styles.iconImageP} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Physique & Chimie</Text>
                        <Text style={styles.title}>Physique & Chimie du DEF 2013</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonP}
            onPress={() => navigation.navigate('Physique2013')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Physique2012')}
                    >
                      <Image source={require('./../../Asset/VectorP.png')} style={styles.iconImageP} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Physique & Chimie</Text>
                        <Text style={styles.title}>Physique & Chimie du DEF 2012</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonP}
            onPress={() => navigation.navigate('Physique2012')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Physique2011')}
                    >
                      <Image source={require('./../../Asset/VectorP.png')} style={styles.iconImageP} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Physique & Chimie</Text>
                        <Text style={styles.title}>Physique & Chimie du DEF 2011</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonP}
            onPress={() => navigation.navigate('Physique2011')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Physique2010')}
                    >
                      <Image source={require('./../../Asset/VectorP.png')} style={styles.iconImageP} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Physique & Chimie</Text>
                        <Text style={styles.title}>Physique & Chimie du DEF 2010</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonP}
            onPress={() => navigation.navigate('Physique2010')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
             </View>
    ),
    'Éducation Civique et Morale': (
      <View style={styles.imagecontainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Ecm2024')}>
                  <Image source={require('./../../Asset/ecm11.png')} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Ecm2023')}>
                  <Image source={require('./../../Asset/ecm2.png')} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Ecm2022')}>
                  <Image source={require('./../../Asset/ecm3.png')} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Ecm2021')}>
                  <Image source={require('./../../Asset/ecm4.png')} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Ecm2020')}>
                  <Image source={require('./../../Asset/ecm5.png')} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Ecm2019')}>
                  <Image source={require('./../../Asset/ecm6.png')} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Ecm2018')}
                    >
                      <Image source={require('./../../Asset/VectorE.png')} style={styles.iconImageE} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>ECM</Text>
                        <Text style={styles.title}>ECM du DEF 2018</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonE}
            onPress={() => navigation.navigate('Ecm2018')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Ecm2017')}
                    >
                      <Image source={require('./../../Asset/VectorE.png')} style={styles.iconImageE} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>ECM</Text>
                        <Text style={styles.title}>ECM du DEF 2017</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonE}
            onPress={() => navigation.navigate('Ecm2017')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
          </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Ecm2016')}
                    >
                      <Image source={require('./../../Asset/VectorE.png')} style={styles.iconImageE} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>ECM</Text>
                        <Text style={styles.title}>ECM du DEF 2016</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonE}
            onPress={() => navigation.navigate('Ecm2016')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Ecm2015')}
                    >
                      <Image source={require('./../../Asset/VectorE.png')} style={styles.iconImageE} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>ECM</Text>
                        <Text style={styles.title}>ECM du DEF 2015</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonE}
            onPress={() => navigation.navigate('Ecm2015')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Ecm2014')}
                    >
                      <Image source={require('./../../Asset/VectorE.png')} style={styles.iconImageE} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>ECM</Text>
                        <Text style={styles.title}>ECM du DEF 2014</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonE}
            onPress={() => navigation.navigate('Ecm2014')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Ecm2013')}
                    >
                      <Image source={require('./../../Asset/VectorE.png')} style={styles.iconImageE} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>ECM</Text>
                        <Text style={styles.title}>ECM du DEF 2013</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonE}
            onPress={() => navigation.navigate('Ecm2013')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Ecm2012')}
                    >
                      <Image source={require('./../../Asset/VectorE.png')} style={styles.iconImageE} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>ECM</Text>
                        <Text style={styles.title}>ECM du DEF 2012</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonE}
            onPress={() => navigation.navigate('Ecm2012')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('#')}
                    >
                      <Image source={require('./../../Asset/VectorE.png')} style={styles.iconImageE} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>ECM</Text>
                        <Text style={styles.title}>ECM du DEF 2011</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonE}
            onPress={() => navigation.navigate('#')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('#')}
                    >
                      <Image source={require('./../../Asset/VectorE.png')} style={styles.iconImageE} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>ECM</Text>
                        <Text style={styles.title}>ECM du DEF 2010</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonE}
            onPress={() => navigation.navigate('#')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>

              </View>
    ),
    Histoire: (
      
              <View style={styles.imagecontainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Histoire2024')}>
                  <Image source={require('./../../Asset/hist1.png')} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Histoire2023')}>
                  <Image source={require('./../../Asset/hist2.png')} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('HistoireGeo2022')}>
                  <Image source={require('./../../Asset/hist3.png')} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('HistoireGeo2021')}>
                  <Image source={require('./../../Asset/hist4.png')} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('HistoireGeo2020')}>
                  <Image source={require('./../../Asset/hist5.png')} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('HistoireGeo2019')}>
                  <Image source={require('./../../Asset/hist6.png')} style={styles.image} />
                </TouchableOpacity>

                <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Histoire2018')}
                    >
                      <Image source={require('./../../Asset/VectorH.png')} style={styles.iconImageH} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Histoire & Géographie</Text>
                        <Text style={styles.title}>Histoire du DEF 2018</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonH}
            onPress={() => navigation.navigate('Histoire2018')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Histoire2017')}
                    >
                      <Image source={require('./../../Asset/VectorH.png')} style={styles.iconImageH} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Histoire & Géographie</Text>
                        <Text style={styles.title}>Histoire du DEF 2017</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonH}
            onPress={() => navigation.navigate('Histoire2017')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Histoire2016')}
                    >
                      <Image source={require('./../../Asset/VectorH.png')} style={styles.iconImageH} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Histoire & Géographie</Text>
                        <Text style={styles.title}>Histoire du DEF 2016</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonH}
            onPress={() => navigation.navigate('Histoire2016')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Histoire2015')}
                    >
                      <Image source={require('./../../Asset/VectorH.png')} style={styles.iconImageH} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Histoire & Géographie</Text>
                        <Text style={styles.title}>Histoire du DEF 2015</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonH}
            onPress={() => navigation.navigate('Histoire2015')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Histoire2014')}
                    >
                      <Image source={require('./../../Asset/VectorH.png')} style={styles.iconImageH} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Histoire & Géographie</Text>
                        <Text style={styles.title}>Histoire du DEF 2014</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonH}
            onPress={() => navigation.navigate('Histoire2014')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('#')}
                    >
                      <Image source={require('./../../Asset/VectorH.png')} style={styles.iconImageH} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Histoire & Géographie</Text>
                        <Text style={styles.title}>Histoire du DEF 2013</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonH}
            onPress={() => navigation.navigate('#')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Histoire2012')}
                    >
                      <Image source={require('./../../Asset/VectorH.png')} style={styles.iconImageH} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Histoire & Géographie</Text>
                        <Text style={styles.title}>Histoire du DEF 2012</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonH}
            onPress={() => navigation.navigate('Histoire2012')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('#')}
                    >
                      <Image source={require('./../../Asset/VectorH.png')} style={styles.iconImageH} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Histoire & Géographie</Text>
                        <Text style={styles.title}>Histoire du DEF 2011</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonH}
            onPress={() => navigation.navigate('#')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('#')}
                    >
                      <Image source={require('./../../Asset/VectorH.png')} style={styles.iconImageH} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Histoire & Géographie</Text>
                        <Text style={styles.title}>Histoire du DEF 2010</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonH}
            onPress={() => navigation.navigate('#')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
              </View>
    ),
    Biologie: (
     
             <View style={styles.imagecontainer}>
               <TouchableOpacity onPress={() => navigation.navigate('Biologie2024')}>
                 <Image source={require('./../../Asset/bio1.png')} style={styles.image} />
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('Biologie2023')}>
                 <Image source={require('./../../Asset/bio2.png')} style={styles.image} />
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('Biologie2022')}>
                 <Image source={require('./../../Asset/Biologie1.png')} style={styles.image} />
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('Biologie2021')}>
                 <Image source={require('./../../Asset/bio4.png')} style={styles.image} />
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('Biologie2020')}>
                 <Image source={require('./../../Asset/bio5.png')} style={styles.image} />
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('Biologie2019')}>
                 <Image source={require('./../../Asset/bio6.png')} style={styles.image} />
               </TouchableOpacity>

               
               <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Biologie2018')}
                    >
                      <Image source={require('./../../Asset/VectorB.png')} style={styles.iconImageB} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Biologie</Text>
                        <Text style={styles.title}>Biologie du DEF 2018</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonB}
            onPress={() => navigation.navigate('Biologie2018')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Examalichoix')}
                    >
                      <Image source={require('./../../Asset/VectorB.png')} style={styles.iconImageB} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Biologie</Text>
                        <Text style={styles.title}>Biologie du DEF 2017</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonB}
            onPress={() => navigation.navigate('Biologie2017')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Biologie2016')}
                    >
                      <Image source={require('./../../Asset/VectorB.png')} style={styles.iconImageB} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Biologie</Text>
                        <Text style={styles.title}>Biologie du DEF 2016</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonB}
            onPress={() => navigation.navigate('Biologie2016')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Biologie2015')}
                    >
                      <Image source={require('./../../Asset/VectorB.png')} style={styles.iconImageB} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Biologie</Text>
                        <Text style={styles.title}>Biologie du DEF 2015</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonB}
            onPress={() => navigation.navigate('Biologie2015')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Biologie2014')}
                    >
                      <Image source={require('./../../Asset/VectorB.png')} style={styles.iconImageB} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Biologie</Text>
                        <Text style={styles.title}>Biologie du DEF 2014</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonB}
            onPress={() => navigation.navigate('Biologie2014')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Biologie2012')}
                    >
                      <Image source={require('./../../Asset/VectorB.png')} style={styles.iconImageB} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Biologie</Text>
                        <Text style={styles.title}>Biologie du DEF 2012</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonB}
            onPress={() => navigation.navigate('Biologie2012')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
             </View>
    ),
    Dictée: (
        <View style={styles.imagecontainer}>

<TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Dicte2024')}
                    >
                      <Image source={require('./../../Asset/VectorD.png')} style={styles.iconImageD} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Ditée & question</Text>
                        <Text style={styles.title}>Dictée & question du DEF 2024</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonD}
            onPress={() => navigation.navigate('Dicte2024')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
<TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Dicte2023')}
                    >
                      <Image source={require('./../../Asset/VectorD.png')} style={styles.iconImageD} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Ditée & question</Text>
                        <Text style={styles.title}>Dictée & question du DEF 2023</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonD}
            onPress={() => navigation.navigate('Dicte2023')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
<TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Dicte2022')}
                    >
                      <Image source={require('./../../Asset/VectorD.png')} style={styles.iconImageD} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Ditée & question</Text>
                        <Text style={styles.title}>Dictée & question du DEF 2022</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonD}
            onPress={() => navigation.navigate('Dicte2022')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
            <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Dicte2021')}
                    >
                      <Image source={require('./../../Asset/VectorD.png')} style={styles.iconImageD} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Ditée & question</Text>
                        <Text style={styles.title}>Dictée & question du DEF 2021</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonD}
            onPress={() => navigation.navigate('Dicte2021')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
            <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Dicte2020')}
                    >
                      <Image source={require('./../../Asset/VectorD.png')} style={styles.iconImageD} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Ditée & question</Text>
                        <Text style={styles.title}>Dictée & question du DEF 2020</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonD}
            onPress={() => navigation.navigate('Dicte2020')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
            <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Dicte2019')}
                    >
                      <Image source={require('./../../Asset/VectorD.png')} style={styles.iconImageD} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Ditée & question</Text>
                        <Text style={styles.title}>Dictée & question du DEF 2019</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonD}
            onPress={() => navigation.navigate('Dicte2019')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
            <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Dicte2018')}
                    >
                      <Image source={require('./../../Asset/VectorD.png')} style={styles.iconImageD} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Ditée & question</Text>
                        <Text style={styles.title}>Dictée & question du DEF 2018</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonD}
            onPress={() => navigation.navigate('Dicte2018')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
         <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('#')}
                    >
                      <Image source={require('./../../Asset/VectorD.png')} style={styles.iconImageD} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Ditée & question</Text>
                        <Text style={styles.title}>Dictée & question du DEF 2017</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonD}
            onPress={() => navigation.navigate('#')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('#')}
                    >
                      <Image source={require('./../../Asset/VectorD.png')} style={styles.iconImageD} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Ditée & question</Text>
                        <Text style={styles.title}>Dictée & question du DEF 2016</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonD}
            onPress={() => navigation.navigate('#')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
        
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('#')}
                    >
                      <Image source={require('./../../Asset/VectorD.png')} style={styles.iconImageD} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Ditée & question</Text>
                        <Text style={styles.title}>Dictée & question du DEF 2015</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonD}
            onPress={() => navigation.navigate('#')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
          
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Dicte2014')}
                    >
                      <Image source={require('./../../Asset/VectorD.png')} style={styles.iconImageD} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Ditée & question</Text>
                        <Text style={styles.title}>Dictée & question du DEF 2014</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonD}
            onPress={() => navigation.navigate('Dicte2014')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('#')}
                    >
                      <Image source={require('./../../Asset/VectorD.png')} style={styles.iconImageD} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Ditée & question</Text>
                        <Text style={styles.title}>Dictée & question du DEF 2013</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonD}
            onPress={() => navigation.navigate('#')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Dicte2012')}
                    >
                      <Image source={require('./../../Asset/VectorD.png')} style={styles.iconImageD} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Ditée & question</Text>
                        <Text style={styles.title}>Dictée & question du DEF 2012</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonD}
            onPress={() => navigation.navigate('Dicte2012')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('#')}
                    >
                      <Image source={require('./../../Asset/VectorD.png')} style={styles.iconImageD} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Ditée & question</Text>
                        <Text style={styles.title}>Dictée & question du DEF 2011</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonD}
            onPress={() => navigation.navigate('#')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('#')}
                    >
                      <Image source={require('./../../Asset/VectorD.png')} style={styles.iconImageD} />
                      <View style={styles.textContainer}>
                        <Text style={styles.subject}>Ditée & question</Text>
                        <Text style={styles.title}>Dictée & question du DEF 2010</Text>
                      </View>
                      <TouchableOpacity
            style={styles.buttonD}
            onPress={() => navigation.navigate('#')}
          >
            <Text style={styles.buttonText}>Voir le sujet</Text>
          </TouchableOpacity>
                    </TouchableOpacity>
             </View>
    ),
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text) {
      const results = images.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setSearchResults(results);
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  };

  // Modified handleNavigate to update activeSubject without navigation
  const handleNavigate = (title) => {
    setActiveSubject(title); // Update the active subject
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const dynamicTextColor = isDarkMode ? '#fff' : '#000';
  const dynamicBackgroundColor = isDarkMode ? '#000' : '#fff';
  const dynamicInputBackground = isDarkMode ? '#333' : '#ddd';
  const dynamicInputTextColor = isDarkMode ? '#fff' : '#000';

  return (
    <View style={[styles.container, isDarkMode ? darkStyles.container : lightStyles.container]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
          <Image source={require('./../../Asset/return.png')} style={styles.returnImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleTheme} style={styles.toggleContainer}>
          <View style={[styles.toggleSwitch, isDarkMode ? styles.toggleSwitchOn : styles.toggleSwitchOff]}>
            <Text style={[styles.toggleText, isDarkMode ? styles.textOn : styles.textOff]}>
              {isDarkMode ? 'ON' : 'OFF'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView vertical showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.subtitle, { color: dynamicTextColor }]}>Sujets pages</Text>
        <Text style={[styles.subtitle, { color: dynamicTextColor }]}>
          Découvrez les anciens sujets des années précédents
        </Text>

        <View style={styles.searchContainer}>
          <TextInput
            style={[
              styles.searchBar,
              {
                backgroundColor: dynamicInputBackground,
                color: dynamicInputTextColor,
              },
            ]}
            placeholder="Rechercher..."
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
          {images.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleNavigate(item.title)} // Use title instead of route
              style={[styles.horizontalItem, activeSubject === item.title && styles.activeHorizontalItem]}
            >
              <Text
                style={[
                  styles.horizontalText,
                  activeSubject === item.title && styles.activeHorizontalText,
                  { color: dynamicTextColor },
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.imagecontainer}>
          {subjectContent[activeSubject] || (
            <Text style={[styles.emptyText, { color: dynamicTextColor }]}>
              Aucun contenu disponible pour {activeSubject}.
            </Text>
          )}
        </View>
      </ScrollView>

      <Modal visible={isModalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={[styles.modalTitle, { color: dynamicTextColor }]}>Résultats de la recherche</Text>
            <FlatList
              data={searchResults}
              keyExtractor={(item) => item.title}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleNavigate(item.title)} style={styles.modalItem}>
                  <Image source={item.source} style={styles.modalImage} />
                  <Text style={[styles.modalText, { color: dynamicTextColor }]}>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  returnImage: {
    width: 30,
    height: 30,
  },
  scrollContainer: {
    paddingBottom: -10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  searchContainer: {
    marginBottom: 20,
  },
  imagecontainer: {
    flexDirection: 'column',
    marginBottom: 20,
    paddingBottom: 20,
  },
  subjectContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contentImage: {
    marginBottom: 10,
    height: 84,
    width: 366,
  },
  placeholderText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  searchBar: {
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  horizontalScrollView: {
    marginBottom: 20,
  },
  horizontalItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  horizontalText: {
    fontSize: 16,
  },
  activeHorizontalItem: {
    // Optional: Add background or border for active item
  },
  activeHorizontalText: {
    borderBottomWidth: 2,
    borderBottomColor: '#00C4B4',
  },
  toggleContainer: {
    padding: 10,
  },
  toggleSwitch: {
    width: 60,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleSwitchOn: {
    backgroundColor: '#4CAF50',
  },
  toggleSwitchOff: {
    backgroundColor: '#f44336',
  },
  toggleText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  textOn: {
    color: '#fff',
  },
  textOff: {
    color: '#000',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  modalImage: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#f44336',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },

card: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#fff',
  padding: 10,
  marginVertical: 5,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 5,
  elevation: 3,
  width: 366, 
  height: 87, 
  minHeight: 80,
  justifyContent: "center"
},
iconImage: {
  width: 21,
  height: 28,
  marginRight: 50,
  right: -20
},
iconImageR: {
  width: 25,
  height: 16,
  marginRight: 50,
  right: -20
},
iconImageA: {
  width: 24.22,
  height:24.22,
  marginRight: 50,
  right: -20
},
iconImageP: {
  width: 24.22,
  height:24.22,
  marginRight: 50,
  right: -20
},
iconImageE: {
  width: 24.22,
  height:24.22,
  marginRight: 50,
  right: -20
},
iconImageH: {
  width: 18.75,
  height:23.22,
  marginRight: 50,
  right: -20
},
iconImageB: {
  width: 25,
  height:25,
  marginRight: 50,
  right: -20
},
iconImageD: {
  width: 25,
  height:19.44,
  marginRight: 50,
  right: -20
},

textContainer: {
  flex: 1,
  justifyContent: 'center',
  marginRight: 39,
},
subject: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#000',
},
title: {
  fontSize: 12,
  color: '#666',
},
button: {
  backgroundColor: '#4CAF50', 
  borderRadius: 20, 
  paddingVertical: 4,
  paddingHorizontal: 10,
  justifyContent: 'center',
  alignItems: 'center',
},
buttonR: {
  backgroundColor: '#FF0004', 
  borderRadius: 20, 
  paddingVertical: 4,
  paddingHorizontal: 10,
  justifyContent: 'center',
  alignItems: 'center',
},
buttonA: {
  backgroundColor: '#9E9E99', 
  borderRadius: 20, 
  paddingVertical: 4,
  paddingHorizontal: 10,
  justifyContent: 'center',
  alignItems: 'center',
},
buttonP: {
  backgroundColor: '#1F10EF', 
  borderRadius: 20, 
  paddingVertical: 4,
  paddingHorizontal: 10,
  justifyContent: 'center',
  alignItems: 'center',
},
buttonE: {
  backgroundColor: '#302511', 
  borderRadius: 20, 
  paddingVertical: 4,
  paddingHorizontal: 10,
  justifyContent: 'center',
  alignItems: 'center',
},
buttonH: {
  backgroundColor: '#0095F1', 
  borderRadius: 20, 
  paddingVertical: 4,
  paddingHorizontal: 10,
  justifyContent: 'center',
  alignItems: 'center',
},
buttonB: {
  backgroundColor: '#FFA600', 
  borderRadius: 20, 
  paddingVertical: 4,
  paddingHorizontal: 10,
  justifyContent: 'center',
  alignItems: 'center',
},
buttonD: {
  backgroundColor: '#097E67', 
  borderRadius: 20, 
  paddingVertical: 4,
  paddingHorizontal: 10,
  justifyContent: 'center',
  alignItems: 'center',
},
buttonText: {
  color: '#fff', // Texte blanc
  fontSize: 14,
  fontWeight: 'bold', // Texte en gras comme dans l'image
},
  
});

export default Sujets;