import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { NavBar } from "../components/Nav/NavBar"
import { DonateSelectValue } from "../components/Donate/DonateSelectValue";
import { useState } from "react";
import { DonatePay } from "../components/Donate/DonatePay";

export const Donate = (props) => {
    const [donateValue, setDonateValue] = useState();

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

    return (
        <View style={styles.container}>
            <NavBar navigation={props.navigation} />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => props.navigation.reset({
                    routes: [{ name: 'Home' }]
                })}>
                    <MaterialIcons name="arrow-back" size={30} color="#3B82F6" />
                </TouchableOpacity>
                <Text style={styles.title}>Doação em Dinheiro</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {!donateValue ? (
                    <DonateSelectValue value={donateValue} setValue={setDonateValue}/>

                ) : 
                (
                    <DonatePay navigation={props.navigation} value={donateValue} setValue={setDonateValue}/>
                )}
            </ScrollView>

        </View>
    )
}