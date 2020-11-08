import Link  from 'next/link';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { VscChromeClose } from 'react-icons/vsc';
import { useState } from 'react';
import * as S from './styles';



export default function MobileMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  
  const handleClick = () => {
    setOpenMenu(!openMenu); 
    console.log(openMenu, 'SOY OPENMENY CONSOLE'); 
    
  }


  return(
    <>
<S.HeaderContainer>
<S.Button onClick={handleClick}>
  {openMenu !== true ? 
    <HiOutlineMenuAlt4 size={52} /> 
    :  
    <VscChromeClose size={52} />
  }
</S.Button>  
    <S.MenuContainer className={openMenu !== true ? " " : "open" }>  
     <S.NavContainer>
      <ul>
        <Link href="/"  as="/" >
          <a>Fermin Guerrero</a>
        </Link>
        <Link href="/graphicDesign"  as="/graphicDesign" >
          <a>Graphic Design</a>
        </Link>
        <Link href="/typefaceDesign"  as="/typefaceDesign" >
          <a>Typeface Design</a>
        </Link>
        <Link href="/about"  as="/about" >
          <a>About</a>
        </Link>
      </ul>
      </S.NavContainer>
    </S.MenuContainer>  

</S.HeaderContainer>


</>
  )
}


