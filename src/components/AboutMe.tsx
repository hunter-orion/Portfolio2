import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Image,
  Text,
  Center,
} from "@chakra-ui/react";
import ColorModeButton from "./ColorModeButton";
import avitar from "../assets/avitar.jpg";

export const AboutMe = () => {
  return (
    <Center>
      <Card
        direction={{ base: "row", sm: "row" }}
        overflow="hidden"
        padding={5}
        marginTop={100}
        marginBottom={50}
        marginRight={3}
        border="solid grey"
        scrollBehavior="smooth"
      >
        <Stack>
          <Center>
            <Image
              borderRadius="full"
              objectFit="cover"
              maxW="180px"
              src={avitar}
              alt="Avitar"
            />
          </Center>
          <CardBody>
            <Center>
              <Heading size="xl">About Me</Heading>
            </Center>
            <Center>
              <Text fontSize="1.2rem" py="2">
                I'm a front end developer who loves creating beautiful,
                responsive, and search engine optimized websites.
              </Text>
            </Center>
          </CardBody>

          <CardFooter>
            <ColorModeButton />
          </CardFooter>
        </Stack>
      </Card>
    </Center>
  );
};

export default AboutMe;
