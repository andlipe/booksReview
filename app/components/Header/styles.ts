import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-color: #4B5494;
    color: ${props => props.theme.text.primary};
    display: inline-flex;
    justify-content: center;
    padding: 1.5rem;
    width: 100%;
    h3 {
        font-size: 2rem;
    }

    a {
        position: absolute;
        left: 1rem;
        font-size: 2rem;
    }
`