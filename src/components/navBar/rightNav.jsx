import styled from "styled-components"
import { useNavigate } from 'react-router-dom';

const Ul = styled.ul`
    
    list-style: none;
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    
    li{
        padding: 18px 10px;
        cursor: pointer;
        font-size: 17px;
        font-weight: 500;
    }

    li:hover{
        color: #f95669;
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #f95669;
        position: fixed;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 60vw;
        padding-top: 5rem;
        transition: transform 0.3s ease-in-out;
        align-items: flex-start;
        gap: 10px;
        margin-top: 0px;

        li{
            color: #fff;
            font-size: 17px;
            font-weight: 500;
        }
    }
`

const RightNav = ({open}) => {

    const navigate = useNavigate()


    return(
        <Ul open={open}>
            <li onClick={() => navigate("/")}>CUPONS</li>
            <li>OFERTAS</li>
            <li onClick={() => navigate("/lojas")}>LOJAS</li>
        </Ul>
    )
}

export default RightNav