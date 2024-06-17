import React from 'react';

// import { ChakraProvider, ThemeProvider } from '@chakra-ui/react';

import { ThemeProvider } from './index';

import '@fontsource/roboto';

import { theme } from './theme/theme';

function App({ children }: { children: any }) {
  return (
    // <ChakraProvider resetCSS={true}>
    <React.StrictMode>
      <ThemeProvider>
        <main>{children}</main>
      </ThemeProvider>
    </React.StrictMode>
    // </ChakraProvider>
  );
}

export default App;
