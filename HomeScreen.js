import React, { useRef } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const App = () => {
  const navigation = useNavigation(); // Hook to get the navigation prop
  const cameraRef = useRef(null); // Reference to the camera

  const goToIngredientScreen = () => {
    navigation.navigate('Ingredient'); // Use the name you've given to the IngredientScreen in your navigator
  };

  const takePicture = async () => {
    console.log('Capture button pressed'); // Log to confirm button press
    if (cameraRef.current) {
      try {
        const options = { quality: 0.5, base64: true, skipProcessing: true };
        const data = await cameraRef.current.takePictureAsync(options);
        console.log('Picture taken', data.uri);
        // Use the image URI as needed
      } catch (error) {
        console.error('Error taking picture', error);
      }
    } else {
      console.log('Camera ref is null');
    }
  };
  

  return (
    <SafeAreaView style={styles.container}>
      {/* Button to navigate to IngredientScreen */}
      <TouchableOpacity onPress={goToIngredientScreen} style={styles.button}>
        <Text style={styles.buttonText}>Ingredients</Text>
      </TouchableOpacity>

      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        // ... rest of your camera props
      />
      {/* Camera View */}

      {/* Capture Button */}
      <View style={styles.captureContainer}>
        <TouchableOpacity onPress={takePicture} style={styles.captureButton}>
          <Text style={styles.captureButtonText}>CAPTURE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    alignSelf: 'flex-end',
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  buttonText: {
    color: '#000',
  },
  captureContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  captureButton: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  captureButtonText: {
    fontSize: 14,
    color: '#000',
  },
  // ... rest of your styles
});

export default App;

// import React from 'react';
// import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import { RNCamera } from 'react-native-camera';
// import { useNavigation } from '@react-navigation/native'; // Import useNavigation

// const App = () => {
//   const navigation = useNavigation(); // Hook to get the navigation prop

//   const goToIngredientScreen = () => {
//     navigation.navigate('Ingredient'); // Use the name you've given to the IngredientScreen in your navigator
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Button to navigate to IngredientScreen */}
//       <TouchableOpacity
//         onPress={goToIngredientScreen}
//         style={styles.button}
//       >
//         <Text style={styles.buttonText}>Ingredients</Text>
//       </TouchableOpacity>

//       <RNCamera
//         style={styles.preview}
//         type={RNCamera.Constants.Type.back}
//         flashMode={RNCamera.Constants.FlashMode.on}
//         // ... rest of your camera props
//       />
//       {/* Camera View */}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: 'black',
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   button: {
//     alignSelf: 'flex-end',
//     margin: 20,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     backgroundColor: '#fff',
//     borderRadius: 20,
//   },
//   buttonText: {
//     color: '#000',
//   },
//   // ... rest of your styles
// });

// export default App;
