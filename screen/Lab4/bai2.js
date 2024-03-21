import {     Alert,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View, } from 'react-native'
import React from 'react'
import { launchImageLibrary } from 'react-native-image-picker';

const bai2 = () => {
const commmonOptions = {
      mediaType: 'photo',
      maxWidth: 500,
      maxHeight: 500,
    };
    const libratyOptions= {
        selectionLimit: 10,
      ...commmonOptions,
    };
    const onOpenLibrary = async () =>{
        const response = await launchImageLibrary(libratyOptions);
        if (response?.assets){
            setImages(response.assets)
        }else{
            Alert.alert('Error', response.errorMessage)
        }
    }

  return (
    <View style={styles.container}>
            <View style={styles.containerbutton}>
    <TouchableOpacity style={styles.btnbutton} onPress={onOpenLibrary}>
      <Text style={styles.textbutton}>Doi Anh</Text>
    </TouchableOpacity>
    <Image
      source={{
        uri:
          Image?.[0]?.uri ||
          'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg',
      }}
      style={styles.avatar}
    />
  </View>
    </View>

  
  )
}

export default bai2

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
})