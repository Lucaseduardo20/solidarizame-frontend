import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"

export const ThankYou = ({navigation}) => {
    const styles = StyleSheet.create({
        container: {
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            backgroundColor: '#1E3A8A'
        },
        content: {
            padding: 50,
            rowGap: 80
        },
        label: {
            fontSize: 20,
            color: '#fff'
        },
        text: {
            fontSize: 15,
            color: '#fff',
            lineHeight: 24,
            fontFamily: 'Inter'
        },
        button: {
            width: '100%',
            borderRadius: 8,
            height: 48,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center'
        }
    })

    return (
        <View style={styles.container}>
            <Image style={{width: 400, height: 260}} source={require('../../assets/thank-you.png')}></Image>
            <View style={styles.content}>
                <Text style={styles.label}>Obrigado!!</Text>
                <Text style={styles.text}>Obrigado por colaborar com o RS neste momento tão difícil, sua solidariedade faz toda a diferença!</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={styles.button}>
                        <Text style={{color: '#1E3A8A', fontSize: 16, fontWeight: '700'}}>Home</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}