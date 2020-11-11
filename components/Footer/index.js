import {  AiOutlineLinkedin, 
          AiOutlineInstagram, 
          AiOutlineFile, 
          AiOutlineTwitter,
          AiOutlineMail
        } from 'react-icons/ai';


export default function Footer() {
  return(
    <>
    <footer>
      <div>
        Copyright © . All rights reserved.
        </div>
      
      <div>
        <AiOutlineMail size={22} color='white'/>
        <AiOutlineLinkedin size={22} color='white'/>
        <AiOutlineInstagram size={22} color='white'/>
        <AiOutlineFile size={22} color='white'/>
        <AiOutlineTwitter size={22} color='white'/>
      </div>
    </footer>
    
    <style jsx>{`
      footer{
        width:100%;
        height:50px;
        background-color:black;
        border-top:1px solid white;
        font-size:16px;
        color:white;
        padding:10px 20px 10px 20px;
        display:flex;
        justify-content:space-between;
        text-align:center;
      }

      `}</style>
    
    </>
  )
}
