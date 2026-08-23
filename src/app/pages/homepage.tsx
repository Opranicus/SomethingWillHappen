import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import Button from '../../../components/Button';
import Cards from '../../../components/Cards';
import ImageDisplay from '../../../components/ImageDisplay';


export default function Homepage() {

    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: 'images',
            quality: 1,

        });

        if(!result.canceled){
            setSelectedImage(result.assets[0].uri);
        }
        else{
            alert("You did not pick an image.");
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.profileHolder}>
                <ImageDisplay selectedImage={selectedImage} />
            </View>

            <Button label={'Choose a photo'}  onPress={pickImage} /> 

            <View style={styles.cardContainer}>
                <Text style={styles.bio}>BIO</Text>

                <View >
                    <Cards label={'Name'} />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#080808',
        flex: 1,
        alignItems: 'center',
    },

    profileHolder: {
        width: 330,
        height: 300,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: '50%',
        marginTop: 30,
        marginBottom: 15,
    },

    bio: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
        paddingVertical: 10
    },

    cardContainer: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        width: '90%',
        height: '50%',
        margin: 30,

    }
})