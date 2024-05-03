import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Flex, Link, Box, Text } from '@chakra-ui/react';
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <Router style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Navbar goes here, ensure it has a higher z-index */}
      {/* <Navbar zIndex="20" /> */}
      <Routes style={{ paddingBottom: '4rem' }}>
        <Route exact path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Box as="footer" width="full" p={4} bg="gray.200" textAlign="center" position="fixed" bottom="0" zIndex="10">
        <Text>© 2023 NoteApp. All rights reserved.</Text>
      </Box>
    </Router>
  );
}

export default App;