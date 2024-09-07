import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { DonateCard } from "./DonateCard"

export const DonateSession = () => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 400,
            padding: 10,
            justifyContent: 'space-around',
            marginBottom: 30
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',

        },
        content: {
            height: 300,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            rowGap: 50,
            // gap: 20
        }
    })

    const data = [
        {
            title: 'PIX ESTADO',
            text: 'Doe direto patra o estado do Rio Grande do Sul'
        },
        {
            title: 'Vakinha Ong',
            text: 'Contribua com a vakinha da ong Y e ajude crianças'
        },
        {
            title: 'PIX ESTADO',
            text: 'Doe direto patra o estado do Rio Grande do Sul'
        },
        {
            title: 'Vakinha Ong',
            text: 'Contribua com a vakinha da ong Y e ajude crianças'
        }
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Doações em Dinheiro</Text>
            <View style={styles.content}>
                {data.map((item, key) => (
                    <TouchableOpacity>
                        <DonateCard data={item}>

                        </DonateCard>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}