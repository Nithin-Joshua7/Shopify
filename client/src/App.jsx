import { Box, useColorModeValue } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Createpage from "./components/Createpage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import useAuthStore from "./store/useauthstore";
import { Toaster } from "react-hot-toast";

function App() {
  
  const { checkAuth, authUser, isCheckingAuth } = useAuthStore()
  console.log(authUser);
  
  return (
    <Box
      minH="100vh"
      bg={useColorModeValue("gray.100", "gray.900")}
      width="100vw" // Ensure it spans the full viewport width
      overflowX="hidden" // Prevent horizontal overflow
    >
      
      <Routes>
      <Route path='/' element={authUser?<Homepage />:<Navigate to={"/login"}/>} />
      <Route path='/signup' element={!authUser?<SignUpPage />:<Navigate to={'/'}/>} />
      <Route path='/login' element={!authUser?<LoginPage />:<Navigate to={'/'}/>} />
      <Route path="/create" element={<Createpage />} />
      </Routes>
      <Toaster/>
    </Box>
   
  );
}

export default App;