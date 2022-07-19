import { Player } from "@lottiefiles/react-lottie-player";
import { BsDownload, BsBriefcase } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
const Home = () => {
  return (
    <section className="home bg-[#474555] h-screen  ">
      <div className="flex justify-between item-center mx-12 py-5">
        <div className="sectionLeft flex items-center w-[650px] h-[650px]">
          <div>
            <span className="text-5xl font-playfair text-[#FFFFFF]">
              Hi, I'm Deepak Kewadia.
            </span>
            <br></br>
            <span className="text-2xl text-[#ABA9BB] py-1">
              Frontend Developer
            </span>

            <div className="flex justify-between items-center  w-[320px] my-6">
              <div className="flex justify-between items-center py-2 px-3 cursor-pointer bg-white rounded">
                <button className="text-lg">Resume</button>
                <BsDownload className="text-xl ml-6" />
              </div>
              <div className="flex justify-between items-center py-2 px-3 cursor-pointer bg-white rounded">
                <button className="text-lg">Projects</button>
                <BsBriefcase className="text-xl ml-6" />
              </div>
            </div>
          </div>
        </div>
        <div className="sectionRight flex items-center">
          <Player
            src="https://assets7.lottiefiles.com/packages/lf20_zboivc9e.json"
            className="w-[650px] h-[650px]"
            loop
            autoplay
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
