// app/splash.tsx
import { useEffect } from 'react';
import { Text, View, StyleSheet, Animated, Easing } from 'react-native';
import { useRouter } from 'expo-router';

const Splash = () => {
  const router = useRouter();
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    const timeout = setTimeout(() => {
      router.replace('/signin'); // Redirect to sign-in page
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.title}>🪄 Smart Daily Planner</Text>
      <Text style={styles.subtitle}>Organize smarter. Live better.</Text>
    </Animated.View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F172A', // Nice dark background
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#38BDF8',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#CBD5E1',
  },
});
