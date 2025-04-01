import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Createpage from "./components/Createpage";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <Box
      minH="100vh"
      bg={useColorModeValue("gray.100", "gray.900")}
      width="100vw" // Ensure it spans the full viewport width
      overflowX="hidden" // Prevent horizontal overflow
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Createpage />} />
      </Routes>
    </Box>
  );
}

export default App;