import { StyleSheet, View, TextInput, DimensionValue } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface PropsType {
    label?: string;
    width?: DimensionValue;
    height?: DimensionValue;
    state: any,
    setState: any
    placeholder?: string;
    icon?: keyof typeof MaterialIcons.glyphMap
}

export const IconInput = ({ label, width, height, placeholder, icon }: PropsType) => {
    const styles = StyleSheet.create({
        box: {
            width: width || '100%',
            height: height || 48,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#E0E2E7',
            paddingHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'

        },
        input: {
            fontSize: 16
        }
    });

    return (
        <View style={styles.box}>
            <TextInput style={styles.input} placeholder={placeholder || "Solidarize conosco"} />
            <MaterialIcons name={icon} size={24} color="#3B82F6" />
        </View>
    );
};