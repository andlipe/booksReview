import styled from 'styled-components';

export const BookCardContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    margin: 1rem;
    width: 100%;
    -webkit-box-shadow: 0.5px 0.5px 5px #c1c1c1;  
    -moz-box-shadow:    0.5px 0.5px 5px #c1c1c1;  
    box-shadow:         0.5px 0.5px 5px #c1c1c1;
    border-radius: 8px;

    h3 {
        font-size: 2rem;
        word-wrap: break-word;
        margin: 1rem 0;
    }

    p {
        padding: 0.5rem;
        font-size: 1.1rem;
        font-weight: 600;
    }
    @media ${props => props.theme.screens.laptop} {
        width: 25%;
        padding: 2rem;

    }

`