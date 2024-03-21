import {
    Alert,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  import {launchCamera} from 'react-native-image-picker';
  
  const Bai1 = () => {
    const commmonOptions = {
      mediaType: 'photo',
      maxWidth: 500,
      maxHeight: 500,
    };
    const CameraOptions = {
      cameraType: 'front',
      saveToPhotos: true,
      ...commmonOptions,
    };
    const [image, setImage] = useState();
    const onOpenCamera = async () => {
      const response = await launchCamera(CameraOptions);
      if (response?.assets) {
        setImage(response.assets);
      } else {
        Alert.alert('Lỗi ', response.errorMessage);
      }
    };
    return (
      <View style={styles.container}>
        <View style={styles.containerbutton}>
          <TouchableOpacity style={styles.btnbutton} onPress={onOpenCamera}>
            <Text style={styles.textbutton}>Chụp</Text>
          </TouchableOpacity>
          <Image
            source={{
              uri:
                image?.[0]?.uri ||
                'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg',
            }}
            style={styles.avatar}
          />
        </View>
      </View>
    );
  };
  
  export default Bai1;
  
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
  
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerbutton: {
      marginTop: 50,
      width: '100%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnbutton: {
      width: '80%',
      height: '100%',
      backgroundColor: '#00FFCC',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    textbutton: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    avatar: {
      width: 200,
      height: 300,
      marginTop: 20,
    },
  });