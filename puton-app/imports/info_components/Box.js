import React from 'react';
import { View } from 'react-native';

const Box = (props) => {
    // console.log(props.children);
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRaius: 2,
        borderColor: '#fff',
        borderBottomWidth: 0,
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export default Box;