import React, { useState } from 'react' 
import Header from 'components/Header'

function Burger(){
  const [open, setOpen] = useState(false)

  return(
    <>
  <div className='styledBurger' open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </div>
  <Header open={open}/>
  
  <style jsx>{`
  .styledBurger{  
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 20;
    display: none;
  }
  @media (max-width: 677px) {
    .styledBurger{
      display: flex;
      justify-content: space-around;
      flex-flow: column nowrap;
    }
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
  }
  div &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
   div  &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
   div  &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  `}</style>
  
  </>
  )
}
export default Burger;
