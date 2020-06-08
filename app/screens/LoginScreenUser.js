import React, {Component, useState} from 'react';
import { 
   Text,
   View,
   Linking,
   TouchableOpacity,
   StatusBar,
   Image,
} from 'react-native'
import { loginStyles} from '../styles/styles'
import MyTextInput from '../components/MyTextInput'
import color from '../styles/colors'

export default function LoginScreen({navigation}) {
   const [hidePassword, setHidePassword] = useState(false)

   return(
      <View style={[loginStyles.container, {marginBottom: 50}]}>
         <StatusBar style={{backgroundColor: 'white'}} translucent={true}/>
         <View style={[loginStyles.logo]}>
            <Image source={require('../recursos/images/logo.png')}
            style={{ height:230, width:230}}/>
         </View>
         <MyTextInput keyboardType='email-address' placeholder='E-mail' image='user'
         style={{ marginBottom: -150 }}/>
         <MyTextInput keyboardType='null' placeholder='Contraseña' image='lock'
         bolGone={true} secureTextEntry={hidePassword}
         onPress={()=> setHidePassword(!hidePassword)}
         style={{ marginBottom: 150 }}/>
         <View style={loginStyles.btnMain}>
            <TouchableOpacity>
               <Text style={ loginStyles.btntxt} onPress={()=> navigation.navigate('User')}>Iniciar Sesión</Text>
            </TouchableOpacity>
         </View>
         <View style={loginStyles.btnTransparent}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.rappi.com.co/login')}>
               <Text style={ [loginStyles.btntxt, { color: color.ORANGE}]}>Regristrarse</Text>
            </TouchableOpacity>
         </View>
         <View>
            <TouchableOpacity>
               <Text style={ [loginStyles.txtTransparent, { textDecorationLine: 'underline'}]}>Olvide mi contraseña</Text>
            </TouchableOpacity>
         </View>
         </View>
        )
}
