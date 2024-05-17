import Nav from "./navegations";


const Header = () => {
  return (
    <header className="w-full border-gradient fixed flex flex-col justify-center ">
      <nav className="flex justify-between sm:p-6 py-6 px-4 items-center ">
        <h1 className={` sm:w-[150px]  text-[1.3rem]`}>
          Hiago Ferreira
        </h1>
        <div className="flex items-center sm:gap-8 text-[20px]">
          <Nav to={"sobre-mim"} content={"Sobre mim"} />
          <Nav to={"habilidades"} content={"Habilidades"} />
          <Nav to={"projetos"} content={"Projetos"} />
          <Nav to={"contatos"} content={"Contatos"} />
        </div>
      </nav>
      <div className={`sm:w-full w-[200%] h-[2px] `} />
    </header>


  );
};

export default Header;
