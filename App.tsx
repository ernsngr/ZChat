import './global.css';

import { NavigationContainer } from '@react-navigation/native';

// Stacks

import { AuthStack } from '@/Stacks/Stacks';
import { AppStack } from '@/Stacks/Stacks';

import { useAuthStore } from '@/store/authStore';
import { useEffect } from 'react';

export default function App() {

  const {user} = useAuthStore();

  return (
    <NavigationContainer>
      {user ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>
  );
}
