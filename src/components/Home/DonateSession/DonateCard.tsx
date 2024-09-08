import { View, Text, StyleSheet } from "react-native"

interface ItemData {
    id: Number,
    title: string,
    text: string
}

type PropsType = {
    data: ItemData
}

export const DonateCard = ({data}: PropsType) => {
    const styles = StyleSheet.create({
        card: {
            width: 157,
            height: 116,
            borderWidth: 1,
            borderColor: '#93C5FD',
            borderRadius: 8,
            justifyContent: 'center',
            paddingHorizontal: 10
        },
        title: {
            fontSize: 16,
            fontWeight: 'bold',
            fontFamily: 'Inter'
        },
        text: {
            fontSize: 13,
            color: '#6F727A',
            fontFamily: 'Inter'
        }
    })

    return (
        <View style={styles.card}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.text}>{data.text}</Text>
        </View>
    )
}