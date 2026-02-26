import ScrambledText from "./ScrambledTextProps"
import Link from 'next/link';
const Navbar = () => {
  return (

    <div className="Nav fixed top-5 flex text-[2rem] px-[35px] py-[15px] rounded-[50px] backdrop-blur-[30px] border border-white/40  shadow-md z-800">
      <ul className="flex gap-10">
        
          <li><button>
            <Link href="#home">
            <ScrambledText
            className="Nav "
            radius={100}
            duration={1.1}
            speed={0.5}
            scrambleChars=".:"
          >
            Home
          </ScrambledText>
          </Link>
        </button>
        </li>
      <li>
        <button>
          <Link href="#about" >
        <ScrambledText
          className="Nav "
          radius={100}
          duration={1.1}
          speed={0.5}
          scrambleChars=".:"
        >
          About
        </ScrambledText></Link></button></li>
      <li><button>
        <Link href="#projects">
        <ScrambledText
        className="Nav "
        radius={100}
        duration={1.1}
        speed={0.5}
        scrambleChars=".:"
      >
        Projects
      </ScrambledText></Link></button></li>

    </ul>
    </div >
    
  )
}

export default Navbar