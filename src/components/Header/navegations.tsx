import { Link } from "react-scroll";
interface NavProps {
  to: string;
  content: string;
  setIsOpen: (isOpen: boolean) => void
}

const Nav = ({ to, content, setIsOpen }: NavProps) => {
  return (
    <nav>
      <Link
        to={to}
        spy={true}
        smooth={true}
        duration={500}
        offset={-150}
        activeClass="ativo"
        className="hover:text-primary cursor-pointer"
        onClick={() => setIsOpen(false)}
      >
        {content}
      </Link>
    </nav>
  );
};
export default Nav;
