import { styled } from "styled-components";
import search from './search.png';

const ContainerStylized = styled.div`
    position: relative;
    display: inline-block;
`;


const StyledTextField = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`;

const IconMagnifier = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`;

const TextField = ({ setFilter }) => {
    return (
        <ContainerStylized>
            <StyledTextField onChange={event => setFilter(event.target.value)} type="text" placeholder="O que você procura?"/>
            <IconMagnifier src={search} alt="ícone de lupa" />
        </ContainerStylized>
    )
}

export default TextField;