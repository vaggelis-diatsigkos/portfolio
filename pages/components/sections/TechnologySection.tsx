import { TechnologyData } from "../../../core/data";
import { ITechnology, ITechnologyGroup } from "../../../core/models";
import CodeHeader from "../CodeHeader";

const TechnologySection = () => {
  return (
    <div className="py-8">
      <CodeHeader header="technologies" />

      {TechnologyData.map((group, key) => (
        <TechnologySectionGrid key={key} group={group} />
      ))}
    </div>
  );
};

const TechnologySectionGrid: React.FC<{ group: ITechnologyGroup }> = ({
  group,
}) => {
  return (
    <div className="grid grid-cols-12 gap-4 mt-6 md:mt-12">
      <div className="col-span-12">
        <TechnologySectionCardCategory group={group} />
      </div>
      {group.items.map((technology, key) => (
        <div key={key} className="col-span-6 xl:col-span-4">
          <TechnologySectionCardItem technology={technology} />
        </div>
      ))}
    </div>
  );
};

const TechnologySectionCardCategory: React.FC<{ group: ITechnologyGroup }> = ({
  group,
}) => {
  return (
    <div className="text-gray-900 p-4 shadow rounded text-center lg:text-left bg-gradient-to-br from-yellow-400 to-orange-500">
      <span className="text-xl lg:text-2xl font-extrabold uppercase font-sans">
        {group.category}
      </span>
    </div>
  );
};

const TechnologySectionCardItem: React.FC<{ technology: ITechnology }> = ({
  technology,
}) => {
  return (
    <div className="rounded p-4 bg-gray-700 border-l-2 border-yellow-400 flex items-center justify-between h-full">
      <div className="font-medium text-xs md:text-sm lg:text-lg">
        {technology.name}
      </div>
      {technology.score && (
        <div className="text-gray-500 font-extrabold italic text-xs md:text-sm lg:text-lg">
          <span>{technology.score}</span>
          <small>%</small>
        </div>
      )}
    </div>
  );
};

export default TechnologySection;
