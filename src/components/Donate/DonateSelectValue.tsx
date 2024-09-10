import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const DonateSelectValue = ({value, setValue}) => {
    const styles = StyleSheet.create({
        container: {
            height: '100%',
            width: '100%'
        },
        header: {
            height: 50,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            marginVertical: 30
        },
        title: {
            fontFamily: 'Inter',
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: '20%'
        },
        content: {
            width: '100%',
            paddingHorizontal: 20
        },
        infoText: {
            paddingHorizontal: 20,
            color: '#6F727A',
            lineHeight: 24,
            fontSize: 14,
            textAlign: 'center'
        },
        valuesContainer: {
            width: '100%',
            height: 500,
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            rowGap: 40,
            marginBottom: 50
        },
        valueCard: {
            width: 157,
            height: 116,
            borderWidth: 1,
            borderColor: '#93C5FD',
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 10
        },
        otherValueCard: {
            width: 230,
            height: 116,
            borderWidth: 1,
            borderColor: '#93C5FD',
            borderRadius: 8,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 10
        }
    })

        const formatCurrency = (value) => {
        const numericValue = value.replace(/[^0-9]/g, '');
        const formattedValue = (numericValue / 100).toFixed(2)
            .replace('.', ',')
            .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return `R$ ${formattedValue}`;
    };

    return (
        <View style={styles.content}>
        <Text style={styles.infoText}>Esse PIX é oficial do governo do estado do Rio Grande do Sul, todo o dinheiro arrecadado será administrado pelo estado e será destinado para ajudar as vitimas da tragedia e na recuperação das cidades.</Text>
        <Text style={{
            fontFamily: 'Inter',
            fontSize: 18,
            fontWeight: 'bold',
            marginVertical: 30
        }}>Selecione um valor</Text>
        <View style={styles.valuesContainer}>
            <TouchableOpacity onPress={() => setValue(`R$ ${5},00`)}>
                <View style={styles.valueCard}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>R$5,00</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setValue(`R$ ${10},00`)}>
                <View style={styles.valueCard}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>R$10,00</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setValue(`R$ ${25},00`)}>
                <View style={styles.valueCard}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>R$25,00</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setValue(`R$ ${50},00`)}>
                <View style={styles.valueCard}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>R$50,00</Text>
                </View>
            </TouchableOpacity>
            <View style={{ width: '100%', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => setValue('others')}>
                    <View style={styles.otherValueCard}>
                        <MaterialIcons name="add-circle-outline" size={35} color="#60A5FA" />
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}> Outros Valores</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    </View>
    )
}