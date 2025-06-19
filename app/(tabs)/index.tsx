// app/index.tsx
import { useRouter, useNavigationContainerRef } from 'expo-router';
import { useEffect, useRef } from 'react';
import { AppState } from 'react-native';

export default function Index() {
  const router = useRouter();
  const isMounted = useRef(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isMounted.current) {
        router.replace('/splash');
      }
    }, 100); // short delay to allow layout to mount

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return null;
}
