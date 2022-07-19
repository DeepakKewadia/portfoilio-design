const Header = () => {
  return (
    <header className="header bg-[#474555] flex items-center justify-center py-2">
      <div className="container flex justify-between mx-12">
        <div className="logoDiv">
          <p className="font-playfair text-[#ABA9BB] font-bold cursor-pointer text-2xl">
            Deepak.
          </p>
        </div>
        <div className="navLinks flex w-[350px] items-center justify-between text-[#ABA9BB] flex-wrap text-lg">
          <a href="/" className="hover:underline">
            About Me
          </a>
          <a href="/" className="hover:underline">
            Projects
          </a>
          <a href="/" className="hover:underline">
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
