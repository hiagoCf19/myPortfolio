import Contatos from "@/components/Contatos";
import FooterCpn from "@/components/Footer";
import Skills from "@/components/Habilidades";

import Header from "@/components/Header";
import Projetos from "@/components/Projetos";
import SobreMim from "@/components/SobreMim";

import Welcome from "@/components/Welcome";

const Home = () => {
  return (
    <>
      <Header />
      <section className="px-5 lg:px-48 flex flex-col space-y-6 sm:space-y-24">
        <img
          src="./publicimgs/grad.svg"
          className=" absolute sm:fixed h-screen w-fit -mx-5 sm:right-0 sm:-mx-0 sm:opacity-55 -z-10"
        />
        <img
          src="./publicimgs/grad.svg"
          className=" hidden lg:block fixed h-screen w-fit -mx-5 sm:left-0 sm:-mx-0 sm:opacity-66 rotate-180 -z-10"
        />
        <Welcome />
        <SobreMim />
        <Skills />
        <Projetos />
        <Contatos />
      </section>
      <FooterCpn />
    </>
  );
};
export default Home;
