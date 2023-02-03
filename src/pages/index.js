import Head from "next/head";
import Wave1 from "@/components/Wave1";
import Header from "@/components/Header";
import Presentation from "@/components/Presentation";
import AboutText from "@/components/AboutSection";
import Wave2 from "@/components/Wave2";
import TechnologiesSection from "@/components/TechnologiesSection";
import Wave3 from "@/components/Wave3";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main>
      <Head>
        <title> Pedro Rassier ;</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/progIco.ico" />
      </Head>
      <Header />
      <Presentation />
      <Wave1 />
      <AboutText />
      <Wave2 />
      <TechnologiesSection />
      <Wave3 />
      <ProjectsSection />
    </main>
  );
}
