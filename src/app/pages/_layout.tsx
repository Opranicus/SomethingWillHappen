import { Tabs } from 'expo-router';

export default function TabLayout(){
    return(
        <Tabs>
            <Tabs.Screen name='homepage' options={{title: 'Home', headerShown: false}} />
            <Tabs.Screen name='about' options={{title: 'About', headerShown: false}} />
        </Tabs>
    )
}