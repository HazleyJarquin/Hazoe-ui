import { FC, PropsWithChildren } from 'react';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import { useDarkMode } from '../src/hooks/useDarkMode';

import { theme } from './theme/theme';
import { CustomButton } from './components/CustomButton';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
};

export { theme, ThemeProvider, CustomButton, useDarkMode };
