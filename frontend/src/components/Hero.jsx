import { Box, Container, Heading, Text, useColorMode } from '@chakra-ui/react';

const Hero = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Container maxW="container.lg" py={6}>
      <Box textAlign="left">
        <Heading
          as="h1"
          size="xl"
          mb={2}
          color={isDark ? 'white' : 'gray.800'}
          letterSpacing="tight"
          fontWeight="bold"
        >
          QRify
        </Heading>
        <Text
          fontSize="md"
          color={isDark ? 'gray.400' : 'gray.600'}
        >
          Create beautiful QR codes in seconds
        </Text>
      </Box>
    </Container>
  );
};

export default Hero;
