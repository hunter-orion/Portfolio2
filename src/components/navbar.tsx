import {
  Button,
  Flex,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Spacer,
  Text,
} from "@chakra-ui/react";
import logo from "../assets/Hlogo.png";

const NavBar = () => {
  return (
    <HStack
      position="fixed"
      width="100%"
      bg="gray.800"
      color="white"
      paddingY={2}
      zIndex={10}
      overflow="hidden"
    >
      <a href="#">
        <Image src={logo} boxSize="50px" cursor="pointer" />
      </a>
      <Text> Hunter C </Text>

      <Spacer />
      <Flex as="nav">
        <List display="flex" alignItems="center" spacing="">
          <ListItem marginRight="4">
            <Link href="#projects" className="nav-link">
              <Button>Projects</Button>
            </Link>
          </ListItem>
          <Link href="#skills" className="nav-link">
            <ListItem marginRight="4">
              <Button>My Skills</Button>
            </ListItem>
          </Link>
          <ListItem marginRight="4">
            <Link href="#contact-me" className="nav-link">
              {" "}
              <Button>Contact Me</Button>
            </Link>
          </ListItem>
        </List>
      </Flex>
    </HStack>
  );
};

export default NavBar;
