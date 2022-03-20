import type { NextPage } from "next";
import Head from "next/head";
import CodeBlock from "./components/CodeBlock";
import HeaderSection from "./components/sections/HeaderSection";
import TechnologySection from "./components/sections/TechnologySection";
import ProjectSection from "./components/sections/ProjectSection";
import ArchitectureSection from "./components/sections/ArchitectureSection";
import FooterSection from "./components/sections/FooterSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vaggelis Diatsigkos - Portfolio</title>
        <meta name="description" content="Welcome to my personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto p-4 font-mono">
        <CodeBlock elementName="html">
          <CodeBlock elementName="body">
            <CodeBlock elementName="header">
              <HeaderSection />
            </CodeBlock>
            <CodeBlock elementName="main">
              <CodeBlock elementName="section">
                <ProjectSection />
              </CodeBlock>
              <CodeBlock elementName="section">
                <TechnologySection />
              </CodeBlock>
              <CodeBlock elementName="section">
                <ArchitectureSection />
              </CodeBlock>
            </CodeBlock>
            <CodeBlock elementName="footer">
              <FooterSection />
            </CodeBlock>
          </CodeBlock>
        </CodeBlock>
      </div>
    </>
  );
};

export default Home;
