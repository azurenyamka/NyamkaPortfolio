import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Develope } from "./AllSvgs";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";

import Html from "./skills/html";
import Css from "./skills/css";
import Js from "./skills/js";
import Sass from "./skills/sass";
import Mui from "./skills/mui";
import Tailwind from "./skills/tailwind";
import Next from "./skills/next";
import MongoDB from "./skills/mongo";
import TypeScript from "./skills/typescript";
import Express from "./skills/express";
import MySQL from "./skills/mqsql";
import Bootstrap from "./skills/bootstrap";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 80vw;
  height: 70%;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  //   justify-content: space-between;
  gap: 10px;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  // overflow-y: scroll;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const animations = [
  {
    icon: <Html />,
    name: "HTML",
  },
  {
    icon: <Css />,
    name: "CSS",
  },
  {
    icon: <Js />,
    name: "JS",
  },
  {
    icon: <Sass />,
    name: "SASS",
  },
  {
    icon: <Mui />,
    name: "MUI",
  },
  {
    icon: <Tailwind />,
    name: "Tailwind",
  },
  {
    icon: <Bootstrap />,
    name: "Bootstrap",
  },
  {
    icon: <Next />,
    name: "NextJs",
  },
  {
    icon: <MongoDB />,
    name: "MongoDB",
  },
  {
    icon: <MySQL />,
    name: "MySQL",
  },
  {
    icon: <TypeScript />,
    name: "TypeScript",
  },
  // {
  //   icon: <React />,
  //   name: "React",
  // },
  {
    icon: <Express />,
    name: "Express",
  },
];

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />

        <Main>
          <Title>
            <Develope width={40} height={40} /> Full-stack Developer
          </Title>
          <Description>
            I value business or brand for which i'm creating, this i enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, Github, Codepen etc.</p>
          </Description>
          <Description>
            <strong>Skills</strong>

            <div
              style={{
                width: "100%",
                marginTop: "80px",
                marginBottom: "80px",
                display: "flex",
                flexWrap: "wrap",
                gap: "40px",
                overflowY: "scroll",
              }}
            >
              {animations.map((img, idx) => (
                <motion.div
                  initial={{ y: -1, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 * idx, duration: 0.5 }}
                  key={idx}
                  style={{
                    width: "100px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "4px",
                    backgroundColor: "transparent",

                    transition: "2s",
                    padding: "5px",
                    borderRadius: "10px",
                  }}
                >
                  {img.icon}
                  <p
                    style={{ textAlign: "center", margin: 0, fontSize: "18px" }}
                  >
                    {img.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
