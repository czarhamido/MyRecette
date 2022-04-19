import React from "react";
import {View,Text, SafeAreaView,Image,TextInput, ScrollView} from 'react-native';
import {images,COLORS, SIZES,FONTS,icons} from '../constants';
import {Searchbar,Food} from '../componants';
const Home =({navigation})=>{
    const profileData={
        name:'Aycha',
        profilePhoto:images.profil1,
    }


    const [Profile,setProfile]=React.useState(profileData);

    {/**Header */}
    function rnederHeader(profile) {
        return (
            <View>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',
            paddingHorizontal:SIZES.padding,paddingVertical:SIZES.padding,alignItems:'center'}}>
                <View style={{
                    width:35,
                    height:35,
                    borderRadius:SIZES.radius,
                    shadowColor:SIZES.white,
                    shadowOpacity:0.2,
                    shadowOffset:{width:0,height:2},
                    shadowRadius:SIZES.radius
                }}>
                <Image 
                source={profile.profilePhoto}
                style={
                    {
                        width:'100%',
                        height:'100%',
                    }
                }
                />
                </View>
                <View>
                    <Image
                        source={icons.notification_icon}
                        style={{
                            width:30,
                            height:30,
                            tintColor:COLORS.gray2
                        }}
                   />
                </View>
            </View>
                <View style={{flex:1 ,paddingHorizontal:SIZES.padding,marginBottom:SIZES.padding2}}>
                        <Text style={{...FONTS.body2,color:COLORS.gray2,marginBottom:SIZES.base}} >Hello, {profile.name} !</Text>
                        <Text style={{...FONTS.h1,letterSpacing:2}} >Make your own food,</Text>
                </View>
                {/**Search bar componants */}
                <Searchbar />

            </View>
        )
    }


    return (

        <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
            {/* Header */}
            <View>
                {rnederHeader(Profile)}
            </View>
            <ScrollView>
                <Food />
            </ScrollView>

            
        </SafeAreaView>
    );
}

export default Home;