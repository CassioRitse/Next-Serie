import Image from 'next/image';
import Logo from '../../components/Logo';

interface Props {
  original_title: string;
  tagline: string;
  poster_path: string;
  overview: string;
  genres: [];
  popularity: number;
  vote_average: number;
}

export default function Avaliacao(props: Props) {
  return (
    <div className="bg-gradient-to-br from-red-500 via-red-400">
      <div className="flex flex-row justify-between items-center w-full p-1">
        <Logo width={160} />
        <p className="text-6xl">{props.original_title}</p>
        <p className="text-lg font-medium">Cássio Ritse</p>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        <div className="p-4">
          <Image
            className="rounded-[10px]"
            alt={`Capa do filme ${props.original_title}`}
            src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
            height={250}
            width={250}
          />
        </div>
        <div className="p-4 w-2/3 h-1/3">
          <div className="mb-4 text-xl">
            <p className="text-xl font-semibold">{props.original_title}</p>
            <p>{props.tagline}</p>
            <p className="text-md">
              Popularidade:
              <span className="text-white font-light font-inter">
                {` ${props.popularity}`}
              </span>
            </p>
            <p>
              Pontuação:
              <span className="text-white font-light font-inter">
                {` ${props.vote_average}`}
              </span>
            </p>
          </div>
          <div className="bg-default-color-100 rounded-[10px] p-3 h-full">
            {props.overview}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const avaliacaoid = query.avaliacaoid;
  const apiFilme = `https://api.themoviedb.org/3/movie/${avaliacaoid}?api_key=c6d896023eb36c5883f8ee428fd6029c&language=en-US`;
  const resFilme = await fetch(apiFilme);
  const dataFilme = await resFilme.json();

  console.log(dataFilme);

  return {
    props: dataFilme,
  };
}
