import React,{Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity,TextInput,Image,ListView} from 'react-native';


export default class Splash extends Component{
       componentWillMount () {
        var navigator = this.props.navigator;
        setTimeout (() => {
            navigator.replace({
                id: 'Login',
            });
        }, 4000);
    }

    render(){
        return(
                <Image source={require('../../images/splash.png')} style={styles.container}>
                </Image>
        )
    }
}


const styles = StyleSheet.create({
     container:{
          flex: 1,
          width: null,
          height: null,
     },
})

module.exports = Splash;