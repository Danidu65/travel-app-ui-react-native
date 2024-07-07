import { StyleSheet, Text, View ,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '@/constants/Colors'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

    const navigation = useNavigation();
    const handleLogin = () => {
        navigation.navigate("Login");
    }
    const handleLSignUp = () => {
        navigation.navigate("SignUp");
    }

  return (
    <View style={styles.container}>
      <Image source={require('@/app/assets/logo.png')} style={styles.logo}/>

    <Text style={styles.baseText}>React <Text style={styles.innerText}>Native...!</Text></Text>
    <Text style={styles.subText}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eius temporibus repudiandae reiciendis</Text>

        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loginButtonWrapper} 
            onPress={handleLogin}
            >
                <Text style={styles.loginButtonText}>LogIn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUpButtonWrapper}
            onPress={handleLSignUp}
            >
                <Text style={styles.signUpButtonText}>Sign-Up</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor : colors.white,
        alignItems: 'center'
    },

    logo:{
        marginTop: 50
    },

    baseText: {
        marginLeft: 0,
        marginTop: 20,
        fontSize: 40,
        fontWeight: 'bold',
    },
    innerText: {
        textAlign: 'center',
        color: '#3DC7F3',
    },
    subText:{
        fontSize: 25,
        textAlign: 'center',
        color: colors.secondary,
        marginVertical: 20
    },
    buttonContainer:{
        flexDirection: 'row',
        marginTop: 100,
        borderWidth: 1,
        borderColor: colors.primary,
        width:"80%",
        height:60,
        borderRadius:100
    },
    loginButtonWrapper: {
        justifyContent:'center',
        alignItems:'center',
        width:"50%",
        backgroundColor: colors.primary,
        borderRadius:98 
    },
    loginButtonText: {
        color : colors.white,
        fontSize:18,
        fontWeight:'900'

    },
    signUpButtonWrapper: {
        justifyContent:'center',
        alignItems:'center',
        width:"50%",
        // backgroundColor: colors.primary,
        borderRadius:98 
    },
    signUpButtonText: {
        color : colors.primary,
        fontSize:18,
        fontWeight:'900'
    }
})