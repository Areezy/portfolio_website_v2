import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Head from "next/head";

const onHandleClick = () => {
  window.open("https://github.com/Areezy", "_blank");
};

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Olamilekan Aremu's Portfolio</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="description"
          content="Olamilekan Aremu's Portfolio Website"
        />
        <meta
          name="title"
          property="og:title"
          content="Olamilekan Aremu's Portfolio Website"
        />
        <meta
          name="description"
          property="og:description"
          content="Olamilekan Aremu's Portfolio Website"
        />
        <meta name="keywords" content="Software Developer, Olamilekan Aremu" />
        <meta name="image" property="og:image" content="/images/og.png" />
        <meta name="author" content="Olamilekan Aremu" />
      </Head>
      <Section grid>
        <Hero handleClick={onHandleClick} />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
