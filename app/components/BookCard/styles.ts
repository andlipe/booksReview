import styled from 'styled-components';
import { device } from '@styles/device';

export const BookCardContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    margin: 1rem;
    width: 100%;
    -webkit-box-shadow: 0.5px 0.5px 5px #c1c1c1;  
    -moz-box-shadow:    0.5px 0.5px 5px #c1c1c1;  
    box-shadow:         0.5px 0.5px 5px #c1c1c1;
    border-radius: 8px;

    h3 {
        font-size: 1.5rem;
        word-wrap: break-word;
    }

    @media ${device.laptop} {
        width: 25%;
    }

`