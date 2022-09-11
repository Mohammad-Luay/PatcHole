import { View, Text, Button, Image, TouchableOpacity, PermissionsAndroid, ScrollView, TextInput, RefreshControl } from 'react-native';
import * as React from 'react';


const Welcome = ({navigation}) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#1343d4" }}>
            <Text style={{fontSize:30,marginTop:'50%',marginLeft:"2%"}}>Hi, Welcome to pothole app </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ marginLeft: '30%', borderWidth: 0,width:'27%' }}>
                <Text style={{ color: 'red',fontSize:30,marginLeft:'40%' }}>Next</Text>
            </TouchableOpacity>
        </View >
    )
}
export default Welcome