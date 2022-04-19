import React from "react";
import {
    Image
} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Home,Save,Plus} from '../screens';
import {icons,COLORS} from '../constants';
 
const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
        height: "10%",
        backgroundColor: COLORS.white
    }
}

const Tabs = () => {
    return (
        <Tab.Navigator
        tabBarOptions={tabOptions}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
                const tintColor = focused ? COLORS.secondary : COLORS.gray2;

                switch (route.name) {
                    case "Home":
                        return (
                            <Image
                                source={icons.main_icon}
                                resizeMode="contain"
                                style={{
                                    tintColor: tintColor,
                                    width: 35,
                                    height: 35
                                }}
                            />
                        )

                    case "Plus":
                        return (
                            <Image
                                source={icons.plus_icon}
                                resizeMode="contain"
                                style={{
                                    tintColor: tintColor,
                                    width: 40,
                                    height: 40,
                                }}
                            />
                        )

                    case "Save":
                        return (
                            <Image
                                source={icons.bookmark_icon}
                                resizeMode="contain"
                                style={{
                                    tintColor: tintColor,
                                    width: 35,
                                    height: 35
                                }}
                            />
                        )

                  
                }
            }
        })}
        >
             <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown:false
                }}
            />
            <Tab.Screen
                name="Plus"
                component={Plus}
                options={{
                    headerShown:false
                }}
            />
            <Tab.Screen
                name="Save"
                component={Save}
                options={{
                    headerShown:false
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;