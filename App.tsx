import './global.css';

import { NavigationContainer } from '@react-navigation/native';

// Stacks

import { AuthStack } from '@/Stacks/Stacks';
import { AppStack } from '@/Stacks/Stacks';

export default function App() {

  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  );
}
