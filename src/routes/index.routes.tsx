import { createStackNavigator } from "@react-navigation/stack";
import { useAuth } from "../context";
import { NavigationContainer } from "@react-navigation/native";
import { TabRoutes } from "./tab.routes";
import Initial from "../view/initial";
import SignIn from "../view/signIn";
import SignUp from "../view/signUp";

const Stack = createStackNavigator();

export default function Routes() {
    const { user } = useAuth();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {user ? (
                    <>
                        <Stack.Screen name="tabViews" component={TabRoutes} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="initial" component={Initial} />
                        <Stack.Screen name="signIn" component={SignIn} />
                        <Stack.Screen name="signUp" component={SignUp} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}