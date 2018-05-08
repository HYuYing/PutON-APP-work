import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

import Box from './Box';
import BoxSection from './BoxSection';
import Button from './BoxButton';


const InfoDetail = () => {
  
    const {
        thumbnailContainerStyle,
        thumbnailStyle,
        headerContentStyle,
        headerTextStyle,
        imageStyle
    } = styles;

    // console.log("Album", album);
    return (
        <Box>
            <BoxSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle }
                        source={require('./img/LativLogo.png')}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>Lativ</Text>
                </View>
            </BoxSection>
            <BoxSection>
                <Image 
                    style={imageStyle}
                    source={{ uri: 'https://s3.lativ.com.tw/i/34045/34045_L_03.jpg' }} 
                />
            </BoxSection>
            <BoxSection>
                <Button onPress={() => Linking.openURL('https://www.lativ.com.tw/Style')} >
                    Check it out !
                </Button>
            </BoxSection>
        </Box>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle:{
        fontSize: 24
    },
    thumbnailStyle: {
       height: 50,
       width: 50 
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 700,
        flex: 1,
        width: null
    }
};

export default InfoDetail;
