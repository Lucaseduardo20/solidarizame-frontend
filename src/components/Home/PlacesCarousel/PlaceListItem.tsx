import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
interface ItemData {
    id: Number
    name: string,
    text: string
}

type PropsType = {
    data: ItemData
}

export const PlaceListItem = ({data}: PropsType) => {
    const styles = StyleSheet.create({
        card: {
            width: 241,
            height: 152,
            backgroundColor: '#fff',
            marginRight: 40,
            borderRadius: 8,
            paddingHorizontal: 20
        },
        content: {
            height: '75%',
            width: '100%',
            justifyContent: 'space-evenly',
        },
        title: {
            fontSize: 16,
            fontWeight: 'bold',

        },
        text: {
            fontSize: 13,

        },
        footer: {
            width: '100%',
            borderTopWidth: 1,
            height: '20%',
            alignItems: 'flex-end',
            justifyContent: 'center',
            borderTopColor: '#E0E2E7'
        }
    })

    return (
        <View style={styles.card}>
            <View style={styles.content}>
                <MaterialIcons name="place" size={35} color="#1E3A8A" />
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.text}>{data.text}</Text>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity>
                    <MaterialIcons name="arrow-forward" size={24} color="#2E65F3" />
                </TouchableOpacity>
            </View>
        </View>
    )
}