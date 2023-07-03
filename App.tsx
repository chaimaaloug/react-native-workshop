import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Navigator } from './src/navigation/Navigator';
import { Offline } from './src/components/Offline';


const queryClient = new QueryClient()

const App = () => {
  return (
      <QueryClientProvider client={queryClient}>
        <Offline />
        <Navigator/>
      </QueryClientProvider>
  )
};

export default App;
//export { default } from "./.storybook";

