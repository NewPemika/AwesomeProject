import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

export default function Section3() {
    return ( 
        <View>
            <View style = {{ flexDirection: 'row', marginTop: 10 , justifyContent: 'flex-start'}}>
                <View style = {{borderRadius: 50/2, height: 50, width: 50, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ fontSize : 20 , color : 'white' }}>9.5</Text>
                </View>
                <View style = {{ paddingLeft : 10}}>
                    <Text style={{ fontSize : 17, color: 'red' }}>Excellent</Text>
                    <Text style={{ fontSize : 15 }}>See 801 reviews</Text>
                </View>

            </View>


            
        </View>

    );



}
