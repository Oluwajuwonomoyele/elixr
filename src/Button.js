import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    background-color: ${({primary}) => (primary ? '#000d1a' : '#cd853f')};
    outline: none;
    border: none;
    border-radius: ${({round}) => (round ? '5px' : 'none' )};
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease;
    padding: ${({big}) => (big ? '16px 48px' : '10px 19px')};
    color: ${({primary}) => (primary ? '#fff' : '#000d1a')};
    font-size: ${({big}) => (big ? '20px' : '14px')};
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: space-between;
    
    &:hover{
        transform: translateY(-2px);
    }
`