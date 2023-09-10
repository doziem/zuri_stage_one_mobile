import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import dozie1 from '../assets/img/dozie1.jpg'

const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text style={styles.displayName}>Agbo Kenneth chidozie</Text>
            <Image style={styles.img} source={dozie1} alt='profile' />
            <View style={{ width: '95%', marginTop: 20 }}>
                <TouchableOpacity style={styles.gitBtn}
                    onPress={() => navigation.navigate('WebView')}
                >
                    <Text style={{
                        textAlign: 'center', color: '#fff',
                        backgroundColor: '#fc500d',
                        paddingVertical: 14,
                        borderRadius: 8

                    }}> Open GitHub </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}


export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c4c4c4',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    displayName: {
        fontSize: 33,
        marginBottom: 10,
        fontWeight: 'bold',
        color: '#071e22'
    },
    img: {
        // flex:1,
        width: '95%',
        height: '80%'
    },
    gitBtn: {
        borderRadius: 8,

    }
});

