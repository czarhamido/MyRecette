import React from "react";
import {
    View,Text,ImageBackground,Image,FlatList,SafeAreaView,TouchableOpacity,StyleSheet,ScrollView
}from 'react-native';
 
import {COLORS,SIZES,icons,images,FONTS} from '../constants';


function Food ({ navigation }){

    const dessert1 ={
        id:1,
        name:'dessert1',
        time:'15 min',
        coverfood:images.dessert1,
    } 
    const dessert2 ={
        id:5,
        name:'dessert2',
        time:'10 min',
        coverfood:images.dessert2,
    } 
    const drink1 ={
        id:2,
        name:'drink1',
        time:'15 min',
        coverfood:images.drink1,
    }
    const drink2 ={
        id:6,
        name:'drink2',
        time:'20 min',
        coverfood:images.drink2,
    }
    const pizza1 ={
        id:3,
        name:'pizza1',
        time:'25 min',
        coverfood:images.pizza1,
    }

    const pizza2 ={
        id:4,
        name:'pizza2',
        time:'35 min',
        coverfood:images.pizza2,
    }




    const categoriesData =[
        {
            id:1,
            categorieName:'Popular',
            food:[
                pizza2,dessert1,drink1,pizza1,dessert2,drink2
            ]
        },
        {
            id:2,
            categorieName:'Pizza',
            food:[
                pizza1,pizza2
            ]
        },
        {
            id:3,
            categorieName:'Drinks',
            food:[
                drink1,drink2
            ]
        },
        {
            id:4,
            categorieName:'Dessert',
            food:[
                dessert1,dessert2
            ]
        }
    ]

    const [Activeindex,setActiveindex]=React.useState(0);
    const [Categories,setCategorie]=React.useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = React.useState(1);

    var food =[]
    let selectedCategorieFood=Categories.filter(a=> a.id == selectedCategory);
    if (selectedCategorieFood.length>0)
    food=selectedCategorieFood[0].food;
    const renderRecipes =({item}) => {
        return (
            <TouchableOpacity style={{ 
            justifyContent:'center',
            alignContent:'center',
            alignItems:'center',          
            }}
            onPress={() => navigation.navigate('FoodDetail',{food:item})}
            >
                <ImageBackground
                source={item.coverfood}
                style={{
                    width:140,
                    height:160,
                    borderRadius:SIZES.radius+5,
                    margin:SIZES.base,
                }}
                
                >
                        <View style={{backgroundColor:'#00000094',width:'50%',margin:5,borderRadius:SIZES.radius,
                        flexDirection:'row',
                        justifyContent:'center',
                        alignContent:'center',
                        alignItems:'center',
                        
                        }}>
                            <Image
                            source={icons.clock_icon}
                            style={{
                                width:15,
                                height:15,
                                tintColor:COLORS.white,
                                
                            }}
                            />
                            <Text style={{ fontSize:10, margin:5, color:COLORS.white,}}>{item.time}</Text>
                        </View>
                </ImageBackground>
                <Text style={{...FONTS.body2}}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={{flex:1}}>
        <View style={{
            margin:10,
            justifyContent:'center',
            alignContent:'center',
            alignItems:'center',
            flexDirection:'row'

        }}>
            <View style={{
                marginRight:24,
            }}>
            <TouchableOpacity 
            onPress={()=>{setActiveindex(0);setSelectedCategory(1);}}
            style={Activeindex ===0 ? Style.btnActive :Style.btnNonActive}
            
            >
                <Image 
                    source={icons.trending_icon}
                    resizeMode='contain'
                    style={Style.IconBtn}
                />
            </TouchableOpacity>
            <Text style={Activeindex ===0 ? Style.textActive :Style.textNonActive}>Popular</Text>       
            </View>

            <View style={{
                marginRight:24
            }}>
            <TouchableOpacity 
            onPress={()=>{setActiveindex(1);setSelectedCategory(2);}}
            style={Activeindex ===1 ? Style.btnActive :Style.btnNonActive}
            >
                <Image 
                    source={icons.pizza_icon}
                    resizeMode='contain'
                    style={Style.IconBtn}
                />
            </TouchableOpacity>
           
            <Text style={Activeindex ===1 ? Style.textActive :Style.textNonActive}>Pizza</Text>
            </View>

            <View style={{
                marginRight:24
            }}>
            <TouchableOpacity 
            onPress={()=>{setActiveindex(2);setSelectedCategory(4);}}
            style={Activeindex ===2 ? Style.btnActive :Style.btnNonActive}
            
            >
                <Image 
                    source={icons.dessert_icon}
                    resizeMode='contain'
                    style={Style.IconBtn}
                />
            </TouchableOpacity>
            <Text style={Activeindex ===2? Style.textActive :Style.textNonActive}>Dessert</Text>          
              </View>

            <View style={{
                marginRight:5
            }}>
            <TouchableOpacity 
         onPress={()=>{setActiveindex(3);setSelectedCategory(3);}}
         style={Activeindex ===3 ? Style.btnActive :Style.btnNonActive}
            
            >
                <Image 
                    source={icons.drinks_icon}
                    resizeMode='contain'
                    style={Style.IconBtn}
                />
            </TouchableOpacity>
            <Text style={Activeindex ===3 ? Style.textActive :Style.textNonActive}>Drinks</Text>
            </View>
        </View>
        <View style={{
        paddingHorizontal:SIZES.padding,
        }}>
            <Text style={{...FONTS.h2,marginBottom:5}}>{selectedCategorieFood[0].categorieName} Recipes</Text>
            <FlatList
                data={food}
                renderItem={renderRecipes}
                keyExtractor={item => `${item.id}`}    
                numColumns={2}
                />
        </View>
        </SafeAreaView>
    );
}

export default Food;

const Style =StyleSheet.create ({
    btnActive:{
        backgroundColor:COLORS.secondary,
        width:60,
        height:65,
        borderRadius:SIZES.radius,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
    },
    btnNonActive:{
        backgroundColor:COLORS.gray1,
        width:60,
        height:65,
        borderRadius:SIZES.radius,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
    },
    textActive:{
        ...FONTS.body3,
        textAlign:'center'
    },
    textNonActive:{
        ...FONTS.body3,
        color:COLORS.gray3,
        textAlign:'center'
    },
    IconBtn:{
        width:'65%',
        height:'65%',
        margin:5
    }
});