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
  return (
    <section
      className="projects snap-start w-full h-screen container bg-[#474555] pt-6"
      id="project"
    >
      <div className="flex flex-col mx-12 space-y-8">
        <h1 className="font-playfair text-4xl text-white border-b-2 pb-2">
          Projects
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
          <Swiper
            loop
            autoplay={{ delay: 2000 }}
            slidesPerView={5}
            className="mt-16"
          >
            <SwiperSlide style={slideStyle}>
              <FaReact className="slideicon" />
            </SwiperSlide>

            <SwiperSlide style={slideStyle}>
              <TbBrandNextjs className="slideicon" />
            </SwiperSlide>

            <SwiperSlide style={slideStyle}>
              <FaNodeJs className="slideicon" />
            </SwiperSlide>

            <SwiperSlide style={slideStyle}>
              <FaHtml5 className="slideicon" />
            </SwiperSlide>

            <SwiperSlide style={slideStyle}>
              <FaCss3Alt className="slideicon" />
            </SwiperSlide>

            <SwiperSlide style={slideStyle}>
              <SiJavascript className="slideicon" />
            </SwiperSlide>

            <SwiperSlide style={slideStyle}>
              <SiTypescript className="slideicon" />
            </SwiperSlide>

            <SwiperSlide style={slideStyle}>
              <SiPython className="slideicon" />
            </SwiperSlide>

            <SwiperSlide style={slideStyle}>
              <FaDocker className="slideicon" />
            </SwiperSlide>

            <SwiperSlide style={slideStyle}>
              <DiMongodb className="slideicon" />
            </SwiperSlide>

            <SwiperSlide style={slideStyle}>
              <SiTailwindcss className="slideicon" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
