import { Player } from "@lottiefiles/react-lottie-player";
import { BsDownload, BsBriefcase } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
const Home = () => {
  return (
    <section className="home snap-start bg-[#474555] h-full bg-cover bg-center relative">
      <div className="flex justify-between item-center mx-12 py-5">
        <div className="sectionLeft flex flex-col justify-center items-start w-[650px] h-[650px] mt-10 relative">
          <div>
            <p className="text-5xl font-playfair text-[#FFFFFF]">
              Hi, I'm Deepak Kewadia.
            </p>

            <p className="text-xl leading-9 text-[#ABA9BB] py-4">
              I'm{" "}
              <span className="text-3xl text-white">Frontend Developer </span>
              in indore, with 6 months of experience in web world. If you're
              hiring a junior front-end developer or just want to chat, get in
              touch.
            </p>

            <div className="flex justify-between items-center  w-[320px] my-6">
              <div className="flex justify-between items-center  border-2 border-white text-white hover:border-[#ABA9BB] hover:text-[#ABA9BB] transition  py-2 px-3 cursor-pointer bg- rounded">
                <a
                  href="../../../public/pdf/Deepak_Kewadia_Resume.pdf"
                  className="text-lg"
                  target="_blank"
                >
                  Resume
                </a>
                <BsDownload className="text-xl ml-6" />
              </div>
              <div className="flex justify-between items-center py-2 px-3 cursor-pointer border-2 border-white text-white hover:border-[#ABA9BB] hover:text-[#ABA9BB] transition rounded">
                <button className="text-lg">Projects</button>
                <BsBriefcase className="text-xl ml-6" />
              </div>
            </div>
          </div>
          <div className="social flex justify-between w-[319px] mt-4">
            <a href="">
              <FaInstagram className="text-4xl text-white hover:text-[#ABA9BB]" />
            </a>
            <a
              href="https://www.linkedin.com/in/deepak-kewadia/"
              target="_blank"
            >
              <FaLinkedinIn className="text-4xl text-white hover:text-[#ABA9BB]" />
            </a>
            <a href="">
              <FaTwitter className="text-4xl text-white hover:text-[#ABA9BB]" />
            </a>
            <a href="">
              <SiHashnode className="text-4xl text-white hover:text-[#ABA9BB]" />
            </a>
          </div>
          <Player
            src="https://assets10.lottiefiles.com/packages/lf20_btkj8xsi.json"
            className="w-[450px] h-[450px] absolute overflow-hidden left-[25rem] top-[15rem] box-border"
            loop
            autoplay
          />
          <Player
            src="https://assets10.lottiefiles.com/packages/lf20_btkj8xsi.json"
            className="w-[300px] h-[300px] absolute overflow-hidden -top-[10rem] left-30 opacity-70"
            loop
            autoplay
          />
          <Player
            src="https://assets10.lottiefiles.com/packages/lf20_btkj8xsi.json"
            className="w-[200px] h-[200px] absolute overflow-hidden right-0 top-0 opacity-50"
            loop
            autoplay
          />
        </div>
        <div className="sectionRight flex items-center mt-10">
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
