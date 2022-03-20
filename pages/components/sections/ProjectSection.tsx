import { IProject } from "../../../core/models";
import { ProjectData } from "../../../core/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const ProjectSection = () => {
  return (
    <div
      className="py-12 pb-8"
    >
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        className="p-4 pb-16"
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide className="w-full md:w-[500px] lg:w-[600px] h-[400px] cursor-pointer">
          <ProjectSectionHeroCard />
        </SwiperSlide>
        {ProjectData.map((project, key) => (
          <SwiperSlide key={key} className="w-full md:w-[400px] h-[400px] cursor-pointer">
            <ProjectSectionItemCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export const ProjectSectionHeroCard = () => {
  return (
    <div className="bg-gradient-to-br from-purple-600 to-indigo-800 rounded-xl shadow relative w-full h-full transition-all ease-in-out duration-500 hover:-translate-x-4 hover:shadow-lg">
      <div
        className="w-full h-full p-6"
        style={{
          backgroundImage: "radial-gradient(rgb(49 46 129) 1px, transparent 0)",
          backgroundSize: "30px 30px",
          backgroundPosition: "-5px -5px",
        }}
      >
        <h2 className="font-extrabold text-5xl font-sans uppercase">
          projects
        </h2>
        <p className="italic font-light text-gray-300 text-sm md:text-xl mt-4">
          {'"'}Some highlights from the last years...{'"'}
        </p>
        <i className="fad fa-code fa-3x text-white absolute right-4 bottom-4"></i>
      </div>
    </div>
  );
};

export const ProjectSectionItemCard: React.FC<{ project: IProject }> = ({
  project,
}) => {
  return (
    <div className="rounded-xl shadow w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 transition-all ease-in-out duration-200 hover:scale-105 hover:shadow-lg">
      <div className="flex flex-col items-stretch justify-between h-full">
        <div
          className="p-6 h-full font-extrabold uppercase tracking-wide flex flex-col items-stretch justify-start"
          style={{
            backgroundImage:
              "radial-gradient(rgb(55 65 81) 1px, transparent 0)",
            backgroundSize: "30px 30px",
            backgroundPosition: "-5px -5px",
          }}
        >
          <div className="text-2xl md:text-3xl w-2/3 font-sans">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-indigo-500">
              {project.company}
            </span>
          </div>
          <div className="text-4xl md:text-5xl text-white font-sans mr-8">
            {project.name}
          </div>
        </div>
        <div className="rounded-b-xl flex items-center justify-between text-xs text-gray-500 gap-6 p-4">
          <div>
            <span className="font-extralight italic">role</span>
            <i className="fad fa-user-circle fa-fw mx-1"></i>
            <span className="font-bold">{project.role}</span>
          </div>
          {project.for && (
            <div>
              <span className="font-extralight italic">working</span>
              <i className="fad fa-at fa-fw mx-1"></i>
              <span className="font-bold">{project.for}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
