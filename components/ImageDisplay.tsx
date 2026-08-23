import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

type Props = {
    selectedImage?: string; 
}

export default function ImageViewer({selectedImage} :Props){
    const imageSelected = {uri: selectedImage}

    return <Image source={imageSelected} style={styles.img} contentFit='cover' />;
}

const styles = StyleSheet.create ({
    img: {
        width: 330,
        height: 300,
        borderRadius: '50%',
        
    }
})
