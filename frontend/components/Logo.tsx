import React from 'react';
import Image from 'next/image';
import LogoNs from '../public/logoNS.png';
import Link from 'next/link';

interface Props {
  width?: number;
}

const Logo: React.FC<Props> = function Logo(Props) {
  return (
    <div className="w-fit">
      <Link href={'/Pesquisa'}>
        <Image
          src={LogoNs}
          alt={'Logo Next Series'}
          width={Props.width ? Props.width : '120'}
        />
      </Link>
    </div>
  );
};

export default Logo;
