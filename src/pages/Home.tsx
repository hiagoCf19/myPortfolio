// import MouseIcon from "@/components/scroll";
// import HeaderCpn from "@/components/Header";
// import Welcome from "@/components/Welcome";
// import SobreMim from "@/components/SobreMim";
// import Habilidades from "@/components/Habilidades";
// import Projetos from "@/components/Projetos";
// import Contatos from "@/components/Contatos";
// import FooterCpn from "@/components/Footer";

import Header from "@/components/Header";
import SobreMim from "@/components/SobreMim";
import Welcome from "@/components/Welcome";


const Home = () => {
  return (
    <section className="px-5 flex flex-col space-y-10">
      <Header />
      <img src="./publicimgs/grad.svg" className="absolute w-fit -mx-5" />
      <Welcome />
      <SobreMim />
    </section>
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
