import Contatos from "@/components/Contatos";
import FooterCpn from "@/components/Footer";
import { skill, stacks } from "@/components/Habilidades/icons";
import SkillCard from "@/components/Habilidades/newSkills";
import Header from "@/components/Header";
import Projetos from "@/components/Projetos";
import SobreMim from "@/components/SobreMim";
import Title from "@/components/Titulo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Welcome from "@/components/Welcome";
import { useState } from "react";

const Home = () => {
  // Estado para armazenar a stack selecionada
  const [selectedStack, setSelectedStack] = useState("");

  const handleSelectChange = (value: string) => {
    setSelectedStack(value); // Atualiza o estado com o valor do select
  };

  // Filtra as skills com base no valor selecionado
  const filteredSkills = skill.filter((s) => {
    if (selectedStack === "FRONT-END") {
      return (
        s.stack === stacks["FULL-STACK"] || s.stack === stacks["FRONT-END"]
      );
    } else if (selectedStack === "BACK-END") {
      return s.stack === stacks["FULL-STACK"] || s.stack === stacks["BACK-END"];
    } else if (selectedStack === "Outros") {
      return s.stack === "Outros";
    }
    return true;
  });
  return (
    <>
      <Header />
      <section className="px-5 lg:px-48 flex flex-col space-y-10 sm:space-y-32">
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
        {/* <Habilidades /> */}
        <div className="space-y-4">
          <Title title="Experiência" subTitle="Com o que trabalhei" />
          <div className="w-full justify-end items-end flex px-8 py-4">
            <Select value={selectedStack} onValueChange={handleSelectChange}>
              <SelectTrigger className="w-[180px] border-primary">
                <SelectValue placeholder="Stack" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1a1a] text-zinc-50 border-none">
                <SelectItem value="BACK-END">Back-end</SelectItem>
                <SelectItem value="FRONT-END">Front-end</SelectItem>
                <SelectItem value="Outros">Outros</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-2 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] md:gap-4">
            {filteredSkills.map((skill, i) => (
              <SkillCard key={i} skillName={skill.nome} icon={skill.icon} />
            ))}
          </div>
        </div>
        <Projetos />
        <Contatos />
      </section>
      <FooterCpn />
    </>
  );
};
export default Home;
