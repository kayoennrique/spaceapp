import styled from "styled-components";

const ItemListStylized = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.$active ? '#7b7be5' : '#d9d9d9'};
    font-family: ${props => props.$active ? 'GandhiSansBold' : 'GandhiSansRegular'};
    display: flex;
    align-items: center;
    gap: 22px;
`;

const ItemNavigation = ({ children, iconActive, iconInactive, active }) => {
    return <ItemListStylized $active={active}>
        <img src={active ? iconActive : iconInactive} alt="" />
        {children}
    </ItemListStylized>
}

export default ItemNavigation;