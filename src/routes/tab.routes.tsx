import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "../view/home";
import Tops from "../view/tops";
import Plus from "../view/plus";
import Categories from "../view/categories";
import Profile from "../view/profile";

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#FE724C",
                tabBarInactiveTintColor: "#D3D1D8",
            })}
        >
            <Tab.Screen
                name='home'
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name='compass' color={color} size={30} />
                }}
            />

            <Tab.Screen
                name='tops'
                component={Tops}
                options={{
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name='map-marker' color={color} size={30} />
                }}
            />

            <Tab.Screen
                name="plus"
                component={Plus}
                options={{
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name='map-marker' color={color} size={30} />
                }}
            />

            <Tab.Screen
                name="categories"
                component={Categories}
                options={{
                    tabBarIcon: ({ color, size }) => <FontAwesome name='heart' color={color} size={size} />
                }}
            />

            <Tab.Screen
                name='profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name='bell' color={color} size={30} />
                }}
            />


        </Tab.Navigator>
    );
};