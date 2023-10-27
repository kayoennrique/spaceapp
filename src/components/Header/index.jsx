import { styled } from "styled-components";
import TextField from "../TextField"

const HeaderStylized = styled.header`
padding: 60px 0;
display: flex;
justify-content: space-between;    
img {
    max-width: 200px;
}
`;

const Header = () => {
    return (
        <HeaderStylized>
            <img src="/images/logo.png" alt="Foto do logo do SpaceApp" />
            <TextField />
        </HeaderStylized>
    );
}

export default Header;