import { Text, StyleSheet, View, Image } from "react-native"
import SolidarizameLogo from "../icons/SolidarizameLogo"
import Feather from '@expo/vector-icons/Feather';

export const Home = ({navigation}) => {

    const navbar = StyleSheet.create({
        container: {
            width: '100%',
            height: ' 13%',
            // backgroundColor: 'grey',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-around',
        },
        title: {
            fontFamily: 'Inter',
            fontSize: 16,
            fontWeight: 'bold',
            lineHeight: 32,
            color: '#232325'
        },
        button: {
            width: 27,
            height: 16
        }
    })

    return (
        <View style={navbar.container}>

            <SolidarizameLogo width={49} height={29} />
            <Text style={navbar.title}>Solidarizame</Text>
            <Feather name="menu" size={30} color="#7A7786" />
        </View>
    )
}