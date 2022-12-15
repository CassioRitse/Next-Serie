import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface dataProps {
  href: string;
  nome: string;
  img?: string;
}

const CardFilm: React.FC<dataProps> = function CardFilm(Props:dataProps) {
  return (
    <div className="w-fit m-3">
      <Link href={Props.href}>
        <Image className='rounded-lg'
          alt={`Capa do filme ${Props.nome}`}
          src={`https://image.tmdb.org/t/p/w200${Props.img}`}
          height={200}
          width={200}
        />
      </Link>
    </div>
  );
};

export default CardFilm;
