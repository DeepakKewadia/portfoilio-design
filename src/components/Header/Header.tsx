const Header = () => {
  return (
    <header className="header w-full top-0 bg-[#474555] flex items-center justify-center py-2">
      <div className="container flex justify-between mx-12">
        <div className="logoDiv">
          <a
            href="/"
            className="font-playfair text-[#ABA9BB] font-bold cursor-pointer text-2xl"
          >
            Deepak.
          </a>
        </div>
        <div className="navLinks flex w-[350px] items-center justify-between text-white  flex-wrap text-lg">
          <a
            href="#about"
            className="hover:underline hover:text-[#ABA9BB] transition"
          >
            About Me
          </a>
          <a
            href="/"
            className="hover:underline hover:text-[#ABA9BB] transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:underline hover:text-[#ABA9BB] transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
