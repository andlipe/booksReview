import styled from 'styled-components';

export const BookDetailsContainer = styled.article`
    margin: 2rem;

    h3 {
        font-size: 2rem;
        padding: 1rem;
        border-bottom: 0.5px solid #c5c5c5;
        margin-bottom: 1rem;
    }
    p {
        padding: 0.5rem;
        font-size: 1.4rem;
        font-weight: 600;
    }
    span {
        font-size: 1.4rem;
        
    }
    @media ${props => props.theme.screens.tablet} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 5rem;

    }

    @media ${props => props.theme.screens.laptop} {
        display: flex;
        flex-direction: row;

        justify-content: center;
        margin: 5rem;

        section {
            margin-left: 2rem;
        }

        h3 {
            font-size: 2.5rem;
        }

        p {
            padding: 1rem;
            font-size: 1.6rem;
            font-weight: 600;
        }
    }
    
`