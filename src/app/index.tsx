import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from "react-native";


export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to this practice WebSite!</Text>
      <Button color='#0ae1f4' title="Go to Login Page" onPress={() => router.push('/auth/login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    backgroundColor: '#080808'
  },

  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  }

 
});
