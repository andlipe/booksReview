import styled from 'styled-components';

export const A = styled.a`
    display: inline-block;
    color: ${props => props.theme.text.link};
    width: fit-content;
    margin-top: 0.5rem;
    padding: 0.5rem;
    font-size: 1rem;
    
    cursor: pointer;
    :hover {
        background-color: rgba(25, 118, 210, 0.04)
    }
`