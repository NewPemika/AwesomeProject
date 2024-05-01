import React from "react";
import { FontAwesome } from "@expo/vector-icons";


import { Image,Button, ScrollView, View } from "react-native";
import { Avatar, Card, Divider, Icon, IconButton, RadioButton, Text } from "react-native-paper";
import MyIcon from "../../components/week3/MyIcon";


export default function PaperQuiz(){
    return(
        <ScrollView style={{ paddingVertical: 25, flex: 1 }}>
      <Card>
        <Card.Cover style={{ borderRadius : 0}} source={require('../../assets/week3/room-6.jpg')} />
      </Card>
    
{/* section2 */}
   
    <Card >
        <Card.Content style = {{flex: 1, marginTop: -50, marginHorizontal: 40, padding: 10, backgroundColor: '#F5F5F5', borderRadius: 20, height: 150, alignItems: 'center'}}>
            <Text variant="titleLarge">Hilton San Francisco</Text>
            <Card.Content style ={{flexDirection: 'row'}}>
                <FontAwesome name="star" size={20} color="orange" />
                <FontAwesome name="star" size={20} color="orange" />
                <FontAwesome name="star" size={20} color="orange" />
                <FontAwesome name="star" size={20} color="orange" />
                <FontAwesome name="star-half" size={20} color="orange" />
            </Card.Content>
            <Text variant="bodyMedium">Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
        </Card.Content>
    </Card>
    <Divider style={{ marginVertical : 10 }} />

{/* section3 */}
    <Card.Content>
        <Card.Content style = {{ flexDirection: 'row', marginTop: 10 , justifyContent: 'flex-start'}}>
            <Card.Content style = {{borderRadius: 50/2, height: 50, width: 50, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
                <Text variant="bodySmall" color = 'white'>9.5</Text>
            </Card.Content>
            <Card.Content style = {{marginLeft: 10 , borderRadius: 0}}>
                <Text variant="bodyMedium" color = 'red'>Excellent</Text>
                <Text variant="bodySmall">See 801 reviews</Text>
            </Card.Content>
        </Card.Content>  
    </Card.Content>
    
{/* section4 */} 
    <Card style = {{borderTopWidth: 1, borderBottomWidth: 1 , padding: 10 , marginTop: 10}}> 
            <Text style={{ fontSize : 17 , fontWeight: 'bold'}}>Hotel Description</Text>
            <Text style={{ fontSize : 15 }}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
    </Card>
    
{/* Section5 */}
    <Card.Content style = {{flexDirection: 'row' ,  marginTop: 10}}>
            <MyIcon title="wifi" name="wifi" size={30} color="lightblue" />
            <MyIcon title="coffee" name="coffee" size={30} color="lightblue" />
            <MyIcon title="bath" name="bath" size={30} color="lightblue" />
            <MyIcon title="car" name="car" size={30} color="lightblue" />
            <MyIcon title="paw" name="paw" size={30} color="lightblue" />
    </Card.Content>

{/* Section6 */}
    <Card.Content style = {{flexDirection: 'column', borderTopWidth: 1, borderBottomWidth: 1 , padding: 10 , marginTop: 10}}>
        <Text style={{ fontSize : 15 , fontWeight: 'bold'}}>Location</Text>            
        <Text style={{ fontSize : 10 , color: 'grey'}}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
        <Card style = {{alignItems: 'center'}}>
            <Card.Cover  source={require('../../assets/week3/map.jpg')} />
        </Card>
    </Card.Content>

{/* Section7 */}
    <Card style = {{marginTop: 10 , borderBottomWidth: 1, padding: 10}}>
        <Card.Content>
            <Text style={{ fontSize : 15 , fontWeight: 'bold'}}>Room Type</Text>            
        </Card.Content>
        <Card.Content style = {{flexDirection: 'row', marginTop: 10}}>
            <Card>
                <Card.Cover style={{ borderRadius: 15 , width: 150 , height:175 }} source={require("../../assets/week3/room-8.jpg")}></Card.Cover> 
            </Card>
            <View style = {{marginLeft: 10 }}>
                <Text style={{ fontSize : 18 , fontWeight: 'bold', padding: 10}}>Standard Twin Room</Text>
                <Text style={{ fontSize : 20 , color: 'orange', paddingTop: 70}}>$399.99</Text> 
                <Text style={{ fontSize : 15 , color: 'lightblue'}}>Hurry Up! This is your last room!</Text>     
            </View>
        </Card.Content>
    </Card>
{/* Section8 */}
    <Card style = {{flexDirection: 'row' , justifyContent: 'space-between', padding: 5 }}>
        <Card.Content>
            <Text style={{ fontSize : 15}}>Price</Text> 
            <Text style={{ fontSize : 20 , color: 'orange'}}>$399.99</Text> 
            <Text style={{ fontSize : 15}}>AVG/Night</Text>  
            <Card.Actions style = {{width: 100 , alignItems: 'flex-end' }}>
                <Button title = 'Book Now' color= 'red' />
            </Card.Actions>  
        </Card.Content>
            
            
    </Card>

    </ScrollView>
    )
}