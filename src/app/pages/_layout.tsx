import Ionicons from '@react-native-vector-icons/ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout(){
    return(
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#03c1f5',
            tabBarInactiveTintColor: '#fff',
            headerShadowVisible: false,
            headerTintColor: '#fff',
            tabBarStyle: {
                backgroundColor: '#080808',
            },
        }}>
            <Tabs.Screen 
                name='homepage' 
                options={{
                    title: 'Home', 
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    )
                }} />

            <Tabs.Screen 
                name='about' 
                options={{
                    title: 'About', 
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
                    )
                }} />
        </Tabs>
    )
}