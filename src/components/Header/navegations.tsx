import { Link } from "react-scroll";
interface NavProps {
  to: string;
  content: string;
}
const Nav = ({ to, content }: NavProps) => {
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
      >
        {content}
      </Link>
    </nav>
  );
};
export default Nav;
