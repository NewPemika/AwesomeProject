import React, { useState } from "react";
import { Text, TextInput, View , Button, TouchableOpacity } from "react-native";
// import { Button } from "react-native-paper";
// import { TextInput } from "react-native-paper";

export default function Bmi() {  
    const [weight , setWeight] = useState('70');
    const [height , setHeight] = useState('170');
    const [bmi , setBmi] = useState('0'); 
    const [body, setBody] = useState('Normal'); 



    console.log("STATE : ", weight, height, bmi, body);

    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        let output = (weight/ (height/100 * height/100));
        setBmi(output.toFixed(2));

        let body_status = "";
            if (output<18.5) 
            {
                body_status ="Underweight - eat a bagel!";
            }
            else if (output>=18.5 && this<=24.99) 
            {
                body_status ="Normal - keep it up!";
            }
            else if (output>=25 && output<=29.99)
            {
                body_status ="Overweight - exercise more!";
            }
            else if (output>=30 && output<=39.99)
            {
                body_status ="Obese - get off the couch!";
            }
            else 
            {
                body_status ="Morbidly Obese - take action!";
            }
        setBody(body_status);

    };

    

    return (
        <View >
            {/* แถวที่ 1 */}
            <View style = {{ backgroundColor: "white" , padding: 20 , marginVertical: 10, borderRadius: 10, height: 150, justifyContent: "space-around"}}>
                <Text style={{ fontSize : 20}}>Weight (kg.)</Text>  
                <TextInput 
                    value = {weight}
                    style = {{fontSize: 20}}
                    placeholder="Input your Weight..." 
                    keyboardType="numeric" 
                    onChangeText={ (newWeight) => setWeight (newWeight)}/>
            </View>
            {/* แถวที่ 2 */}
            <View style = {{ backgroundColor: "white" , padding: 20 , marginVertical: 10, borderRadius: 10, height: 150, justifyContent: "space-around"}}>
                <Text style={{ fontSize : 20}}>Height (cm.)</Text>  
                <TextInput 
                    value = {height}
                    style = {{fontSize: 20}}
                    placeholder="Input your Height..." 
                    keyboardType="numeric" 
                    onChangeText={ (newHeight) => setHeight (newHeight)}/>
            </View>
            {/* แถวที่ 3 */}
            <View style = {{flexDirection: "row" , marginVertical: 10}}>
                <View style = {{flex: 1  , backgroundColor: 'white', borderRadius: 10, height: 100, justifyContent: "center" , alignItems: "center", marginRight: 10}}>
                    <Text style={{ fontSize : 20}}>{ bmi }</Text> 
                </View>
                <View style = {{flex: 1  , backgroundColor: 'white', borderRadius: 10, height: 100, justifyContent: "center" , alignItems: "center", marginLeft: 10}}>
                    <Text style={{ fontSize : 20}}>{ body }</Text> 
                </View>
            </View>
            {/* แถวที่ 4 */}
            <TouchableOpacity onPress={onPressButton}>
                <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>


        </View>
    );
}
