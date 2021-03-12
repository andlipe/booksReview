import Link from 'next/link';
import React from 'react';
import { HeaderContainer } from './styles';
import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter();
    
    return (
        <HeaderContainer>
            {router.pathname !== '/' && 
                (
                <Link href={"/"}>
                    <a> {"<"} </a>
                </Link>
                )
            }
            <h3>Books</h3>
        </HeaderContainer>
    );
}

export default Header;
