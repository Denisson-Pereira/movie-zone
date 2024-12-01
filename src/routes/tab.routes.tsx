import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, FontAwesome5, Octicons } from "@expo/vector-icons";
import Home from "../screens/home";
import Profile from "../screens/profile";
import Search from "../screens/search";
import { colors } from "../colors";

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.orange,
                tabBarInactiveTintColor: "#D3D1D8",
                tabBarStyle: {
                    backgroundColor: colors.bg,
                    borderColor: '#ffffff0'
                }
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