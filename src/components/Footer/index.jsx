import styled from "styled-components";

const FooterStylized = styled.footer`    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 100px;
    background-color: #04244F;
    padding: 20px;
    box-sizing: border-box;
`;

const IconContainer = styled.ul`
    margin: 8px 0; 
    padding: 0;
    list-style: none;
    display: flex;
    li {
        margin-left: 28px;
    }
`;

const TextFooter = styled.p`
    font-size: 22px;
    color: white;
    margin: 20px 0; 
    text-align: center;
`;

function Footer() {
    return (
        <FooterStylized>
            <TextFooter>Desenvolvido por Kayo Ennrique</TextFooter>
            <IconContainer>
                <li>
                    <a href="#">
                        <img src="/images/social/iconmonstr-github-1.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/images/social/facebook.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/images/social/twitter.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/images/social/instagram.svg" alt="" />
                    </a>
                </li>
            </IconContainer>            
        </FooterStylized>
    );
}

export default Footer;
