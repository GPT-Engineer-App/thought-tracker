import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex, Link, useColorModeValue } from '@chakra-ui/react';
import Index from "./pages/Index.jsx";

function App() {
  const Navbar = () => {
    const bgColor = useColorModeValue('gray.100', 'gray.900');
    return (
      <Box bg={bgColor} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Link href="/" px={2}>Home</Link>
            <Link href="/about" px={2}>About</Link>
            <Link href="/contact" px={2}>Contact</Link>
          </Box>
        </Flex>
      </Box>
    );
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;