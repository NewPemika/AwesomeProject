import React, { useContext, useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { AuthContext } from "../../hooks/AuthContextProvider";
import AuthService from "../../services/AuthService";
import UserTokenStorage from "../../storages/UserTokenStorage";

export default function Profile(){
    const {userToken, setUserToken} = useContext(AuthContext);  
    const [ user, setUser ] = useState(null);

    const onLoad = async ()=> {
        // let u = await AuthService.getUser("Lako2apLCjMNdiH8QnD2O1rrdqqTdmfyocbCpRPF");
        let u = await AuthService.getUser(userToken);
        setUser(u);
    };
    useEffect(() => { onLoad(); }, [userToken]);


    const onLogout = async()=>{
        setUserToken("");
        UserTokenStorage.writeItem("");
    };
    return (
        <View >
            <Text>Profile Page</Text>
            <Text>{ JSON.stringify(user) }</Text>
            <Button title="Logout" onPress={onLogout} />
        </View>
    );
}
