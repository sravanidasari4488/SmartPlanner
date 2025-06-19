// app/signin.tsx
import React, { useEffect } from 'react';
import { View } from 'react-native';
import * as Clerk from '@clerk/clerk-expo';
console.log(Clerk);
import { useAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';

export default function SignInScreen() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.replace('/home');
    }
  }, [isSignedIn]);

  return (
    <View style={{ flex: 1 }}>
      {/* <SignIn /> */}
    </View>
  );
}
