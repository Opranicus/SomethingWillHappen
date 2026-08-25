import { Text, TextInput, View } from 'react-native';

type Props = {
    label: string;
    value: string;
    onChange: (text: string) => void;
}

export default function Input({label, value, onChange} : Props){
    return(
        <View>
            <Text>{label}</Text>
            <TextInput 
                value={value}
                onChangeText={onChange}
            />
        </View>
    )
}