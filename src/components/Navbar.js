import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { css } from 'styled-components';
import { Button } from '../Button';
import {FaBars} from 'react-icons/fa' 

const Nav = styled.nav`
  height: 60px;
  z-index: 100;
  position: fixed;
  width: 100%;
`
const NavContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  padding: 2.5rem 2.5rem;
`
const NavLink = css`
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
`
const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
  font-weight: bold;
  font-size: 20px;
`
const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: white;
    height: 40px;
    width: 30px;
    cursor: pointer;
  }
`
const NavMenu = styled.div`
  display: flex;
  gap: 2rem;


  @media screen and (max-width: 768px) {
    display: none;
  }
`
const NavMenuLink = styled(Link)`
  ${NavLink}
  transition: all 0.3s ease;

 &:hover {
   transform: scale(1.1);
 } 
`
const NavBtn = styled.div`
   @media screen and (max-width: 768px) {
    display: none;
  }
`

const Navbar = ({toggle}) => {
    return ( 
      <Nav>
        <NavContainer>
          <Logo to='/'>ELIXR</Logo>
          <MenuBars onClick={toggle}/>
          <NavMenu>
            {menuData.map((menu, index) => {
              return (
                <NavMenuLink to={menu.link} key={index}>
                  {menu.title}
                </NavMenuLink>
              )
            })}
          </NavMenu>
          <NavBtn>
            <Button to='/contact' primary="true">Contact us</Button>
          </NavBtn>
        </NavContainer>
      </Nav>
     );
}
 
export default Navbar;