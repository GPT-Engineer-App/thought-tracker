import { Box, Heading, Text } from '@chakra-ui/react';

const About = () => (
  <Box p={4}>
    <Heading as="h1" size="xl" mb={4}>About NoteApp</Heading>
    <Text fontSize="lg">NoteApp is a simple and efficient tool for taking and managing notes.</Text>
  </Box>
);

export default About;