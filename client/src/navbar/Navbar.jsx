import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import useAuthStore from "../store/useauthstore"; // adjust path

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const logout = useAuthStore((state) => state.logout);

  return (
    <Container maxW={{ base: "100%", lg: "1140px" }} px={4}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
        >
          <Link to="/" className="normal-case">Shopify</Link>
        </Text>

        <HStack spacing={2} alignItems="center">
          <Link to="/create">
            <Button>
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
          </Button>
          <Button onClick={logout}>
            <FiLogOut size="18" />
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
