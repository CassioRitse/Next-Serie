import { useEffect, useState } from 'react';
import CardFilm from '../components/cardFilm';
import Logo from '../components/Logo';
import TextButton from '../components/TextButton';

interface dataGenero {
  id: number;
  name: string;
}
interface dataFilme {
  id: number;
  original_title: string;
  backdrop_path: string;
}

export default function Favoritos(props) {
  return (
    <div className="bg-gradient-to-br from-red-500 via-red-400 ">
      <div className="flex flex-row justify-between items-center w-full p-1">
        <Logo width={160} />
        <p className="text-6xl">Populares</p>
        <p className="text-lg font-medium">Cássio Ritse</p>
      </div>
      <div className="flex flex-row ">
        <div className="flex flex-col text-white p-3 m-1 ">
          {props.dataGeneros.map((genero: dataGenero) => (
            <TextButton
              key={genero.id}
              href="#"
              text={genero.name}
              style="text-2xl hover:text-black"
            />
          ))}
        </div>
        <div className="flex flex-row flex-wrap justify-center w-full">
          {props.dataPopularFilmes.map((filme: dataFilme) => (
            <CardFilm
              href={`/avaliacao/${filme.id}`}
              key={filme.id}
              nome={filme.original_title}
              img={filme.backdrop_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const apiGeneros =
    'https://api.themoviedb.org/3/genre/movie/list?api_key=c6d896023eb36c5883f8ee428fd6029c&language=en-US';
  const resGeneros = await fetch(apiGeneros);
  const dataGeneros = await resGeneros.json();

  const apiPopularFilmes =
    'https://api.themoviedb.org/3/movie/popular?api_key=c6d896023eb36c5883f8ee428fd6029c&language=en-US&page=1';
  const resPopularFilmes = await fetch(apiPopularFilmes);
  const dataPopularFilmes = await resPopularFilmes.json();

  return {
    props: {
      dataGeneros: dataGeneros.genres,
      dataPopularFilmes: dataPopularFilmes.results,
    }, // will be passed to the page component as props
  };
}
