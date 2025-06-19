import { ClerkProvider } from '@clerk/clerk-expo';
import * as SecureStore from 'expo-secure-store';
import { Slot } from 'expo-router';

const tokenCache = {
  async getToken(key: string) {
    return SecureStore.getItemAsync(key);
  },
  async saveToken(key: string, value: string) {
    return SecureStore.setItemAsync(key, value);
  },
};

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey="pk_test_c3RyaWtpbmctam9leS05OS5jbGVyay5hY2NvdW50cy5kZXYk" tokenCache={tokenCache}>
      <Slot />
    </ClerkProvider>
  );
}
