import Link from 'next/link';
import React from 'react';
import { HeaderContainer } from './styles';

const Header = ({ path }) => {
    
    return (
        <HeaderContainer>
            {path !== 'index' && 
                (
                <Link href={"/"}>
                    <a> {"<"} </a>
                </Link>
                )
            }
            <h3>Books Tag</h3>
        </HeaderContainer>
    );
}

export default Header;
