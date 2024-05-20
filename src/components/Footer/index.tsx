import { Linkedin } from "lucide-react";
import { BsGithub, BsInstagram } from "react-icons/bs";


const FooterCpn = () => {
  return (
    <footer className="border-t border-primary p-5">
      <div className="flex items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <img src="./logo.png" alt="logo" className="size-10" />
          <h1>Hiago C. Ferreira</h1>
        </div>
        <div className="flex items-center space-x-3">
          <a href="https://www.instagram.com/hiagocf19/" target="_blank">
            <BsInstagram size={25} className="text-primary" />
          </a>
          <a href="https://github.com/hiagoCf19" target="_blank">
            <BsGithub size={25} className="text-primary" />
          </a>
          <a href="https://www.linkedin.com/in/dev-hiago79216/" target="_blank">

            <Linkedin size={25} className="text-primary"
            />
          </a>
        </div>

      </div>
    </footer>
  );
};
export default FooterCpn;
