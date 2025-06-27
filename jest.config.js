module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  transformIgnorePatterns: [
    "node_modules/(?!(react-native" +
      "|@react-native" +
      "|@react-navigation" +
      "|@react-native-community" +
      "|@react-navigation/native" +
      "|@react-navigation/.*" +
      "|@react-native-firebase/.*" +
      "|react-native-vector-icons" +
      "|react-native-safe-area-context" +
      "|react-native-screens" +
      "|react-native-reanimated" +
      "|react-native-gesture-handler" +
      "|expo(nent)?|@expo(nent)?/.*" +
      "|expo-font" +
      "|expo-app-loading" +
      "|react-native-swiper" +
    ")/)"
  ],
};