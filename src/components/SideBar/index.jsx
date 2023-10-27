import styled from "styled-components";
import ItemNavigation from "./ItemNavigation"

const StyledList = styled.ul`
list-style: none;
padding: 0;
margin: 0;
width: 200px;
`

const SideBar = () => {
    return (
        <aside>
            <nav>
                <StyledList>
                    <ItemNavigation 
                        iconActive="/icons/home-active.png"
                        iconInactive="/icons/home-inactive.png"
                        active={true}
                    >
                        Home
                    </ItemNavigation>
                    <ItemNavigation
                        iconActive="/icons/most-views-active.png"
                        iconInactive="/icons/most-views-inactive.png"
                    >
                        Mais Vistas
                    </ItemNavigation>
                </StyledList>
            </nav>
        </aside>
    )
}

export default SideBar;