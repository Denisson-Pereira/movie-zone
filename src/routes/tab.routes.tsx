import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, FontAwesome5, Octicons } from "@expo/vector-icons";
import Home from "../view/home";
import Profile from "../view/profile";
import Search from "../view/search";

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
                    tabBarIcon: ({ color }) => <Octicons name='home' color={color} size={30} />
                }}
            />

            <Tab.Screen
                name='search'
                component={Search}
                options={{
                    tabBarIcon: ({ color }) => <AntDesign name='search1' color={color} size={30} />
                }}
            />


            <Tab.Screen
                name='profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome5 name='user' color={color} size={30} />
                }}
            />


        </Tab.Navigator>
    );
};