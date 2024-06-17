import { useEffect, useState } from "react";
import "../CSS/index.css";
import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  Link,
  Image,
  Text,
} from "@chakra-ui/react";
import cloudHost from "../assets/cloudHost.png";
import gameHub from "../assets/gamehub.png";
import palmetto from "../assets/palmetto.png";
import vidly from "../assets/vidly.png";
// new component
const Carousel = () => {
  const data = [
    <Card className="card" border="solid grey">
      <Heading size="lg" textAlign="center">
        {" "}
        Cloud Hosting
      </Heading>
      <Link
        href="https://astonishing-tarsier-b414aa.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p
          style={{
            textAlign: "center",
            marginTop: "3rem",
          }}
        >
          Click to View!
        </p>
      </Link>
      <CardBody className="card-body" paddingLeft={2}>
        <Link
          href="https://astonishing-tarsier-b414aa.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={cloudHost} className="image" />
        </Link>

        <Text padding={5} className="text-limited">
          This was a project which utilized vanilla html/CSS with some
          frameworks for dynamic scrolling as well.
        </Text>
      </CardBody>
    </Card>,

    <Card border="solid grey" className="card">
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
        <Link
          href="https://game-hub-pied-delta.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p
            style={{
              textAlign: "center",
              marginTop: ".3rem",
            }}
          >
            Click to View
          </p>
        </Link>
      </CardHeader>
      <CardBody marginRight={3} className="card-body">
        <Link
          href="https://game-hub-pied-delta.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={gameHub}
            className="image"
            paddingLeft="50px"
            paddingRight="50px"
          />
        </Link>
        <Text paddingTop={3} className="text-limited">
          {" "}
          This project used React 18, Zustand, JS, TS, Axios, and Chakra-UI to
          create a responsive webpage that calls to rawg API. There is error
          handling, loading skeletons, click events, and multiple filters which
          send requests to the API for data, search bar, cacheing, and utilizes
          pagination.
        </Text>
      </CardBody>
      <Center></Center>
    </Card>,

    <Card border="solid grey" className="card">
      <CardHeader
        style={{
          textAlign: "center",
          paddingBottom: "0",
        }}
      >
        <Heading size="lg" textAlign="center">
          {" "}
          Palmetto Pony
        </Heading>
        <Link
          href="https://www.palmettopony.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p
            style={{
              textAlign: "center",
              marginTop: ".3rem",
            }}
          >
            Click to View
          </p>
        </Link>
      </CardHeader>
      <CardBody marginRight={3} className="card-body">
        <Link
          href="https://www.palmettopony.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={palmetto}
            className="image"
            paddingLeft="50px"
            paddingRight="50px"
          />
        </Link>
        <Text paddingTop={3} className="text-limited">
          {" "}
          A static site built on a website builder for a drink business.
        </Text>
      </CardBody>
      <Center></Center>
    </Card>,

    <Card border="solid grey" className="card">
      <CardHeader
        style={{
          textAlign: "center",
          paddingBottom: "0",
        }}
      >
        <Heading size="lg" textAlign="center">
          {" "}
          Vidly
        </Heading>
        <Link
          href="https://github.com/hunter-orion/vidly"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p
            style={{
              textAlign: "center",
              marginTop: ".3rem",
            }}
          >
            Click to View
          </p>
        </Link>
      </CardHeader>
      <CardBody marginRight={3} className="card-body">
        <Link
          href="https://github.com/hunter-orion/vidly"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={vidly}
            className="image"
            paddingLeft="50px"
            paddingRight="50px"
          />
        </Link>
        <Text paddingTop={3} className="text-limited">
          {" "}
          Vidly is a streaming rental API custom-built using JavaScript built
          using Node JS for backend, supported by middleware and deployed on
          MongoDB. With dependencies such as Joi for validation, Winston for
          catching errors, Bcrypt to protect passwords, JSON web tokens to
          validate users. It was unit and integration tested with Jest to
          support refactoring.{" "}
        </Text>
      </CardBody>
      <Center></Center>
    </Card>,
  ];
  const [CarouselIndex, setCarouselIndex] = useState(0);

  const CarouselHandler = () => {
    if (CarouselIndex === data.length - 1) {
      return setCarouselIndex(0);
    }
    return setCarouselIndex(CarouselIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      CarouselHandler();
    }, 30000000);
    return () => clearInterval(interval);
  });
  const prevHandler = () => {
    if (CarouselIndex === 0) {
      setCarouselIndex(data.length - 1);
    } else {
      setCarouselIndex((prev) => prev - 1);
    }
  };
  const nextHandler = () => {
    if (CarouselIndex === data.length - 1) {
      setCarouselIndex(0);
    } else {
      setCarouselIndex((prev) => prev + 1);
    }
  };

  const cirHandler = (i: number) => {
    setCarouselIndex(i);
  };

  return (
    <>
      <Center>
        <Heading paddingTop={20}>My Projects</Heading>
      </Center>
      <div className="container">
        {data.map((item, index) => {
          return (
            <>
              <h1
                className="each-item"
                key={index}
                style={{ transform: `translate(-${CarouselIndex * 100}%)` }}
              >
                {item}
              </h1>
            </>
          );
        })}
      </div>
      <div className="cir-container">
        {data.map((_, index) => {
          return (
            <span
              key={index}
              className={CarouselIndex === index ? "active cir" : "cir"}
              onClick={() => cirHandler(index)}
            ></span>
          );
        })}
      </div>
      <div className="btn">
        <button onClick={() => prevHandler()}>prev</button>
        <button onClick={() => nextHandler()}>next</button>
      </div>
    </>
  );
};

export default Carousel;
