import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { Navigator } from "./src/navigation/Navigator";
import { Offline } from "./src/components/Offline";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Offline />
      <Navigator />
    </QueryClientProvider>
  );
};

// let AppEntryPoint = App;

// AppEntryPoint = require("./.storybook").default;

// export default AppEntryPoint;

export default App;
// export { default } from "./.storybook";
