import { useColorMode as useChakraColorMode } from '@chakra-ui/react';

interface UseDarkModeResult {
  colorMode: 'light' | 'dark';
  setColorMode: (value: 'light' | 'dark') => void;
}

export const useDarkMode = (): UseDarkModeResult => {
  const { colorMode, setColorMode } = useChakraColorMode();
  return { colorMode, setColorMode };
};
