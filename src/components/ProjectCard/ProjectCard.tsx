interface ProjectCardProps {
  title: string;
  githubLink: string;
  hostingLink: string;
  image: React.ReactNode;
}

const ProjectCard = ({
  title,
  githubLink,
  hostingLink,
  image,
}: ProjectCardProps) => {
  return (
    <section className="projectCard w-[300px] h-[400px] flex flex-col justify-between text-white bg-[#ABA9BB] cursor-pointer rounded-lg p-4 hover:scale-105 transition">
      <h1 className="border-b-2 pb-2 text-lg text-center ">{title}</h1>
      {/* <p>This is a Project.</p> */}
      <div className="image flex justify-center item-center text-8xl">
        {image}
      </div>
      <div className="btns flex justify-between">
        <a
          href={githubLink}
          target="_blank"
          className="border-2 border-white py-2 px-8 rounded text-white hover:text-[#474555] text-lg hover:border-[#474555] transition duration-100"
        >
          Github
        </a>
        <a
          href={hostingLink}
          target="_blank"
          className="border-2 border-white py-2 px-8 rounded text-white text-lg hover:text-[#474555] hover:border-[#474555] transition duration-100"
        >
          View
        </a>
      </div>
    </section>
  );
};

export default ProjectCard;
