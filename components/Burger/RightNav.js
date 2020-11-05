import { unstable_batchedUpdates } from "react-dom"

const RightNav = ({ open }) => {
  return (
    <>
    <ul open={open}>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Sign In</li>
      <li>Sign Up</li>
    </ul>
  
  
  <style jsx>{`
   ul{
 list-style: none;
 display: flex;
 flex-flow: row nowrap;
  }
 li {
   padding: 18px 10px;
 }
 @media (max-width: 677px) {
    ul{
   flex-flow: column nowrap;
   background-color: black;
   position: fixed;
   transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
   top: 0;
   right: 0;
   height: 100vh;
   width: 300px;
   padding-top: 3.5rem;
   transition: transform 0.3s ease-in-out;
    }
   li {
     color: #fff;
   }
  `}</style>
  </>
   )
 }
 
export default RightNav