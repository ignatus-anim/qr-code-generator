import { ChakraProvider, Box, useColorMode, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import Hero from './components/Hero';
import QRGenerator from './components/QRGenerator';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#1A202C' : '#F7FAFC',
      },
    }),
  },
  fonts: {
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'blue',
      },
    },
    Input: {
      variants: {
        filled: {
          field: {
            _focus: {
              borderColor: 'blue.500',
            },
          },
        },
      },
    },
    Tabs: {
      variants: {
        'soft-rounded': {
          tab: {
            _selected: {
              color: 'blue.800',
            },
          },
        },
      },
    },
  },
});

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      position="fixed"
      top={4}
      right={4}
      icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
      onClick={toggleColorMode}
      aria-label="Toggle color mode"
      size="md"
      variant="ghost"
    />
  );
};

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh">
        <ColorModeToggle />
        <Hero />
        <QRGenerator />
      </Box>
    </ChakraProvider>
  );
}

export default App;
