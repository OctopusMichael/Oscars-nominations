import oscar from "../assets/oscar.png";
const Header = () => {
  return (
    <header>
      <nav className="flex gap-5 justify-center items-center p-10">
        <a href="/">
          <img className="w-[60px] h-auto" src={oscar} alt="oscar icon" />{" "}
        </a>
        <div className="flex flex-col gap-5 justify-center items-end">
          <h1 className="text-xl md:text-5xl font-bold text-yellow-500">
            Oscar Nominations{" "}
          </h1>
          <span className="text-[16px]">2024</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
