import React from 'react';
import {View,TextInput,Text,Image} from 'react-native';
import {COLORS,icons,SIZES} from '../constants';


const Searchbar = () => {
    return (
                <View>
                    <View style={{
                         flexDirection: "row",
                         backgroundColor: COLORS.gray1,
                         height: 40,
                         marginTop: 25,
                         marginRight: 10,
                         marginLeft: 10,       
                         borderRadius: 15,
                    }}>
                      <View style={{
                          justifyContent: 'center',
                          alignContent: 'center',
                          justifyContent:'center'
                      }}>
                        <Image
                            source={icons.search_icon}
                            style={{
                                height:20,
                                width:20,
                                tintColor:COLORS.gray2,
                                marginLeft:5
                            }}
                        />
                        </View>
                        <View style={{width:'90%',}}>
                        <TextInput 
                        style={{
                            margin:5,
                            paddingLeft:5,
                            height:'84%',

                        }} 
                        placeholder='Search any recipe'
                        />
                        </View>
                    </View>
                </View>
    )
}

export default Searchbar;