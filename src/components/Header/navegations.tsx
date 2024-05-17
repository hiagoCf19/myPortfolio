import { Link } from "react-scroll";
// eslint-disable-next-line react/prop-types
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
