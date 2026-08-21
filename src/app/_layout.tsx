import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{animation: 'slide_from_right'}}>
      <Stack.Screen name='pages/login' options={{ headerShown: false }} />
      <Stack.Screen name='pages/sign-in' options={{headerShown: false}} />
      <Stack.Screen name='index' options={{headerShown: false}} />
      
    </Stack>
  )
}
