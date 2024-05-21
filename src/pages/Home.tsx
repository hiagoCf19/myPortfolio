// import MouseIcon from "@/components/scroll";
// import HeaderCpn from "@/components/Header";
// import Welcome from "@/components/Welcome";
// import SobreMim from "@/components/SobreMim";
// import Habilidades from "@/components/Habilidades";
// import Projetos from "@/components/Projetos";
// import Contatos from "@/components/Contatos";
// import FooterCpn from "@/components/Footer";

import Contatos from "@/components/Contatos";
import FooterCpn from "@/components/Footer";
import Habilidades from "@/components/Habilidades";
import Header from "@/components/Header";
import Projetos from "@/components/Projetos";
import SobreMim from "@/components/SobreMim";
import Welcome from "@/components/Welcome";


const Home = () => {
  return (
    <>
      <Header />
      <section className="px-5 lg:px-48 flex flex-col space-y-10 sm:space-y-32">

        <img src="./publicimgs/grad.svg" className=" absolute sm:fixed h-screen w-fit -mx-5 sm:right-0 sm:-mx-0 sm:opacity-55 -z-10" />
        <img src="./publicimgs/grad.svg" className=" hidden lg:block fixed h-screen w-fit -mx-5 sm:left-0 sm:-mx-0 sm:opacity-66 rotate-180 -z-10" />
        <Welcome />
        <SobreMim />
        <Habilidades />
        <Projetos />
        <Contatos />



      </section>
      <FooterCpn />
    </>

    // <div className="bg-background text-muted-foreground">
    //   <HeaderCpn />
    //   <div className="flex flex-col sm:gap-[150px] gap-20 justify-center sm:items-center ">
    //     <Welcome />
    //     <MouseIcon />
    //     <SobreMim />
    //     <Habilidades />
    //     <Projetos />
    //     <Contatos />
    //     <FooterCpn />
    //   </div>
    // </div>
  );
};
export default Home;
