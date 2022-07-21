import ProjectCard from "../ProjectCard/ProjectCard";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaNodeJs,
} from "react-icons/fa";
import { TbBrandNextjs, TbPuzzle } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiNetflix,
  SiTailwindcss,
  SiBloglovin,
} from "react-icons/si";
import { CgFileRemove } from "react-icons/cg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";

const Projects = () => {
  SwiperCore.use([Autoplay]);

  const slideStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const icons = [
    [<FaHtml5 className="slideicon" />, "HTML"],
    [<FaCss3Alt className="slideicon" />, "CSS"],
    [<SiJavascript className="slideicon" />, "Javascript"],
    [<SiTypescript className="slideicon" />, "Typescript"],
    [<SiPython className="slideicon" />, "Python"],
    [<FaReact className="slideicon" />, "Reactjs"],
    [<TbBrandNextjs className="slideicon" />, "Nextjs"],
    [<SiTailwindcss className="slideicon" />, "Tailwind Css"],
    [<FaDocker className="slideicon" />, "Docker"],
    [<FaNodeJs className="slideicon" />, "Nodejs"],
    [<DiMongodb className="slideicon" />, "Mongodb"],
  ];
  return (
    <section
      className="projects snap-start w-full h-full container bg-[#474555] pt-6"
      id="project"
    >
      <div className="flex flex-col mx-12 space-y-8">
        <h1 className="font-playfair text-4xl text-white border-b-2 pb-2">
          Projects, I've Worked On
        </h1>
        <div className="projectContainer flex justify-between w-full ">
          <ProjectCard
            title="Netflix Clone"
            githubLink="https://github.com/DeepakKewadia/netflix-clone"
            hostingLink="https://netflix-clone-cyan-chi.vercel.app/"
            image={<SiNetflix />}
          />
          <ProjectCard
            title="Nextjs Blog"
            githubLink="https://github.com/DeepakKewadia/nextjs-blog"
            hostingLink="https://nextjs-blog-nine-red-43.vercel.app/"
            image={<SiBloglovin />}
          />
          <ProjectCard
            title="Sudoku Solver"
            githubLink="https://github.com/DeepakKewadia/nextjs-blog"
            hostingLink="https://nextjs-blog-nine-red-43.vercel.app/"
            image={<TbPuzzle />}
          />
          <ProjectCard
            title="File Compressor"
            githubLink="https://github.com/DeepakKewadia/nextjs-blog"
            hostingLink="https://nextjs-blog-nine-red-43.vercel.app/"
            image={<CgFileRemove />}
          />
        </div>
        <div className="skill">
          <p className="text-2xl text-white font-playfair border-white pb-2 border-b-2">
            Tech Stack, That i like :-
          </p>
          <Swiper
            loop
            autoplay={{ delay: 2500 }}
            slidesPerView={5}
            className="mt-8"
          >
            {icons.map((icon, key) => {
              return (
                <SwiperSlide style={slideStyle}>
                  <div className="flex flex-col justify-center space-y-2">
                    {icon[0]}
                    <p className="text-[#ABA9BB] text-center">{icon[1]}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
