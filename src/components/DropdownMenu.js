import styled from "styled-components";
import { Button } from "../Button";
import { menuData } from "../data/MenuData";
import {FaTimes} from "react-icons/fa";
import { Link } from "react-router-dom";

const DropdownContainer = styled.div`
    position: fixed;
    top: 0;
    left: ${({isOpen}) => (isOpen ? '0' : '100%')};
    transition: all 0.3s ease;
    background: #cd853f;
    z-index: 999;
    width: 100%;
    height: 100%;
    opacity: ${({isOpen}) => (isOpen ? 1 : 0)};;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6rem;
`
const Icon = styled.div`
    position: absolute;
    top: 1rem;
    right: 3rem;
    font-size: 2rem;
    background: transparent;
    cursor: pointer;
    outline: none;   
`
const CloseIcon = styled(FaTimes)`
    color: #000d1a;
    height: 40px;
    width: 30px;
`
const DropdownMenu = styled.div`
    text-align: center;
`
const Menu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`
const MenuLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        color: #000d1a;
    }
`
const BtnWrap = styled.div`
`

const Dropdown = ({isOpen, toggle}) => {
    return ( 
        <>  
            <DropdownContainer isOpen={isOpen} toggle={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>

                <DropdownMenu>
                    <Menu>
                        {menuData.map((menu, index) => {
                            return (
                                <MenuLink to={menu.link} key={index} onClick={toggle}>
                                    {menu.title}
                                </MenuLink>
                            )
                        })}
                    </Menu>
                </DropdownMenu>
                <BtnWrap>
                    <Button onClick={toggle} primary="true" round="true" big="true" to="/contact" >Contact Us</Button>
                </BtnWrap>
            </DropdownContainer>
        </>
     );
}
 
export default Dropdown;