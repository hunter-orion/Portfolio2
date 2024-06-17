import {
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Image,
  Center,
  VStack,
  Link,
  Text,
  Box,
} from "@chakra-ui/react";
import cloudHost from "../assets/cloudHost.png";
import gameHub from "../assets/gamehub.png";
import AOS from "aos";

AOS.init();

const MyPortfolio = () => {
  return (
    <>
      <Box
        id="projects"
        marginLeft={2}
        marginRight={5}
        marginTop={60}
        height="auto"
        overflow="hidden"
      >
        <Heading textAlign="center">Projects</Heading>

        <Center display="flex" justifyContent="center" alignItems="center">
          <VStack align="center">
            <SimpleGrid
              spacing={4}
              marginX={3}
              marginY={39}
              templateColumns={[
                "repeat(auto-fill, minmax(300px, 1fr))",
                "repeat(auto-fill, minmax(500px, 1fr))",
              ]}
              width="100%"
            >
              <Card border="solid grey" data-aos="fade-right">
                <CardHeader
                  style={{
                    textAlign: "center",
                    paddingBottom: "0",
                  }}
                >
                  <Heading size="lg" textAlign="center">
                    {" "}
                    Cloud Hosting
                  </Heading>
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "3rem",
                    }}
                  >
                    Click to View
                  </p>
                </CardHeader>
                <CardBody paddingLeft={2}>
                  <Link
                    href="https://astonishing-tarsier-b414aa.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={cloudHost} />
                  </Link>

                  <Text padding={5}>
                    This was a project which utilized vanilla html/CSS with some
                    frameworks for dynamic scrolling.
                  </Text>
                </CardBody>
                <Center>
                  <CardFooter></CardFooter>
                </Center>
              </Card>

              <Card border="solid grey" data-aos="fade-left">
                <CardHeader
                  style={{
                    textAlign: "center",
                    paddingBottom: "0",
                  }}
                >
                  <Heading size="lg" textAlign="center">
                    {" "}
                    Game Hub
                  </Heading>
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "3rem",
                    }}
                  >
                    Click to View
                  </p>
                </CardHeader>
                <CardBody marginRight={3}>
                  <Link
                    href="https://game-hub-pied-delta.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={gameHub} />
                  </Link>
                  <Text padding={3}>
                    {" "}
                    This project used React 18, Zustand, JS, TS, Axios, and
                    Chakra-UI to create a responsive webpage that calls to rawg
                    API. There is error handling, loading skeletons, click
                    events, and multiple filters which send requests to the API
                    for data, search bar, cacheing, and utilizes pagination.
                  </Text>
                </CardBody>
                <Center>
                  <CardFooter></CardFooter>
                </Center>
              </Card>
            </SimpleGrid>
          </VStack>
        </Center>
      </Box>
    </>
  );
};

export default MyPortfolio;
