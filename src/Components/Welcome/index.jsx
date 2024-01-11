import { useContext } from "react";
import temaCtx from "../../Context/context";
import TypingEffect from "../EfeitoDigitação";
import ScroolCpn from "./ScrollComponent";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "./Socialicons";
import Typing from "react-typing-effect";

const Welcome = () => {
  const { themeState } = useContext(temaCtx);
  return (
    <section
      className=" px-4  mt-[-65px] flex flex-col gap-8"
      id="Seja-Bem-Vindo"
    >
      <div className="flex  box-content sm:gap-[20%] gap-16 flex-col-reverse sm:flex-row mt-[-90px] sm:mt-2 overflow-x-hidden">
        <div className="w-min-max flex-1 flex flex-col gap-12 justify-center items-center border ml-8 ">
          {/* MEUS DADOS PESSOAIS */}
          <div className="flex flex-col ml-[-50px] gap-6 sm:gap-0 mt-[-42px]">
            <div>
              <h1 className="sm:text-[60px] text-[40px] sm:w-[420px] w-[280px] h-[80px] sm:h-[140px] font-bold">
                {" "}
                Olá, eu sou <br />
                <strong
                  className={`
                ${
                  themeState === false
                    ? " text-transparent bg-clip-text bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] "
                    : "text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#6c7161] "
                }
                
                `}
                >
                  <TypingEffect text="Hiago Ferreira" speed={120} />
                </strong>
              </h1>
            </div>

            <span
              className={`text-[20px] ${
                themeState === false ? "text-[#a7a7a7]" : "text-[#000000]"
              } font-medium `}
            >
              {" "}
              <Typing
                speed={100}
                eraseDelay={999999999}
                text={["Desenvolvedor Front-end"]}
              />
            </span>
          </div>

          {/* MEUS ICONES PERSONALIZADOS */}
          <div className="flex sm:w-[400px] w-[300px] gap-6 sm:ml-[-60px] py-3">
            <a href="https://github.com/hiagoCf19" target="_blank">
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
            >
              <LinkedinIcon />
            </a>
            <a href="https://wa.me/5531982033698" target="_blank">
              <WhatsAppIcon />
            </a>
          </div>
        </div>
        {/* BANNER / MINHA FOTO */}
        <div className=" sm:flex-1 flex sm:flex-col justify-center sm:mt-0 mt-[220px] items-center  ">
          {/* MINHA LOGO */}
          <img
            src={
              themeState === false
                ? "publicimgs/banner2.svg"
                : "publicimgs/bannerThemeL.svg"
            }
            alt="Minha Foto"
            className="anima sm:w-[750px] sm:h-[600px] w-[400px] sm:rounded-lg  ml-[-30px] hidden sm:block "
          />
          {/* MINHA FOTO */}
          <div
            className={`sm:w-[650px] sm:h-[650px] sm:rounded-lg w-[220px] h-[220px] sm:mt-[40px] sm:hidden rounded-full border-[4px] border-solid flex  items-center ${
              themeState === false
                ? "border-[#9a34f4] shadow-xl shadow-[#9a34f47c] "
                : "border-[#010002] shadow-xl shadow-[#29282b] "
            }`}
          >
            <img
              src="/publicimgs/eu2.jpeg"
              className={`rounded-full h-full w-full`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Welcome;
