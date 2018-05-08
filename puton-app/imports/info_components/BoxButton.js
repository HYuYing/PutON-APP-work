import React from 'react';
import { Text, TouchableOpacity/*, Alert*/ } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle  } = styles;
/*    
    _signUpButtonPress = () => {
        Alert.alert('到註冊畫面');
        this.props.navigation.navigate('signup')
    }*/

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                { children }
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#4d3126',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: 5,
    }
    
};

export default Button;