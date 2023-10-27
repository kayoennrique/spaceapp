import styled from "styled-components";
import ItemNavigation from "./ItemNavigation"

const StyledList = styled.ul`
list-style: none;
padding: 0;
margin: 0;
width: 212px;
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
                        Mais vistas
                    </ItemNavigation>
                    <ItemNavigation 
                        iconActive="/icons/most-likes-active.png" 
                        iconInactive="/icons/most-likes-inactive.png"
                    >
                        Mais curtidas
                    </ItemNavigation>
                    <ItemNavigation 
                        iconActive="/icons/new-active.png" 
                        iconInactive="/icons/new-inactive.png"
                    >
                        Novas
                    </ItemNavigation>
                    <ItemNavigation 
                        iconActive="/icons/surprise-me-active.png" 
                        iconInactive="/icons/surprise-me-inactive.png"
                    >
                        Surpreenda-me
                    </ItemNavigation>
                </StyledList>
            </nav>
        </aside>
    )
}

export default SideBar;