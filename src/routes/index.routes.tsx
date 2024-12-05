import { createStackNavigator } from "@react-navigation/stack";
import { useAuth } from "../context";
import { NavigationContainer } from "@react-navigation/native";
import { TabRoutes } from "./tab.routes";
import Initial from '../screens/Initial';
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import MovieDetails from "../screens/MovieDetails";

const Stack = createStackNavigator();

export default function Routes() {
    const { user } = useAuth();
    console.log(user);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {user && user !== null || user && user !== undefined ?  (
                    <>
                        <Stack.Screen name="tabViews" component={TabRoutes} />
                        <Stack.Screen name="movieDetails" component={MovieDetails} />
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