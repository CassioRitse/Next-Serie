import CardFilm from '../components/cardFilm';
import Logo from '../components/Logo';

export default function Favoritos() {
  
  return (
    <div className="bg-gradient-to-b from-red-500 via-red-400">
      <div className="flex flex-row justify-between items-center w-full p-1">
        <Logo width={160}/>
        <p className='text-6xl'>Favoritos</p>
        <p className='text-lg font-medium'>Cássio Ritse</p>
      </div>
      <div className="flex flex-row flex-wrap justify-center w-full">
        <CardFilm href="#" nome="7 anos no Tibet" />
        <CardFilm href="#" nome="7 anos no Tibet" />
        <CardFilm href="#" nome="7 anos no Tibet" />
        <CardFilm href="#" nome="7 anos no Tibet" />
        <CardFilm href="#" nome="7 anos no Tibet" />
        <CardFilm href="#" nome="7 anos no Tibet" />
        <CardFilm href="#" nome="7 anos no Tibet" />
        <CardFilm href="#" nome="7 anos no Tibet" />
        <CardFilm href="#" nome="7 anos no Tibet" />
        <CardFilm href="#" nome="7 anos no Tibet" />
        <CardFilm href="#" nome="7 anos no Tibet" />
        <CardFilm href="#" nome="7 anos no Tibet" />
        <CardFilm href="#" nome="7 anos no Tibet" />
        <CardFilm href="#" nome="7 anos no Tibet" />
        <CardFilm href="#" nome="7 anos no Tibet" />
        <CardFilm href="#" nome="7 anos no Tibet" />
        <CardFilm href="#" nome="7 anos no Tibet" />
        <CardFilm href="#" nome="7 anos no Tibet" />
        <CardFilm href="#" nome="7 anos no Tibet" />
        <CardFilm href="#" nome="7 anos no Tibet" />
        <CardFilm href="#" nome="7 anos no Tibet" />
      </div>
    </div>
  );
}
