import GradientButton from 'react-native-gradient-buttons';
import React, {useState} from 'react';
import { 
   Text,
   View,
   Linking,
   TouchableOpacity,
   StatusBar,
   Image,
   StyleSheet
} from 'react-native';
import { loginStyles} from '../styles/styles';
import MyTextInput from '../components/MyTextInput';

export default function LoginScreen({navigation}) {
   const [hidePassword, setHidePassword] = useState(true)

   return(
      <View style={[loginStyles.container, { backgroundColor: '#fff'}]}>
         <StatusBar style={{backgroundColor: 'white'}} translucent={true}/>
         <View >
            <Image style={styles.image} source={require('../resources/images/rappilogo.png')}/>
         </View>
         <View style={{marginTop: 25}}>
            <MyTextInput keyboardType='email-address' placeholder='E-mail' image='user'/>
            <MyTextInput placeholder='Password' image='lock'
            bolGone={true} secureTextEntry={hidePassword}
            onPress={()=> setHidePassword(!hidePassword)}/>
         </View>
         <View style={styles.button}>
            <GradientButton style={{alignSelf:'center', padding: 5, width:'103%'}} gradientBegin='#ff9259' gradientEnd="#ff2426" text="Log In" textStyle={{ fontWeight: 'bold', color: '#fff' }} onPressAction={()=> navigation.navigate('SplashUser')}/>
         </View>
         <View style={styles.button} >
            <GradientButton style={{alignSelf:'center', padding: 5, width:'103%'}} gradientBegin='#fff' gradientEnd='#ff9259' text="Sign In" textStyle={{ fontWeight: 'bold', color: '#000000' }} onPressAction={() => Linking.openURL('https://www.rappi.com.co/login')}/>
         </View>
         <View style={[styles.button, { marginBottom: 50}]}>
            <TouchableOpacity style={{alignSelf:'center', marginTop:40, backgroundColor: '#fff'}}>
               <Text style={ [loginStyles.txtTransparent, { textDecorationLine: 'underline', backgroundColor: '#fff' }]}>Forgot password</Text>
            </TouchableOpacity>
         </View>
      </View>
        )
}

const styles = StyleSheet.create({
   button: {       
      padding: 5,
      width: "65%",
      height: 50,
      marginTop: 20     
  },
  image: {
     width: 150,
     height: 150,
     borderRadius: 30,
     overflow: "hidden",
     borderWidth: 3,
     borderColor: "#ff2426",
     marginBottom:20,
     marginTop: 40
 }
});