import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/navbar";
import { AboutMe } from "./components/AboutMe";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Carousel from "./components/Carousel";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"nav" "main"`,
      }}
    >
      <Show above="lg">
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <AboutMe />
        <Carousel />
        <Skills />
        <ContactMe />
      </GridItem>
    </Grid>
  );
}

export default App;
