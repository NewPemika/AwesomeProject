import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { TextInput, View } from 'react-native';

export default function Section2() {
    return ( 
        <View style = {{flex: 1, marginTop: -50, marginHorizontal: 40, padding: 10, backgroundColor: '#F5F5F5', borderRadius: 20, height: 150, alignItems: 'center'}} >
            <View >
                <TextInput 
                style = {{ fontSize : 20 ,textAlign : 'center'}} 
                placeholder='Hilton San Francisco' />
            </View>
            
            <View style={{ flexDirection : "row", justifyContent : "center" }}>
                <FontAwesome name="star" size={20} color="orange" />
                <FontAwesome name="star" size={20} color="orange" />
                <FontAwesome name="star" size={20} color="orange" />
                <FontAwesome name="star" size={20} color="orange" />
                <FontAwesome name="star-half" size={20} color="orange" />
            </View>
            
            <View style = {{alignItems: "center"}}>
                <TextInput 
                    style = {{textAlign : 'center'}}
                    multiline = {true}
                    placeholder='Facilities provided may range from a modest quality mattress in a small room to large suites'
                />
            </View>



        </View>







    );



}