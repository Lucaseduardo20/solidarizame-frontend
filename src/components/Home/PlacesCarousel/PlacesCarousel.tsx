import { FlatList, View, StyleSheet, Text } from "react-native";
import { PlaceListItem } from "./PlaceListItem";

export const PlacesCarousel = ({navigation}) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 320,
            justifyContent: 'space-between',
            backgroundColor: '#1E3A8A',
            paddingLeft: 10,
            paddingVertical: 10
        },
        title: {
            fontSize: 20,
            fontWeight: '700',
            lineHeight: 32,
            color: '#fff',
            fontFamily: 'Inter'
        },
        content: {
            height: '70%'
        }
    })

    const flatListData = [
        {
            id: 1,
            name: 'ONG Nove de Julho',
            text: 'Aceita doações de roupas, dinheiro e alimentos não perecíveis'
        },
        {
            id: 2,
            name: 'ONG Nove de Julho',
            text: 'Aceita doações de roupas, dinheiro e alimentos não perecíveis'
        },
        {
            id: 3,
            name: 'ONG Nove de Julho',
            text: 'Aceita doações de roupas, dinheiro e alimentos não perecíveis'
        },
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ongs Próximas</Text>
            <View style={styles.content}>
                <FlatList 
                    horizontal
                    data={flatListData}
                    renderItem={({item}) => (
                        <PlaceListItem data={item} navigation={navigation}></PlaceListItem>
                    )}
                />
            </View>
        </View>
    )
}