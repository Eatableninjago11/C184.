import React from 'react';
import {Image, View} from 'react-native';

const Filter7 = ({
    face: {
        bounds: {
            size: {
                width: faceWidth,
                height: faceHeight,
            }
        },
        leftEyePosition,
        rightEyePosition,

    }
}) => {
    const glassesWidth = faceWidth
    const glassesHeight = faceHeight/3
    const transformAngle = (
        angleRad = Math.atan(
            (rightEyePosition.y - leftEyePosition.y)/
            (rightEyePosition.x - leftEyePosition.x)
        )
    ) => angleRad * 180 / Math.PI
    return(
        <View style={{
            position: 'absolute',
            left: leftEyePosition.x - glassesWidth * 0.675,
            top: leftEyePosition.y - glassesHeight * 0.5
        }}>

            <Image 
            source = {require('../assets/Frapp-06.png')}
            style = {{
                width: glassesWidth,
                heihgt: glassesHeight,
                resizeMode: 'contain',
                transform: [{rotate: `${transformAngle()}deg`}]
            }}           
            ></Image> 
        </View>
    );
};


export default Filter7