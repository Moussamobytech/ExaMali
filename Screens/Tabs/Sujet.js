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
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Sujets = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeSerie, setActiveSerie] = useState('Terminal science exact'); // Default active serie
  const [activeMatiere, setActiveMatiere] = useState('Mathématiques'); // Default active matiere
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode state

  // Structure des données : séries avec leurs matières
  const series = [
    {
      title: 'Terminal science exact',
      matieres: [
        {
          name: 'Mathématiques',
          searchImage: require('./../../Asset/MATH1.png'),
          content: (
            <View style={styles.subjectContent}>
               <TouchableOpacity
                                   style={styles.card}
                                   onPress={() => navigation.navigate('Mathematique2024')}
                                 >
                                   <Image source={require('./../../Asset/testing.png')} style={styles.iconImage} />
                                   <View style={styles.textContainer}>
                                     <Text style={styles.subject}>Mathématiques</Text>
                                     <Text style={styles.title}>Mathématiques du DEF 2024</Text>
                                   </View>
                                   <TouchableOpacity
                         style={styles.button}
                         onPress={() => navigation.navigate('Mathematique2024')}
                       >
                         <Text style={styles.buttonText}>Voir le sujet</Text>
                       </TouchableOpacity>
                                 </TouchableOpacity>
               <TouchableOpacity
                                   style={styles.card}
                                   onPress={() => navigation.navigate('Mathematique2023')}
                                 >
                                   <Image source={require('./../../Asset/testing.png')} style={styles.iconImage} />
                                   <View style={styles.textContainer}>
                                     <Text style={styles.subject}>Mathématiques</Text>
                                     <Text style={styles.title}>Mathématiques du DEF 2023</Text>
                                   </View>
                                   <TouchableOpacity
                         style={styles.button}
                         onPress={() => navigation.navigate('Mathematique2023')}
                       >
                         <Text style={styles.buttonText}>Voir le sujet</Text>
                       </TouchableOpacity>
                                 </TouchableOpacity>
               <TouchableOpacity
                                   style={styles.card}
                                   onPress={() => navigation.navigate('Mathematique2022')}
                                 >
                                   <Image source={require('./../../Asset/testing.png')} style={styles.iconImage} />
                                   <View style={styles.textContainer}>
                                     <Text style={styles.subject}>Mathématiques</Text>
                                     <Text style={styles.title}>Mathématiques du DEF 2022</Text>
                                   </View>
                                   <TouchableOpacity
                         style={styles.button}
                         onPress={() => navigation.navigate('Mathematique2022')}
                       >
                         <Text style={styles.buttonText}>Voir le sujet</Text>
                       </TouchableOpacity>
                                 </TouchableOpacity>
               <TouchableOpacity
                                   style={styles.card}
                                   onPress={() => navigation.navigate('Mathematique2021')}
                                 >
                                   <Image source={require('./../../Asset/testing.png')} style={styles.iconImage} />
                                   <View style={styles.textContainer}>
                                     <Text style={styles.subject}>Mathématiques</Text>
                                     <Text style={styles.title}>Mathématiques du DEF 2021</Text>
                                   </View>
                                   <TouchableOpacity
                         style={styles.button}
                         onPress={() => navigation.navigate('Mathematique2021')}
                       >
                         <Text style={styles.buttonText}>Voir le sujet</Text>
                       </TouchableOpacity>
                                 </TouchableOpacity>
          <TouchableOpacity
                                   style={styles.card}
                                   onPress={() => navigation.navigate('Mathematique2020')}
                                 >
                                   <Image source={require('./../../Asset/testing.png')} style={styles.iconImage} />
                                   <View style={styles.textContainer}>
                                     <Text style={styles.subject}>Mathématiques</Text>
                                     <Text style={styles.title}>Mathématiques du DEF 2020</Text>
                                   </View>
                                   <TouchableOpacity
                         style={styles.button}
                         onPress={() => navigation.navigate('Mathematique2020')}
                       >
                         <Text style={styles.buttonText}>Voir le sujet</Text>
                       </TouchableOpacity>
                                 </TouchableOpacity>
          <TouchableOpacity
                                   style={styles.card}
                                   onPress={() => navigation.navigate('Mathematique2019')}
                                 >
                                   <Image source={require('./../../Asset/testing.png')} style={styles.iconImage} />
                                   <View style={styles.textContainer}>
                                     <Text style={styles.subject}>Mathématiques</Text>
                                     <Text style={styles.title}>Mathématiques du DEF 2019</Text>
                                   </View>
                                   <TouchableOpacity
                         style={styles.button}
                         onPress={() => navigation.navigate('Mathematique2019')}
                       >
                         <Text style={styles.buttonText}>Voir le sujet</Text>
                       </TouchableOpacity>
                                 </TouchableOpacity>
            </View>
          ),
        },
        {
          name: 'Physique',
          searchImage: require('./../../Asset/PHY.png'),
          content: (
            <View style={styles.subjectContent}>
              <TouchableOpacity onPress={() => navigation.navigate('Physique24')}>
                <Image source={require('./../../Asset/TSEPhysique.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique23')}>
                <Image source={require('./../../Asset/TSEPhysique.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique22')}>
                <Image source={require('./../../Asset/TSEPhysique.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique21')}>
                <Image source={require('./../../Asset/TSEPhysique.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique20')}>
                <Image source={require('./../../Asset/TSEPhysique.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique19')}>
                <Image source={require('./../../Asset/TSEPhysique.png')} style={styles.contentImage} />
              </TouchableOpacity>
<TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Examalichoix')}
        >
          <Image source={require('./../../Asset/def1.png')} style={styles.iconImage} />
          <View style={styles.textContainer}>
            <Text style={styles.subject}>Mathématiques</Text>
            <Text style={styles.title}>Mathématiques du DEF 2023</Text>
          </View>
          <Text style={styles.buttonText}>Voir le sujet</Text>
        </TouchableOpacity>
          </View>
          ),
        },
        {
          name: 'Chimie',
          searchImage: require('./../../Asset/PHY.png'),
          content: (
            <View style={styles.subjectContent}>
              <TouchableOpacity onPress={() => navigation.navigate('Physique24')}>
                <Image source={require('./../../Asset/TSECH24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique23')}>
                <Image source={require('./../../Asset/TSECH24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique22')}>
                <Image source={require('./../../Asset/TSECH24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique21')}>
                <Image source={require('./../../Asset/TSECH24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique20')}>
                <Image source={require('./../../Asset/TSECH24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique19')}>
                <Image source={require('./../../Asset/TSECH24.png')} style={styles.contentImage} />
              </TouchableOpacity>
            </View>
          ),
        },
        {
          name: 'Biologie',
          searchImage: require('./../../Asset/PHY.png'),
          content: (
            <View style={styles.subjectContent}>
              <TouchableOpacity onPress={() => navigation.navigate('Physique24')}>
                <Image source={require('./../../Asset/TSEBI24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique23')}>
                <Image source={require('./../../Asset/TSEBI24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique22')}>
                <Image source={require('./../../Asset/TSEBI24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique21')}>
                <Image source={require('./../../Asset/TSEBI24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique20')}>
                <Image source={require('./../../Asset/TSEBI24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique19')}>
                <Image source={require('./../../Asset/TSEBI24.png')} style={styles.contentImage} />
              </TouchableOpacity>
            </View>
          ),
        },
        {
          name: 'Philosophie',
          searchImage: require('./../../Asset/PHY.png'),
          content: (
            <View style={styles.subjectContent}>
              <TouchableOpacity onPress={() => navigation.navigate('Physique24')}>
                <Image source={require('./../../Asset/TSEPHI24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique23')}>
                <Image source={require('./../../Asset/TSEPHI24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique22')}>
                <Image source={require('./../../Asset/TSEPHI24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique21')}>
                <Image source={require('./../../Asset/TSEPHI24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique20')}>
                <Image source={require('./../../Asset/TSEPHI24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique19')}>
                <Image source={require('./../../Asset/TSEPHI24.png')} style={styles.contentImage} />
              </TouchableOpacity>
            </View>
          ),
        },
        {
          name: 'Anglais',
          searchImage: require('./../../Asset/PHY.png'),
          content: (
            <View style={styles.subjectContent}>
              <TouchableOpacity onPress={() => navigation.navigate('AnglaisTse2024')}>
                <Image source={require('./../../Asset/TSEAN24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('AnglaisTsee2023')}>
                <Image source={require('./../../Asset/TSEAN24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Anglais2022')}>
                <Image source={require('./../../Asset/TSEAN24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('AnglaisTse2021')}>
                <Image source={require('./../../Asset/TSEAN24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('AnglaisTse2020')}>
                <Image source={require('./../../Asset/TSEAN24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('AnglaisTse2019')}>
                <Image source={require('./../../Asset/TSEAN24.png')} style={styles.contentImage} />
              </TouchableOpacity>
            </View>
          ),
        },
      ],
    },
    {
      title: 'Terminal science expérimentale',
      matieres: [
        {
          name: 'Mathématique',
          searchImage: require('./../../Asset/REDAC1.png'),
          content: (
            <View style={styles.subjectContent}>
              <TouchableOpacity onPress={() => navigation.navigate('MathematiqueTexp2024')}>
                <Image source={require('./../../Asset/tsexpma.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('MathematiqueTexp2023')}>
                <Image source={require('./../../Asset/tsexpma1.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('MathematiqueTexp2022')}>
                <Image source={require('./../../Asset/tsexpma2.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('MathematiqueTexp2021')}>
                <Image source={require('./../../Asset/tsexpma3.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('MathematiqueTexp2020')}>
                <Image source={require('./../../Asset/tsexpma4.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('MathematiqueTexp2019')}>
                <Image source={require('./../../Asset/tsexpma5.png')} style={styles.contentImage} />
              </TouchableOpacity>
            </View>
          ),
        },
        {
          name: 'Biologie',
          searchImage: require('./../../Asset/ECM.png'),
          content: (
            <View style={styles.subjectContent}>
          <TouchableOpacity onPress={() => navigation.navigate('Mathpdf')}>
            <Image source={require('./../../Asset/TSEXPBI24.png')} style={styles.contentImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
            <Image source={require('./../../Asset/TSEXPBI23.png')} style={styles.contentImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
            <Image source={require('./../../Asset/TSEXPBI22.png')} style={styles.contentImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
            <Image source={require('./../../Asset/TSEXPBI21.png')} style={styles.contentImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
            <Image source={require('./../../Asset/TSEXPBI20.png')} style={styles.contentImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
            <Image source={require('./../../Asset/TSEXPBI19.png')} style={styles.contentImage} />
          </TouchableOpacity>
            </View>
          ),
        },
        {
          name: 'Physique',
          searchImage: require('./../../Asset/ECM.png'),
          content: (
            <View style={styles.subjectContent}>
           <TouchableOpacity onPress={() => navigation.navigate('Mathpdf')}>
                       <Image source={require('./../../Asset/TSEXPPH24.png')} style={styles.image} />
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
                       <Image source={require('./../../Asset/TSEXPPH23.png')} style={styles.image} />
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
                       <Image source={require('./../../Asset/TSEXPPH21.png')} style={styles.image} />
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
                       <Image source={require('./../../Asset/TSEXPPH22.png')} style={styles.image} />
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
                       <Image source={require('./../../Asset/TSEXPPH20.png')} style={styles.image} />
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
                       <Image source={require('./../../Asset/TSEXPPH19.png')} style={styles.image} />
                     </TouchableOpacity>
            </View>
          ),
        },
        {
          name: 'Anglais',
          searchImage: require('./../../Asset/ECM.png'),
          content: (
            <View style={styles.subjectContent}>
           <TouchableOpacity onPress={() => navigation.navigate('Mathpdf')}>
                      <Image source={require('./../../Asset/TSEXPAN24.png')} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
                      <Image source={require('./../../Asset/TSEXPAN23.png')} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
                      <Image source={require('./../../Asset/TSEXPAN22.png')} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
                      <Image source={require('./../../Asset/TSEXPAN21.png')} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('AnglaisTexp2020')}>
                      <Image source={require('./../../Asset/TSEXPAN20.png')} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('AnglaisTexp2019')}>
                      <Image source={require('./../../Asset/TSEXPAN19.png')} style={styles.image} />
                    </TouchableOpacity>
            </View>
          ),
        },
        {
          name: 'Philosophie',
          searchImage: require('./../../Asset/ECM.png'),
          content: (
            <View style={styles.subjectContent}>
          <TouchableOpacity onPress={() => navigation.navigate('Mathpdf')}>
                     <Image source={require('./../../Asset/TSEXPPHI24.png')} style={styles.image} />
                   </TouchableOpacity>
                   <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
                     <Image source={require('./../../Asset/TSEXPPHI23.png')} style={styles.image} />
                   </TouchableOpacity>
                   <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
                     <Image source={require('./../../Asset/TSEXPPHI22.png')} style={styles.image} />
                   </TouchableOpacity>
                   <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
                     <Image source={require('./../../Asset/TSEXPPHI21.png')} style={styles.image} />
                   </TouchableOpacity>
                   <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
                     <Image source={require('./../../Asset/TSEXPPHI20.png')} style={styles.image} />
                   </TouchableOpacity>
                   <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
                     <Image source={require('./../../Asset/TSEXPPHI19.png')} style={styles.image} />
                   </TouchableOpacity>
            </View>
          ),
        },
      ],
    },
    {
      title: 'Terminal science économique',
      matieres: [
        {
          name: 'Anglais',
          searchImage: require('./../../Asset/ANGLAIS1.png'),
          content: (
            <View style={styles.subjectContent}>
              <TouchableOpacity onPress={() => navigation.navigate('AnglaisTseco2024')}>
                <Image source={require('./../../Asset/angdef1.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('AnglaisTseco2023')}>
                <Image source={require('./../../Asset/angdef2.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('AnglaisTseco2022')}>
                <Image source={require('./../../Asset/angdef3.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('AnglaisTseco2021')}>
                <Image source={require('./../../Asset/angdef4.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('AnglaisTseco2020')}>
                <Image source={require('./../../Asset/angdef5.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('AnglaisTseco2019')}>
                <Image source={require('./../../Asset/angdef6.png')} style={styles.contentImage} />
              </TouchableOpacity>
            </View>
          ),
        },
        {
          name: 'Comptabilité',
          searchImage: require('./../../Asset/ANGLAIS1.png'),
          content: (
            <View style={styles.subjectContent}>
              <TouchableOpacity onPress={() => navigation.navigate('#')}>
                          <Image source={require('./../../Asset/TSECOCOM24.png')} style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('#')}>
                          <Image source={require('./../../Asset/TSECOCOM23.png')} style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('#')}>
                          <Image source={require('./../../Asset/TSECOCOM22.png')} style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('#')}>
                          <Image source={require('./../../Asset/TSECOCOM21.png')} style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('#')}>
                          <Image source={require('./../../Asset/TSECOCOM20.png')} style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('#')}>
                          <Image source={require('./../../Asset/TSECOCOM19.png')} style={styles.image} />
                        </TouchableOpacity>
            </View>
          ),
        },
        {
          name: 'Economie',
          searchImage: require('./../../Asset/ANGLAIS1.png'),
          content: (
            <View style={styles.subjectContent}>
                <TouchableOpacity onPress={() => navigation.navigate('#')}>
                          <Image source={require('./../../Asset/TSECOE24.png')} style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('#')}>
                          <Image source={require('./../../Asset/TSECOE23.png')} style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('#')}>
                          <Image source={require('./../../Asset/TSECOE22.png')} style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('#')}>
                          <Image source={require('./../../Asset/TSECOE21.png')} style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('#')}>
                          <Image source={require('./../../Asset/TSECOE20.png')} style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('#')}>
                          <Image source={require('./../../Asset/TSECOE19.png')} style={styles.image} />
                        </TouchableOpacity>
            </View>
          ),
        },
        {
          name: 'Philosophie',
          searchImage: require('./../../Asset/ANGLAIS1.png'),
          content: (
            <View style={styles.subjectContent}>
                <TouchableOpacity onPress={() => navigation.navigate('#')}>
                            <Image source={require('./../../Asset/TSECOP24.png')} style={styles.image} />
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => navigation.navigate('#')}>
                            <Image source={require('./../../Asset/TSECOP23.png')} style={styles.image} />
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => navigation.navigate('#')}>
                            <Image source={require('./../../Asset/TSECOP22.png')} style={styles.image} />
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => navigation.navigate('#')}>
                            <Image source={require('./../../Asset/TSECOP21.png')} style={styles.image} />
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => navigation.navigate('#')}>
                            <Image source={require('./../../Asset/TSECOP20.png')} style={styles.image} />
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => navigation.navigate('#')}>
                            <Image source={require('./../../Asset/TSECOP19.png')} style={styles.image} />
                          </TouchableOpacity>
            </View>
          ),
        },
         {
          name: 'Géographie',
          searchImage: require('./../../Asset/ANGLAIS1.png'),
          content: (
            <View style={styles.subjectContent}>
                  <TouchableOpacity onPress={() => navigation.navigate('#')}>
                            <Image source={require('./../../Asset/TSECOG24.png')} style={styles.image} />
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => navigation.navigate('#')}>
                            <Image source={require('./../../Asset/TSECOG23.png')} style={styles.image} />
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => navigation.navigate('#')}>
                            <Image source={require('./../../Asset/TSECOG22.png')} style={styles.image} />
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => navigation.navigate('#')}>
                            <Image source={require('./../../Asset/TSECOG21.png')} style={styles.image} />
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => navigation.navigate('#')}>
                            <Image source={require('./../../Asset/TSECOG19.png')} style={styles.image} />
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => navigation.navigate('#')}>
                            <Image source={require('./../../Asset/TSECOCOM20.png')} style={styles.image} />
                          </TouchableOpacity>
            </View>
          ),
        },
         {
          name: 'Mathématique',
          searchImage: require('./../../Asset/ANGLAIS1.png'),
          content: (
            <View style={styles.subjectContent}>
                 <TouchableOpacity onPress={() => navigation.navigate('MathematiqueTseco2024')}>
                             <Image source={require('./../../Asset/TSECOM24.png')} style={styles.image} />
                           </TouchableOpacity>
                           <TouchableOpacity onPress={() => navigation.navigate('MathematiqueTseco2023')}>
                             <Image source={require('./../../Asset/TSECOM23.png')} style={styles.image} />
                           </TouchableOpacity>
                           <TouchableOpacity onPress={() => navigation.navigate('MathematiqueTseco2022')}>
                             <Image source={require('./../../Asset/TSECOM22.png')} style={styles.image} />
                           </TouchableOpacity>
                           <TouchableOpacity onPress={() => navigation.navigate('MathematiqueTseco2021')}>
                             <Image source={require('./../../Asset/TSECOM21.png')} style={styles.image} />
                           </TouchableOpacity>
                           <TouchableOpacity onPress={() => navigation.navigate('MathematiqueTseco2020')}>
                             <Image source={require('./../../Asset/TSECOM20.png')} style={styles.image} />
                           </TouchableOpacity>
                           <TouchableOpacity onPress={() => navigation.navigate('MathematiqueTseco2019')}>
                             <Image source={require('./../../Asset/TSECOM19.png')} style={styles.image} />
                           </TouchableOpacity>
            </View>
          ),
        },
      ],
    },
    {
      title: 'Terminal science sociale',
      matieres: [
        {
          name: 'Histoire',
          searchImage: require('./../../Asset/HIST.png'),
          content: (
            <View style={styles.subjectContent}>
               <TouchableOpacity onPress={() => navigation.navigate('#')}>
                          <Image source={require('./../../Asset/TSSH24.png')} style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('#')}>
                          <Image source={require('./../../Asset/TSSH23.png')} style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('#')}>
                          <Image source={require('./../../Asset/TSSH22.png')} style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('#')}>
                          <Image source={require('./../../Asset/TSSH21.png')} style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('#')}>
                          <Image source={require('./../../Asset/TSSH20.png')} style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('#')}>
                          <Image source={require('./../../Asset/TSSH19.png')} style={styles.image} />
                        </TouchableOpacity>
            </View>
          ),
        },
        {
          name: 'Sociologie',
          searchImage: require('./../../Asset/ECM.png'),
          content: (
            <View style={styles.subjectContent}>
             <TouchableOpacity onPress={() => navigation.navigate('#')}>
                        <Image source={require('./../../Asset/TSSS24.png')} style={styles.image} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => navigation.navigate('#')}>
                        <Image source={require('./../../Asset/TSSS23.png')} style={styles.image} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => navigation.navigate('#')}>
                        <Image source={require('./../../Asset/TSSS22.png')} style={styles.image} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => navigation.navigate('#')}>
                        <Image source={require('./../../Asset/TSSS21.png')} style={styles.image} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => navigation.navigate('#')}>
                        <Image source={require('./../../Asset/TSSS20.png')} style={styles.image} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => navigation.navigate('#')}>
                        <Image source={require('./../../Asset/TSSS19.png')} style={styles.image} />
                      </TouchableOpacity>
            </View>
          ),
        },
         {
          name: 'Anglais',
          searchImage: require('./../../Asset/ECM.png'),
          content: (
            <View style={styles.subjectContent}>
             <TouchableOpacity onPress={() => navigation.navigate('AnglaisTss2024')}>
                        <Image source={require('./../../Asset/TSSA24.png')} style={styles.image} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => navigation.navigate('AnglaisTss2023')}>
                        <Image source={require('./../../Asset/TSSA23.png')} style={styles.image} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => navigation.navigate('AnglaisTss2022')}>
                        <Image source={require('./../../Asset/TSSA22.png')} style={styles.image} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => navigation.navigate('AnglaisTss2021')}>
                        <Image source={require('./../../Asset/TSSA21.png')} style={styles.image} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => navigation.navigate('AnglaisTss2020')}>
                        <Image source={require('./../../Asset/TSSA20.png')} style={styles.image} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => navigation.navigate('AnglaisTss2019')}>
                        <Image source={require('./../../Asset/TSSA19.png')} style={styles.image} />
                      </TouchableOpacity>
            </View>
          ),
        },
         {
          name: 'Philosophie',
          searchImage: require('./../../Asset/ECM.png'),
          content: (
            <View style={styles.subjectContent}>
                <TouchableOpacity onPress={() => navigation.navigate('#')}>
                        <Image source={require('./../../Asset/TSSP24.png')} style={styles.image} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => navigation.navigate('#')}>
                        <Image source={require('./../../Asset/TSS23.png')} style={styles.image} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => navigation.navigate('#')}>
                        <Image source={require('./../../Asset/TSSP22.png')} style={styles.image} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => navigation.navigate('#')}>
                        <Image source={require('./../../Asset/TSSP21.png')} style={styles.image} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => navigation.navigate('#')}>
                        <Image source={require('./../../Asset/TSSP20.png')} style={styles.image} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => navigation.navigate('#')}>
                        <Image source={require('./../../Asset/TSSP19.png')} style={styles.image} />
                      </TouchableOpacity>
            </View>
          ),
        },
         {
          name: 'Mathématique',
          searchImage: require('./../../Asset/ECM.png'),
          content: (
            <View style={styles.subjectContent}>
                 <TouchableOpacity onPress={() => navigation.navigate('MathematiqueTss2024')}>
                            <Image source={require('./../../Asset/TSSM24.png')} style={styles.image} />
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => navigation.navigate('MathematiqueTss2023')}>
                            <Image source={require('./../../Asset/TSSM23.png')} style={styles.image} />
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => navigation.navigate('MathematiqueTss2022')}>
                            <Image source={require('./../../Asset/TSSM22.png')} style={styles.image} />
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => navigation.navigate('MathematiqueTss2021')}>
                            <Image source={require('./../../Asset/TSSM21.png')} style={styles.image} />
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => navigation.navigate('MathematiqueTss2020')}>
                            <Image source={require('./../../Asset/TSSM20.png')} style={styles.image} />
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => navigation.navigate('MathematiqueTss2019')}>
                            <Image source={require('./../../Asset/TSSM19.png')} style={styles.image} />
                          </TouchableOpacity>
            </View>
          ),
        },
      ],
    },
    {
      title: 'Terminal lettre et langue',
      matieres: [
        {
          name: 'Allemand',
          searchImage: require('./../../Asset/ECM.png'),
          content: (
            <View style={styles.subjectContent}>
               <TouchableOpacity onPress={() => navigation.navigate('#')}>
                          <Image source={require('./../../Asset/TLLAL24.png')} style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('#')}>
                          <Image source={require('./../../Asset/TLLAL23.png')} style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('#')}>
                          <Image source={require('./../../Asset/TLLAL22.png')} style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('#')}>
                          <Image source={require('./../../Asset/TLLAL21.png')} style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('#')}>
                          <Image source={require('./../../Asset/TLLAL20.png')} style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('#')}>
                          <Image source={require('./../../Asset/TLLAL19.png')} style={styles.image} />
                        </TouchableOpacity>
            </View>
          ),
        },
         {
          name: 'Anglais',
          searchImage: require('./../../Asset/ECM.png'),
          content: (
            <View style={styles.subjectContent}>
               <TouchableOpacity onPress={() => navigation.navigate('AnglaisTll2024')}>
                          <Image source={require('./../../Asset/TLL24.png')} style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('AnglaisTll2023')}>
                          <Image source={require('./../../Asset/TLL23.png')} style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('AnglaisTll2022')}>
                          <Image source={require('./../../Asset/TLL22.png')} style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('AnglaisTll2021')}>
                          <Image source={require('./../../Asset/TLL21.png')} style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('AnglaisTll2020')}>
                          <Image source={require('./../../Asset/TLL20.png')} style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('AnglaisTll2019')}>
                          <Image source={require('./../../Asset/TLL19.png')} style={styles.image} />
                        </TouchableOpacity>
            </View>
          ),
        },
         {
          name: 'Arabe',
          searchImage: require('./../../Asset/ECM.png'),
          content: (
            <View style={styles.subjectContent}>
                 <TouchableOpacity onPress={() => navigation.navigate('#')}>
                           <Image source={require('./../../Asset/TLLA24.png')} style={styles.image} />
                         </TouchableOpacity>
                         <TouchableOpacity onPress={() => navigation.navigate('#')}>
                           <Image source={require('./../../Asset/TLLA23.png')} style={styles.image} />
                         </TouchableOpacity>
                         <TouchableOpacity onPress={() => navigation.navigate('#')}>
                           <Image source={require('./../../Asset/TLLA22.png')} style={styles.image} />
                         </TouchableOpacity>
                         <TouchableOpacity onPress={() => navigation.navigate('#')}>
                           <Image source={require('./../../Asset/TLLA21.png')} style={styles.image} />
                         </TouchableOpacity>
                         <TouchableOpacity onPress={() => navigation.navigate('#')}>
                           <Image source={require('./../../Asset/TLLA20.png')} style={styles.image} />
                         </TouchableOpacity>
                         <TouchableOpacity onPress={() => navigation.navigate('#')}>
                           <Image source={require('./../../Asset/TLLA19.png')} style={styles.image} />
                         </TouchableOpacity>
            </View>
          ),
        },
        {
          name: 'Français',
          searchImage: require('./../../Asset/ECM.png'),
          content: (
            <View style={styles.subjectContent}>
                <TouchableOpacity onPress={() => navigation.navigate('#')}>
                           <Image source={require('./../../Asset/TLLF24.png')} style={styles.image} />
                         </TouchableOpacity>
                         <TouchableOpacity onPress={() => navigation.navigate('#')}>
                           <Image source={require('./../../Asset/TLLF23.png')} style={styles.image} />
                         </TouchableOpacity>
                         <TouchableOpacity onPress={() => navigation.navigate('#')}>
                           <Image source={require('./../../Asset/TLLF22.png')} style={styles.image} />
                         </TouchableOpacity>
                         <TouchableOpacity onPress={() => navigation.navigate('#')}>
                           <Image source={require('./../../Asset/TLLF21.png')} style={styles.image} />
                         </TouchableOpacity>
                         <TouchableOpacity onPress={() => navigation.navigate('#')}>
                           <Image source={require('./../../Asset/TLLF20.png')} style={styles.image} />
                         </TouchableOpacity>
                         <TouchableOpacity onPress={() => navigation.navigate('#')}>
                           <Image source={require('./../../Asset/TLLF19.png')} style={styles.image} />
                         </TouchableOpacity>
            </View>
          ),
        },
         {
          name: 'Linguistique',
          searchImage: require('./../../Asset/ECM.png'),
          content: (
            <View style={styles.subjectContent}>
                 <TouchableOpacity onPress={() => navigation.navigate('#')}>
                            <Image source={require('./../../Asset/TLLL24.png')} style={styles.image} />
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => navigation.navigate('#')}>
                            <Image source={require('./../../Asset/TLLL23.png')} style={styles.image} />
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => navigation.navigate('#')}>
                            <Image source={require('./../../Asset/TLLL22.png')} style={styles.image} />
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => navigation.navigate('#')}>
                            <Image source={require('./../../Asset/TLLL21.png')} style={styles.image} />
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => navigation.navigate('#')}>
                            <Image source={require('./../../Asset/TLLL20.png')} style={styles.image} />
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => navigation.navigate('#')}>
                            <Image source={require('./../../Asset/TLLL19.png')} style={styles.image} />
                          </TouchableOpacity>
            </View>
          ),
        },
             {
          name: 'Philisophie',
          searchImage: require('./../../Asset/ECM.png'),
          content: (
            <View style={styles.subjectContent}>
            <TouchableOpacity onPress={() => navigation.navigate('#')}>
                        <Image source={require('./../../Asset/TLLP24.png')} style={styles.image} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => navigation.navigate('#')}>
                        <Image source={require('./../../Asset/TLLP23.png')} style={styles.image} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => navigation.navigate('#')}>
                        <Image source={require('./../../Asset/TLLP22.png')} style={styles.image} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => navigation.navigate('#')}>
                        <Image source={require('./../../Asset/TLLP21.png')} style={styles.image} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => navigation.navigate('#')}>
                        <Image source={require('./../../Asset/TLLP20.png')} style={styles.image} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => navigation.navigate('#')}>
                        <Image source={require('./../../Asset/TLLP19.png')} style={styles.image} />
                      </TouchableOpacity>
            </View>
          ),
        },
             {
          name: 'Mathématique',
          searchImage: require('./../../Asset/ECM.png'),
          content: (
            <View style={styles.subjectContent}>
              <TouchableOpacity onPress={() => navigation.navigate('MathematiqueTll2024')}>
                        <Image source={require('./../../Asset/TLLM24.png')} style={styles.image} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => navigation.navigate('MathematiqueTll2023')}>
                        <Image source={require('./../../Asset/TLLM23.png')} style={styles.image} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => navigation.navigate('MathematiqueTll2022')}>
                        <Image source={require('./../../Asset/TLLM22.png')} style={styles.image} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => navigation.navigate('MathematiqueTll2021')}>
                        <Image source={require('./../../Asset/TLLM21.png')} style={styles.image} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => navigation.navigate('MathematiqueTll2020')}>
                        <Image source={require('./../../Asset/TLLM20.png')} style={styles.image} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => navigation.navigate('MathematiqueTll2019')}>
                        <Image source={require('./../../Asset/TLLM19.png')} style={styles.image} />
                      </TouchableOpacity>
            </View>
          ),
        },
      ],
    },
    {
      title: 'Terminal anglais et langue',
      matieres: [
        {
          name: 'Anglais',
          searchImage: require('./../../Asset/ANGLAIS1.png'),
          content: (
            <View style={styles.subjectContent}>
              <TouchableOpacity onPress={() => navigation.navigate('AnglaisTal2024')}>
                <Image source={require('./../../Asset/angdef1.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('AnglaisTal2023')}>
                <Image source={require('./../../Asset/angdef2.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('AnglaisTal2022')}>
                <Image source={require('./../../Asset/angdef3.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('AnglaisTal2021')}>
                <Image source={require('./../../Asset/angdef4.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('AnglaisTal2020')}>
                <Image source={require('./../../Asset/angdef5.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('AnglaisTal2019')}>
                <Image source={require('./../../Asset/angdef6.png')} style={styles.contentImage} />
              </TouchableOpacity>
            </View>
          ),
        },
      ],
    },
  ];

  // Recherche par série et matière
const handleSearch = (text) => {
  setSearchQuery(text);
  if (text.trim()) {
    const results = [];
    const searchTerm = text.toLowerCase();
    
    series.forEach((serie) => {
      serie.matieres.forEach((matiere) => {
        if (matiere.name.toLowerCase().includes(searchTerm)) {
          results.push({
            serie: serie.title,
            matiere: matiere.name,
            searchImage: matiere.searchImage,
          });
        }
      });
    });
    
    setSearchResults(results);
    setModalVisible(results.length > 0);
  } else {
    setModalVisible(false);
  }
};
  // Sélection d'une série
  const handleSerieSelect = (serieTitle) => {
    setActiveSerie(serieTitle);
    const serie = series.find((s) => s.title === serieTitle);
    if (serie && serie.matieres.length > 0) {
      setActiveMatiere(serie.matieres[0].name); 
    }
  };

  // Sélection d'une matière
  const handleMatiereSelect = (matiereName) => {
    setActiveMatiere(matiereName);
  };

  // Basculer entre mode sombre et clair
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const dynamicTextColor = isDarkMode ? '#fff' : '#000';
  const dynamicBackgroundColor = isDarkMode ? '#000' : '#fff';
  const dynamicInputBackground = isDarkMode ? '#333' : '#ddd';
  const dynamicInputTextColor = isDarkMode ? '#fff' : '#000';

  // Trouver la série active et ses matières
  const activeSerieData = series.find((serie) => serie.title === activeSerie);
  const activeMatiereData = activeSerieData?.matieres.find((matiere) => matiere.name === activeMatiere);

  return (
    <View style={[styles.container, isDarkMode ? darkStyles.container : lightStyles.container]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
          <Image source={require('./../../Asset/return.png')} style={styles.returnImage} />
        </TouchableOpacity>
                <Image source={require('./../../Asset/logoexamali.png')} style={styles.returnImage1} />
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
          Découvrez les anciens sujets des années précédentes
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
            placeholder="Rechercher une matière..."
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>

        {/* Sélection de la série */}
        <Text style={[styles.sectionTitle, { color: dynamicTextColor }]}>Séries</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
          {series.map((serie, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSerieSelect(serie.title)}
              style={[styles.horizontalItem, activeSerie === serie.title && styles.activeHorizontalItem]}
            >
              <Text
                style={[
                  styles.horizontalText,
                  activeSerie === serie.title && styles.activeHorizontalText,
                  { color: dynamicTextColor },
                ]}
              >
                {serie.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Sélection de la matière */}
        {activeSerieData && (
          <>
            <Text style={[styles.sectionTitle, { color: dynamicTextColor }]}>Matières</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
              {activeSerieData.matieres.map((matiere, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleMatiereSelect(matiere.name)}
                  style={[styles.horizontalItem, activeMatiere === matiere.name && styles.activeHorizontalItem]}
                >
                  <Text
                    style={[
                      styles.horizontalText,
                      activeMatiere === matiere.name && styles.activeHorizontalText,
                      { color: dynamicTextColor },
                    ]}
                  >
                    {matiere.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </>
        )}

        {/* Contenu de la matière sélectionnée */}
        <View style={styles.imagecontainer}>
          {activeMatiereData ? (
            activeMatiereData.content
          ) : (
            <Text style={[styles.emptyText, { color: dynamicTextColor }]}>
              Aucun contenu disponible pour la matière sélectionnée.
            </Text>
          )}
        </View>
      </ScrollView>

      {/* Modal de recherche */}
      <Modal visible={isModalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={[styles.modalTitle, { color: dynamicTextColor }]}>Résultats de la recherche</Text>
            <FlatList
              data={searchResults}
              keyExtractor={(item, index) => `${item.serie}-${item.matiere}-${index}`}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    setActiveSerie(item.serie);
                    setActiveMatiere(item.matiere);
                    setModalVisible(false);
                  }}
                  style={styles.modalItem}
                >
                  <Image source={item.searchImage} style={styles.modalImage} />
                  <View>
                    <Text style={[styles.modalText, { color: dynamicTextColor }]}>{item.matiere}</Text>
                    <Text style={[styles.modalSubText, { color: dynamicTextColor }]}>{item.serie}</Text>
                  </View>
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
  returnImage1: {
    width: 100,
    height: 40,
   alignSelf: "center", 
   left:20
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
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
  contentImage: {
    marginBottom: 10,
    height: 84,
    width: 366,
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
    fontWeight: 'bold',
    textDecorationLine: 'underline',
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
    marginRight: 10,
  },
  modalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalSubText: {
    fontSize: 14,
    color: '#666',
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
button: {
  backgroundColor: '#4CAF50', 
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


});

export default Sujets;

