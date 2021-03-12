import Link from 'next/link';
import React from 'react';
import { A } from './styles';

const StyledLink = ({ isbn }) => {
    return (
        <Link href={`/details/${isbn}`}> 
                <A>Ver mais</A>
        </Link>
    );
}

export default StyledLink;
