import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { HeaderSnippet } from "../../../core/snippets";
import { InfoData, SkillData } from "../../../core/data";
import { ISkill } from "../../../core/models";

const HeaderSection = () => {
  return (
    <div className="py-8 relative">
      <HeaderSectionHero />

      <div className="mt-12">
        <div className="grid grid-cols-1 lg:grid-rows-6 lg:grid-flow-col gap-4 sm:gap-6">
          <div className="lg:row-span-2">
            <HeaderSectionInfoCard />
          </div>

          {SkillData.map((skill, key) => (
            <div key={key} className="col-span-1 lg:row-span-1">
              <HeaderSectionSkillCard skill={skill} />
            </div>
          ))}

          <div className="lg:row-span-6">
            <HeaderSectionCodeCard />
          </div>
        </div>
      </div>
    </div>
  );
};

const HeaderSectionBackground = () => {
  return (
    <>
      <div className="absolute top-10 -bottom-96 left-0 w-1/3 h-full bg-pink-300 rounded-3xl filter scale-105 blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute top-10 -bottom-96 left-1/3 w-1/3 h-full bg-yellow-300 rounded-3xl filter scale-105 blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute top-10 -bottom-96 left-2/3 w-1/3 h-full bg-green-300 rounded-3xl filter scale-105 blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
    </>
  )
};

const HeaderSectionHero = () => {
  return (
    <div className="text-center lg:text-left">

      <h1 className="text-6xl md:text-7xl lg:text-9xl font-extrabold text-white relative">
        <HeaderSectionBackground />
        <div>vaggelis</div>
        <div>diatsigkos</div>
      </h1>
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold mt-6 text-indigo-400">
        <i className="fad fa-comet text-purple-400"></i>
        <span className="text-yellow-400">.SOLUTION</span>
        <span className="text-green-400">.ARCHITECT</span>
      </h2>
    </div>
  );
};

const HeaderSectionSkillCard: React.FC<{ skill: ISkill }> = ({ skill }) => {
  return (
    <div className="shadow rounded h-full bg-gray-800">
      <div className="flex flex-col items-stretch justify-between h-full">
        <span className="flex-grow p-4 xl:p-6 flex items-center justify-between">
          <span className="flex-grow text-sm xl:text-base text-gray-200">
            {skill.skill}
          </span>
          <span className="text-lg italic">
            {skill.percentage}
            <small className="text-sm text-gray-500">/100</small>
          </span>
        </span>
        <span
          className={"h-[2px] rounded-b " + skill.color}
          style={{
            width: skill.percentage + "%",
          }}
        ></span>
      </div>
    </div>
  );
};

const HeaderSectionInfoCard = () => {
  const infoData = JSON.stringify(InfoData, null, 4);
  return (
    <div className="text-sm rounded shadow h-full bg-gradient-to-br from-gray-700 via-gray-800 to-gray-800">
      <div className="font-light italic px-4 pt-4 text-xs text-gray-400">
        <i className="fal fa-code"></i> me.json
      </div>
      <div className="text-xs xl:text-sm">
        <SyntaxHighlighter
          language="json"
          showLineNumbers={true}
          wrapLines={true}
          style={nightOwl}
          customStyle={{
            backgroundColor: "transparent",
            borderRadius: "12px",
            padding: "12px",
          }}
        >
          {infoData}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

const HeaderSectionCodeCard = () => {
  return (
    <div className="text-sm rounded shadow h-full bg-gradient-to-br from-gray-800 via-[#0b101a] to-[#0b101a]">
      <div className="font-light italic px-4 pt-4 text-xs text-gray-400">
        <i className="fal fa-code"></i> GetProjectsQuery.cs
      </div>
      <div className="text-xs xl:text-sm">
        <SyntaxHighlighter
          language="csharp"
          showLineNumbers={true}
          wrapLines={true}
          style={nightOwl}
          customStyle={{
            backgroundColor: "transparent",
            borderRadius: "16px",
            padding: "16px",
          }}
        >
          {HeaderSnippet}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default HeaderSection;
