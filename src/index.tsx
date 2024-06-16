import { FC, PropsWithChildren } from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import { theme } from './theme/theme';
import { CustomButton } from './components/CustomButton';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export { theme, ThemeProvider, CustomButton };
