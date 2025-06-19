import { View, Text, Button } from 'react-native';
import { useAuth } from '@clerk/clerk-expo';

export default function Home() {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Smart Planner Home</Text>
      <Button title="Sign Out" onPress={() => signOut()} />
    </View>
  );
}
