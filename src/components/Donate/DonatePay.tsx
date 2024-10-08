import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, Alert, ScrollView, Keyboard, TouchableWithoutFeedback, ActivityIndicator } from "react-native"
import { DonateInfoCard } from "./DonateInfoCard"
import { useState, useEffect } from "react"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const DonatePay = ({navigation, value, setValue }) => {
    const [donateValue, setDonateValue] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 'auto',
            paddingHorizontal: 10,
            paddingVertical: 30,
            flex: 1,
        },
        setValueContent: {
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 50,
            rowGap: 50
        },
        label: {
            fontSize: 18,
            fontWeight: 'bold',
        },
        inputValue: {
            width: '80%',
            height: 50,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#2E65F3',
            fontSize: 20,
            paddingVertical: 10,
            textAlign: 'center'
        },
        paymentContent: {
            width: '100%',
            height: 'auto',
            paddingVertical: 30,
            paddingHorizontal: 15,
            justifyContent: 'space-around',
            rowGap: 50
        },
        instructionContainer: {
            width: '100%',
            rowGap: 15
        },
        pixCodeArea: {
            width: '100%',
            height: 50,
            shadowColor: '#171717',
            shadowOffset: { width: 5, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            borderWidth: 1,
            borderColor: '#d6dee2',
            borderRadius: 8,
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-around'
        },
        footer: {
            width: '100%',
            height: 200,
            paddingVertical: 50,
            rowGap: 50,
        },
        copyButton: {
            width: '70%',
            height: 50,
            backgroundColor: '#3B82F6',
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto'
        },
        containerKeyboardUp: {
            marginTop: -150,
        },
    });

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); 
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); 
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    const formatCurrency = (value) => {
        const numericValue = value.replace(/[^0-9]/g, '');
        const formattedValue = (numericValue / 100).toFixed(2)
            .replace('.', ',')
            .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return `R$ ${formattedValue}`;
    };

    const handleChangeValue = (text) => {
        setDonateValue(formatCurrency(text));
    };

    const copyCode = () =>
        Alert.alert('Pix copiado!', 'Código Pix copiado para a área de transferência!', [
            { text: 'OK' },
        ]);

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('ThankYou')
            setIsLoading(false);
            setValue(null)
        }, 20000);
    }, []);

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
                <View style={[styles.container, isKeyboardVisible ? styles.containerKeyboardUp : null]}>
                    <DonateInfoCard value={value} />
                    {value === 'others' ? (
                        <View style={styles.setValueContent}>
                            <Text style={styles.label}>Digite o Valor:</Text>
                            <TextInput
                                style={styles.inputValue}
                                onChangeText={(text) => handleChangeValue(text)}
                                value={donateValue}
                                keyboardType="numeric"
                                returnKeyType="done"
                                onEndEditing={() => setValue(donateValue)}
                            />
                        </View>
                    ) : (
                        <View style={styles.paymentContent}>
                            <Text style={styles.label}>Para concluir o pagamento via Pix:</Text>
                            <View style={styles.instructionContainer}>
                                <Text>1. Copie o código Pix:</Text>
                                <View style={styles.pixCodeArea}>
                                    <View style={{ width: '80%', height: '100%', flexDirection: 'row', flexWrap: 'wrap' }}>
                                        <Text style={{ color: '#94939A', fontSize: 12, flexShrink: 1 }}>000123456789321.gov.bcb.pix321api.developer.bancodobrasil.....</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => copyCode()}>
                                        <MaterialIcons name="content-copy" size={24} color="#3B82F6" />
                                    </TouchableOpacity>
                                </View>
                                <Text>2. Abra o aplicativo do seu banco, selecione “Pix” e depois “Pix copia e cola”</Text>
                                <Text>3. Cole o código, confira se as informações estão corretas e confirme o pagamento.</Text>

                                {isLoading && (
                                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                                        <Text>Aguardando pagamento...</Text>
                                        <ActivityIndicator size="large" color="#2E65F3" />
                                    </View>
                                )}
                            </View>
                            <View style={styles.footer}>
                                <Text style={{ fontSize: 12 }}>Este código é valido até hoje, 23:59 - Horário de Brasília</Text>
                                <TouchableOpacity onPress={() => copyCode()}>
                                    <View style={styles.copyButton}>
                                        <Text style={{ color: '#fff' }}>COPIAR CÓDIGO PIX</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </View>
            </ScrollView>
        </TouchableWithoutFeedback >
    );
};
