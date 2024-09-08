import {useState} from "react"
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native"
import {IconInput} from "../../utils/IconInput"
import { PlacesCarousel } from "./PlacesCarousel/PlacesCarousel"
import { DonateSession } from "./DonateSession/DonateSession"

export const HomeBody = ({navigation}) => {
    const [searchField, setSearchField] = useState();
    const styles = StyleSheet.create({
        header: {
            width: '100%',
            height: '15%',
            marginTop: 15,
            paddingHorizontal: 20,
            marginVertical: 20,
            justifyContent: 'space-between'
        },
        titleArea: {
            width: '100%',
            height: 'auto',
            gap: 4
        },
        title: {
            fontFamily: 'Inter',
            color: '#232325',
            fontWeight: 'bold',
            fontSize: 16
        },
        subtitle: {
            fontSize: 12,
            fontWeight: 400,
            color: '#6F727A',
        },
        body: {
            width: '100%',
            height: 'auto'
        }
    })
    return (
        <ScrollView style={{height: 'auto'}} scrollEnabled showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <View style={styles.titleArea}>
                    <Text style={styles.title}>Olá, Lucas!</Text>
                    <Text style={styles.subtitle}>Seja bem vindo, é muito bom ter a sua solidariedade aqui!</Text>
                </View>
                <IconInput state={searchField} setState={setSearchField} icon="search" placeholder='Solidarize Conosco'></ IconInput>
            </View>
            <View style={styles.body}>
                <PlacesCarousel></PlacesCarousel>
                <DonateSession navigation={navigation}></DonateSession>
            </View>
        </ScrollView>

    )
}