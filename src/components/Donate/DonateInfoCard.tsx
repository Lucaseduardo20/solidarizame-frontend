import { StyleSheet, Text, View } from "react-native"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const DonateInfoCard = ({ value }) => {
    const styles = StyleSheet.create({
        container: {
            width: '95%',
            height: 219,
            borderWidth: 1,
            borderColor: '#DBEAFE',
            borderRadius: 12,
            paddingHorizontal: 20,
            shadowColor: '#171717',
            shadowOffset: {width: 5, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,

        },
        header: {
            width: '100%',
            height: '20%',
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: 10
        },
        body: {
            width: '100%',
            height: '60%',
            justifyContent: 'center'
        },
        footer: {
            width: '100%',
            height: '20%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        title: {
            fontSize: 20,
            fontWeight: '700',
        },
        payment_label: {
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 10

        },
        payment_method: {
            fontSize: 13,
            color: '#6F727A'
        },
        valueLabel: {
            fontSize: 18,
            fontWeight: 'bold',
        },
        valueText: {
            fontSize: 18,
        }

    })

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons name="attach-money" size={35} color="#3B82F6" />
                <Text style={styles.title}>Pix Estado</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.payment_label}>Forma de pagamento:</Text>
                <Text style={styles.payment_method}>Pix copia e cola</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.valueLabel}>Valor:</Text>
                <Text style={styles.valueText}>{value === 'others' ? 'R$ 0,00' : value}</Text>
            </View>
        </View>
    )
}