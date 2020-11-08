import styled from 'styled-components';


export const HeaderContainer = styled.div`
  height:60px;
`;

export const Button = styled.button`
  background-color:transparent;
  color:white;
  outline:none;
  border:none;
`;


export const MenuContainer = styled.div`
  height:300px;
  background:black;
  color:white;
  font-size:22px;
  transform: translate(-1000px);
  transition: all 0.5s; 
    &.open{
      transform: translate(0);
    }
`;

export const NavContainer = styled.nav`
    
  ul{
    display:block;
    height:100vh;
    color:white;
    list-style:none;
    text-decoration:none;
    
    a{
      color:white;
      text-decoration: none;
      list-style:none;
      display:block;
      margin-bottom:20px;
    }
        
    li{
      display:block;
      width:100%;
      list-style:none;
      color:white;
      text-decoration:none;
      &:last-child{
        border:none;
      }

    }
  }
`;